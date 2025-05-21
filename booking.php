
<?php
    $to = "paschalwao@gmail.com";
    $subject = "Booking Request";
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $datetime = $_POST["datetime"] ?? '';

    if (empty($name) || empty($email) || empty($datetime)) {
        echo "Please fill in all fields.";
        exit;
    }

    $message = "Name: $name\nEmail: $email\nDate and Time: $datetime";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
<?php
// ...existing code...
echo "About to send mail<br>";
if (mail($to, $subject, $message, $headers)) {
// ...existing code...
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for booking! We will contact you shortly to confirm.";
    } else {
        echo "Sorry, your booking could not be sent. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
