function clickAlert(e){
  console.log(e);
  alert("Button was clicked");
}

function mouseOverAlert(c){
    console.log(c);
    console.log("Mouse over", new Date());
}

const eventChecker = document.querySelector("#btn-event-checker");
const xDisplay = document.querySelector("#x-b");
const yDisplay = document.querySelector("#y-b");

if (eventChecker) {
    eventChecker.addEventListener("click", clickAlert);
    eventChecker.addEventListener("mouseover", mouseOverAlert);
}

window.addEventListener("mousemove", (e) => {
    if (xDisplay) {
        xDisplay.textContent = e.clientX;
    }

    if (yDisplay) {
        yDisplay.textContent = e.clientY;
    }
});