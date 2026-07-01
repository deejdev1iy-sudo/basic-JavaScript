// global scopes < variables are accessible globally anywhere in our code

/*
{}-> 
*/
let myName = "Juliet";

function sayMyName(){
    let name = "Rue";
    console.log(`name ${myName} and the line ${6}`)
    console.log(`name ${name} and the line ${9}`)

    if(true){
        let name = "Scooby";
        console.log(`name ${name} line ${13}`);
    };
  
};
sayMyName();

