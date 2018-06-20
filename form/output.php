<?php

if(isset($_FILES["user_profile"]))
{

    $fname          = $_POST['signup_fname'];
    $lname          = $_POST['signup_lname'];
    $email          = $_POST['signup_email'];
    $pass           = $_POST['signup_pass'];
    $repeat_pass    = $_POST['signup_pass_again'];

    $csvFile = $_FILES["user_profile"]["name"];
    $csvTempName = $_FILES["user_profile"]["tmp_name"];
 
    echo($fname.", ". $lname.", ". $email.", ".$csvFile.", ". $csvTempName);
    printf("Your name is %s %s and Your Email is %s. You uploaded ");


    

    // echo $csvTempName;
    // echo $csvFile;


    // $data = json_encode($_POST);
    // print_r($data);

    // $fname = $_POST['signup_fname'];
    // $lname = $_POST['signup_lname'];
    // $email = $_POST['signup_email'];

    // // echo "Hello " . $fname . " " . $lname . ", Is this your email => " . $email;
    // printf("Hello %s %s, Is this your email? => %s", $fname, $lname, $email);
    
}