<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['type'])) {
        $type = $_POST['type'];

        if ($type == 'email') {
            // Логування натискання на email
            file_put_contents("log.txt", "Email clicked at: " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
            echo "Email clicked at: " . date("Y-m-d H:i:s");
        } elseif ($type == 'phone') {
            // Логування натискання на телефон
            file_put_contents("log.txt", "Phone clicked at: " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
            echo "Phone clicked at: " . date("Y-m-d H:i:s");
        } elseif ($type == 'subscribe' && isset($_POST['email'])) {
            // Логування підписки через email
            $email = $_POST['email'];
            file_put_contents("log.txt", "New subscription with email: $email at " . date("Y-m-d H:i:s") . "\n", FILE_APPEND);
            echo "Subscription logged with email: $email";
        }
    } else {
        // Обробка форми з іншими даними (наприклад, реєстрація)
        $name = $_POST['user-name'] ?? '';
        $phone = $_POST['user-phone'] ?? '';
        $email = $_POST['user-email'] ?? '';
        $comment = $_POST['user-comment'] ?? '';
        $privacy = isset($_POST['user-privacy']) ? 'Accepted' : 'Not Accepted';

        if (!empty($name) && !empty($phone) && !empty($email)) {
            // Виведення даних, якщо форма заповнена правильно
            echo "<h1>Дані успішно отримано</h1>";
            echo "<p><strong>Ім'я:</strong> $name</p>";
            echo "<p><strong>Телефон:</strong> $phone</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Коментар:</strong> $comment</p>";
            echo "<p><strong>Політика конфіденційності:</strong> $privacy</p>";
        } else {
            echo "<h1>Помилка</h1>";
            echo "<p>Будь ласка, заповніть усі обов'язкові поля.</p>";
        }
    }
} else {
    echo "<h1>Доступ заборонений</h1>";
    echo "<p>Ця сторінка доступна лише для надсилання даних через форму.</p>";
}
?>
