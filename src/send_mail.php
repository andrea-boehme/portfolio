<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $recipient = 'andrea.bohme@gmail.com';
        $subject = "Contact From " . $_POST['email'];
        $headers = "From:  noreply@developerakademie.com";
        $message = "Received an e-mail through your contact form: \n";
        $message .= "Name: {$_POST['name']} \n";
        $message .= "Email: {$_POST['email']} \n";
        $message .= "Message: {$_POST['message']} \n";

        mail($recipient, $subject, $message, $headers);
        echo $subject;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
