function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace with your actual credentials
    const correctUsername = "admin";
    const correctPassword = "password123";

    if (username === correctUsername && password === correctPassword) {
        // Redirect to admin.html
        alert("Login Succesful");

        window.location.href = "admin-panel.html";
    } else {
        alert("Invalid username or password");
    }
}




//  Replace Available Rooms Function



function uptodate(){
var bhk1=document.getElementById('number1').value;
var bhk2=document.getElementById('number2').value;
var dis1=document.getElementById('mh');
var dis2=document.getElementById('mhh');

  dis1.innerText=(`${bhk1}Room Available`);
  dis2.innerHTML=(`${bhk1}Room Available`);

  if(bhk1==0){
   dis1.innerHTML=(`No Room Available`);
  }
  if(bhk12==0){
   dis2.innerHTML=(`No Room Available`);
  }
  window.location.href = "index.html";
}