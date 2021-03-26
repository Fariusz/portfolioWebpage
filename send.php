<?php
$to = 'kontakt@loth.cba.pl';
$subject = $_GET['Subject'];
$message = $_GET['Message'];
$sender = $_GET['Email'];
$message .= "\r\n" . 'nadawca: ' . $sender;
$headers = 'From: ' . $sender;
mail($to, $subject, $message, $headers);
header("Location: ../index.html#contact");
?>