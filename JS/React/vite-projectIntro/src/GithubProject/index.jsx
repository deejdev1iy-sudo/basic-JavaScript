import  {useEffect, useState} from 'react';
import axios from 'axios';


import TopNav from './TopNav';
import InfoSection from './InfoSection';
import PersonCard from './PersonCard';

function GithubProject() {
    const [people, setPeople] = useState([]);
     
    const getUserData = async () => {
        try {
            let response = await axios ({
                method: 'GET',
                url: 'https://api.github.com/users',
                headers: {
                    Authorization:``,
                    Accept: '',
                }
            });
            setPeople(response.data);
        } catch (e) {
            console.log('error is', e);
        }
    };

    console.log(people);

    useEffect(() => {
        getUserData();
    }, []);
    
    return(
        <div>
            <TopNav setPeople={setPeople}/>
            <InfoSection people={people} />
            {people.map((person) => (
             <PersonCard key={person.id} person={person}/>
            ))}
        </div>
    );
}

export default GithubProject;