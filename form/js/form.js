// var form        =   document.querySelector("#signup_form");
// var fname       =   "",
//     lname       =   "",
//     email       =   "",
//     pass        =   "",
//     pass_again  =   "";


// form.signup_fname.addEventListener("blur", function(e){
//     if(this.value){
//         this.nextElementSibling.innerText = "";
//         this.nextElementSibling.style.display = "none";
//     }else{
//         this.nextElementSibling.style.display = "block";
//         this.nextElementSibling.innerText = "You can't leave this field in empty!";
//     }
// });

// form.signup_fname.addEventListener("keyup", function(){
//     if(this.value){
//         this.nextElementSibling.innerText = "";
//         this.nextElementSibling.style.display = "none";
//     }
// });

// form.signup_submit.addEventListener("click", function(e){    
    
//     e.preventDefault();

//     fname = form.signup_fname.value;
//     lname = form.signup_lname.value;
//     email = form.signup_email.value;
//     pass  = form.signup_pass.value;
//     pass_again = form.signup_pass_again.value;

//     if(fname && lname && email && pass && pass_again){
//         alert("Succeed");
//         document.querySelector(".validate_error").innerText = "";
//         document.querySelector(".validate_error").style.display = "none";
//     }else{
//         document.querySelector(".validate_error").innerText = "All the fields are empty! Please fill the required fields";
//         document.querySelector(".validate_error").style.display = "block";
//     }
    
//     if(!fname){
//         alert("Name Field Empty!");
//     }else if (!lname) {
//         alert("This Field Is empty!");
//     }else if (!email) {
//         alert("This Field Is empty!");
//     }else if (!pass) {
//         alert("This Field Is empty!");
//     }else if(!pass_again){
//         alert("This Field Is empty!");
//     }

// });



/*
function FormValidation(form) {

    this.fname = "";
    this.lname = "";
    this.email = "";
    this.pass = "";
    this.pass_again = "";

    this.getValue = function () {
        // event.preventDefault();

        this.fname = form.signup_fname.value;
        this.lname = form.signup_lname.value;
        this.email = form.signup_email.value;
        this.pass = form.signup_pass.value;
        this.pass_again = form.signup_pass_again.value;

        return this;
    }

    this.checkValue = function () {

        if (!this.fname && !this.lname && !this.email && !this.pass && !this.pass && !this.pass_again) {
            console.log("Empty!");
        } else {
            console.log("Filled")
        }

    }


}*/

// var fname       =   form.signup_fname.value,
//     lname       =   form.signup_lname.value,
//     email       =   form.signup_email.value,
//     pass        =   form.signup_pass.value,
//     pass_again  =   form.signup_pass_again.value;

// function checkingInputValue() {
    // if ( !fname && !lname && !email && !pass && !pass_again ) {
    //     alert("All The Fields are empty. Please Fill The Fields");
    // } else {
    //     alert( "All The Fields are not empty" );
    // }
//     return false;
// }
// function getTheValue(form, e){

//     fname = form.signup_fname.value;
//     lanme = form.signup_lname.value;
//     email = from.signup_email.value;
//     pass  = form.signup_pass.value;
//     pass_again = form.signup_pass_again.value;

//     if (!fname && !lname && !email && !pass && !pass_again) {
//         alert("All The Fields are empty. Please Fill The Fields");
//         form.action = "output.html"
//     } else {
//         alert("All The Fields are not empty");
//         form.action = "";
//     }

// }

// form.addEventListener("click", alert(fname));

// form.addEventListener("submit", checkingInputValue);

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(fname);
//     console.log(lname);
//     console.log(email);
//     console.log(pass);
//     console.log(pass_again);
//     checkingInputValue();
// });