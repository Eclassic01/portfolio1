var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event){
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyPnZT4DXCAzewOOX9QtuYNrsW1FThzyeEYhuLL3O43-SRtvivzt5JlZ0ZF9tOeqbCyXw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevents the default form submission behavior

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) // Constructs a FormData object from the form
    })
    .then(response => {
        if (response.ok) {
            msg.innerHTML = "Message sent successfully"; // Updates a message element on success
            setTimeout(function(){
                msg.innerHTML = ""; // Clears the message after 5 seconds
            }, 5000);
            form.reset(); // Resets the form fields
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error!', error.message); // Logs any errors to the console
        msg.innerHTML = "An error occurred. Please try again later.";
    });
});
