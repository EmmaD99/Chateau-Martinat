<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.chateau-martinat.com');
header('Access-Control-Allow-Methods: POST');

require '/www/phpmailer/Exception.php';
require '/www/phpmailer/PHPMailer.php';
require '/www/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

function clean($str) {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}

$prenom  = clean($_POST['prenom']  ?? '');
$nom     = clean($_POST['nom']     ?? '');
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = clean($_POST['phone']   ?? '');
$sujet   = clean($_POST['sujet']   ?? '');
$message = clean($_POST['message'] ?? '');
$langue  = clean($_POST['_langue'] ?? 'fr');

if (empty($prenom) || empty($nom) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email']);
    exit;
}

try {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host       = 'ssl0.ovh.net';
    $mail->SMTPAuth   = false;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('no-reply@chateau-martinat.com', 'Château Martinat');
    $mail->addAddress('l.donze@chateau-martinat.com');
    $mail->addAddress('s.donze@chateau-martinat.com');
    $mail->addReplyTo($email, "$prenom $nom");

    $mail->Subject = '[Château Martinat] ' . ($sujet ?: 'Message depuis le site');
    $mail->Body =
        "Nouveau message reçu depuis chateau-martinat.com\n" .
        str_repeat('-', 50) . "\n\n" .
        "Prénom    : $prenom\n" .
        "Nom       : $nom\n" .
        "Email     : $email\n" .
        ($phone ? "Téléphone : $phone\n" : '') .
        ($sujet ? "Sujet     : $sujet\n" : '') .
        "Langue    : " . strtoupper($langue) . "\n\n" .
        "Message :\n$message\n" .
        "\n" . str_repeat('-', 50) . "\n" .
        "Envoyé le : " . date('d/m/Y à H:i') . "\n";

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $mail->ErrorInfo, 'debug' => 'smtp_failed']);}
?>