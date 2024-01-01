var findJob = document.getElementById("submit-btn");
var inputText1 = document.querySelector("#input-sec1");
var inputText2 = document.querySelector("#input-sec2");


findJob.addEventListener("click", () => {
    if(inputText1.value != "" && inputText2.value != "")
        window.open("./jobs");
});

// jobList.addEventListener("click", () => {

// });