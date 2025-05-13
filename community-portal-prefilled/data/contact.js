console.log("contact.js loaded");

function storeToMemory(arr){
    return new Promise((resolve,reject) => {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            reject("Please fill out the fields.");
            return;
        }

        setTimeout(() => {
            
           arr.push({name, email, message});
           fetch ("/contact", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,email,message})
           })
           .then((response)=>{
            if (response.redirected) {
                alert("Data has been captured. Redirecting...");
                window.location.href = response.url;
                resolve();
            } else{
                reject("Failed to redirect.")
            }
           })
           .catch((err) => reject("Error: "+ err));
        },2000)
    });
}

document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.getElementById("contactForm");
    const localContacts = [];
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        storeToMemory(localContacts)
        .then(()=> console.log("Contact saved."))
        .catch((err) => alert("error" + err))
    });
});