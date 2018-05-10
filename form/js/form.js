var form = document.getElementById("signup_form");
// var file = form.user_profile.value;
var form = document.forms.signup_form;
var fname = form.signup_fname.value;
var lname = form.signup_lname.value;
var email = form.signup_email.value;
var pass = form.signup_pass.value;
var pass_again = form.signup_pass_again.value;

function checkingInputValue() {
    if (("" == fname || undefined == fname || NaN == fname) &&
        ("" == lname || undefined == lname || NaN == lname) &&
        ("" == email || undefined == email || NaN == email) &&
        ("" == pass || undefined == pass || NaN == pass) &&
        ("" == pass_again || undefined == pass_again || NaN == pass_again)) {
        alert("All The Field are empty. Please Fill The Fields");
    }
}


form.signup_submit.addEventListener('keypress', function (e) {
    console.log(e);
});