<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.chateau-martinat.com');
header('Access-Control-Allow-Methods: POST');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}
function clean($str) {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}
$prenom    = clean($_POST['prenom']     ?? '');
$nom       = clean($_POST['nom']        ?? '');
$email     = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$country   = clean($_POST['country']    ?? '+33');
$phone     = clean($_POST['telephone']  ?? '');
$fullPhone = $phone ? $country . ' ' . $phone : '';
$sujet     = clean($_POST['objet']      ?? '');
$message   = clean($_POST['message']    ?? '');
$langue    = clean($_POST['_langue']    ?? 'fr');
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
$subject = '[Château Martinat] ' . ($sujet ?: 'Message depuis le site');
$body  = "Nouveau message reçu depuis chateau-martinat.com\n";
$body .= str_repeat('-', 50) . "\n\n";
$body .= "Prénom    : $prenom\n";
$body .= "Nom       : $nom\n";
$body .= "Email     : $email\n";
if ($fullPhone) $body .= "Téléphone : $fullPhone\n";
if ($sujet)     $body .= "Sujet     : $sujet\n";
$body .= "Langue    : " . strtoupper($langue) . "\n\n";
$body .= "Message :\n$message\n";
$body .= "\n" . str_repeat('-', 50) . "\n";
$body .= "Envoyé le : " . date('d/m/Y à H:i') . "\n";
$headers  = "From: no-reply@chateau-martinat.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$sent = mail('l.donze@chateau-martinat.com', $subject, $body, $headers);
mail('s.donze@chateau-martinat.com', $subject, $body, $headers);
if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail sending failed']);
}
?>