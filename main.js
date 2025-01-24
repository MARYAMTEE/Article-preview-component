let btnEl = document.getElementById("btn");
let socialIcons = document.getElementById("social-icons")

btnEl.addEventListener("click",  function() {
    if(socialIcons.style.display === "none") {
        socialIcons.style.display = "block";
    } else{
        socialIcons.style.display = "none";
    }
})