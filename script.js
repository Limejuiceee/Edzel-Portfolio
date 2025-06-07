function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

function sendMail(){
  
}
  let perms = {
    name : ducument.getElementById("name").value,
    email : ducument.getElementById("email").value,
    subject : ducument.getElementById("subject").value,
    message : ducument.getElementById("message").value,

}
emailjs.send("service_nj90qkk", "template_burii2g", templateParams, options)
.then(()=> alert("email sent").catch (()=>alert("email not sent")))
