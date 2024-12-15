<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $log = fopen("logs/contact_form.txt", "a");
    fwrite($log, "Name: $name\nEmail: $email\nMessage: $message\n\n");
    fclose($log);

    echo "Thank you, $name. Your message has been received!";
}
?>
