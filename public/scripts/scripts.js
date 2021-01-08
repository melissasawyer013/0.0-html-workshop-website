//JS for collapsible buttons used on index page - expands each set of directions when the user clicks the "+" button next to the directions header, turns the "+" button into a "-" button, retracts information when the "-" button is clicked and returns it to a "+" button
let coll = document.getElementsByClassName("show-more-js");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.parentNode.parentNode.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        coll[i].innerText = "+";
    } else {
        content.style.display = "block";
        coll[i].innerText = "-";
    }
    });
}