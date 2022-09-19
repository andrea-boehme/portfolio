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


/*

$message = "Name: " . $_POST['name'] . "\r" . "\r" . $_POST['message'];

<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $recipient = 'aandrea.bboehme@yahoo.com';
        $subject = "Contact From " . $_POST['email'];
        $headers = "From:  noreply@developerakademie.com";
        $message = "Name: " . $_POST['name'];

        $subject = "Contact From $name <$email>";
        $headers = "From:  noreply@mywebsite.com";

        mail($recipient, $subject, $message, $headers);
        echo $subject;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        // Payload is not send to $_POST Variable,
        // is send to php:input as a text
        $json = file_get_contents('php://input');
        //parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'aandrea.bboehme@yahoo.com'; //your email address
        $subject = "Contact From $name <$email>";
        $headers = "From:  noreply@mywebsite.com";

        mail($recipient, $subject, $message, $headers);
        echo $subject;
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}*/