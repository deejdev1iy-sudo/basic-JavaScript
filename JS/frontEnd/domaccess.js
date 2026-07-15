const div1 = document.getElementById("div1");
//console.log(div1)
const div2 = document.querySelector("#div1");
console.log(div2)

const artifactsItems = document.getElementsByClassName("artifact-item");
const queryArtifactsItems =  document.querySelector(".artifact-item");
const queryArtifactsItemsAll =  document.querySelectorAll(".artifact-item")
console.log(artifactsItems);

const newArrivals = ['Hackmanite','Fluorite','Hiddenite'];
const originalDiv = document.querySelector("#div1").innerHTML 
console.log(originalDiv)

function originalArtifacts(){
    console.log('original clicked');
    document.querySelector("#div1").innerHTML = originalDiv;   
}

function replaceArtifacts(){
    console.log('replaced clicked');
    const newHtml = `<h2>Arrivals</h2>
        <ul>
            <li class="artifact-item">Mango puree</li>
            <li class="artifact-item">Lamb chops</li>
            <li class="artifact-item">Wood work</li>
        </ul>`;
        document.querySelector("#div1").innerHTML = newHtml;
}

function updateAllArtifacts(){
    const newArrivalsElements = document.querySelector("#div1").querySelectorAll(".artifact-item");
    console.log(newArrivalsElements);
    for(let i = 0; i < newArrivalsElements.length; i++) {
        const singleArtifactElement = newArrivalsElements[i];
        singleArtifactElement.innerText = newArrivals[i];
    }
}