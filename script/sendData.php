<?php

// get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// set the recipient email address
$to = 'thanaphonepun@gamil.com';

// set set the email subject
$subject = 'New Contact form submission';

// build the email content
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// build the emal headers
$email_headers = "From: $name <$email>";

//send the email
mail($to, $subject, $email_content, $email_headers);

?>