import {useState} from "react";

function Form2() {

    const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
 });

  const nameOnChange = (e) => {
    const inputClone = {...input };
    inputClone.name = e.target.value;
    setInput(inputClone);
 };

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is",input.name);
    console.log("email is", input.email);
    console.log("password is", input.password);  
 };

 console.log(input);

 return(
    <div>
        <main>
            <div>
                <label>Name</label>
            </div>
            <div>
                <input value={input[0]} onChange={nameOnChange} />
            </div>
        </main>

        <main>
            <div>
                <label>Email</label>
            </div>
            <div>
                <input value={input[1]} onChange={(e) =>{
                    const inputClone = [...input];
                    inputClone[1] = e.target.value;
                    setInput(inputClone);
                }}
                />
            </div>
        </main>

        <main>
            <div>
                <label>Phone</label>
            </div>
            <div>
                <input
                  value={input[2]}
                  onChange={(e) =>{
                    const inputClone = [...input];
                    inputClone[2] = e.target.value;
                    setInput(inputClone);
                  }}
                />
            </div>
        </main>
        
        <main>
            <div>
                <label>Password</label>
            </div>
            <input
              type="password"
              value={input[3]}
              onChange={(e) =>{
                const inputClone = [...input];
                inputClone[3] = e.target.value;
                setInput(inputClone);
              }}
            />
        </main>


        <main>
            <button onClick={onSubmit}>Submit</button>
        </main>

        <ul>
            <li>Name:{input[0]}</li>
            <li>Email:{input[1]}</li>
            <li>Phone:{input[2]}</li>
            <li>Password:{input[3]}</li>
        </ul>
     </div>
   );
}


export default Form2;