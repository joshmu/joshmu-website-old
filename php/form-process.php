<?php

$name = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["msg"];

$emailTo = "mu@joshmu.com";
$emailSubject = "JOSHMU.COM - Contact";

$body = "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n\n";
$body .= "\n" . $msg . "\n";

// send email
$success = mail($emailTo, $emailSubject, $body, "From:".$email);

// redirect to success page
if ($success) {
  echo "success";
} else {
  echo "invalid";
}

?>
