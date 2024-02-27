<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "bartekzieba132@gmail.com";
    $subject = "Nowa wiadomość od $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "Wiadomość została wysłana pomyślnie!";
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Nieprawidłowe żądanie";
}
?>
