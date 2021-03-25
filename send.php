<?php

$to = 'kontakt@loth.cba.pl';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: kontakt@loth.cba.pl';
mail($to, $subject, $message, $headers);

?>