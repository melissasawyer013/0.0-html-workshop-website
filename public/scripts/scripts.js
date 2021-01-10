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


// let prompt_button = document.getElementsByClassName("show-quiz-js");
// let password_answer = prompt("Please enter the passcode to access the quiz directions");
// for (let i = 0; i<prompt_button.length; i++) {
//     prompt_button.addEventListener("click", function() {

//     })
// }

let div_to_show = document.getElementsByClassName("container-quiz-hidden");
let prompt_button = document.getElementsByClassName("show-quiz-js");

function checkPassword() {
    let password_answer = prompt("Please enter the passcode to access the quiz directions");
    console.log(password_answer);
    console.log(div_to_show[0]);
    if (password_answer === "codesquad") {
        div_to_show[0].style.display = "block";
        prompt_button[0].style.backgroundColor = "var(--white)";
        prompt_button[0].style.border = "2px solid var(--red)";
        prompt_button[0].style.color = "var(--red)";
        prompt_button[0].innerHTML = "&#9752;";
        // prompt_button[0].innerHTML = "&#127808;";
    } else {
        alert("Incorrect passcode.")
    }

    // for (let i = 0; i<prompt_button.length; i++) {
    //     prompt_button.addEventListener("click", function() {
    
    //     })
    // }
};