import { useState } from 'react';

function PersonCard (props) {

    const { person} = props;

    const [ followers, setFollowers] = useState([]);
    const {login, repos_url, followers_url, avatar_url, html_url} = person;
    
    const getFollowers = async () => {
        try {
            let response = await axios({
                method: 'GET',
                url: 'followers_url',
                headers: {
                    Authorization: ``,
                    Accept: '',
                },
            });
            setFollowers(response.data);
        }   catch (e) {}
    };

    useEffect(() =>{
        getFollowers()
    }, []);

    return(
        <div style={{ 
            display: 'flex',
            marginTop: '20px', 
            justifyContent:'space-between',
            marginTop:'20px', 
            marginBottom: '20px',
            border: '2px solid rgba(0,0,0,0.1),'
          }}
        >
            <img src={avatar_url} style={{ height: '100px' }} />
            <div style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent:'space-evenly'

             }}
            
             >
                <div>
                  <b style={{ fontSize: '20px'}}>{login}</b>
                </div>
                <div>Followers: {followers.length}</div>
                <button>Github profile</button>
                <button>View Repositories</button>
            </div>
        </div>
    );

}

export default PersonCard;