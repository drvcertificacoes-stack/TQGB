<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Metodo nao permitido.']);
    exit;
}

$rawBody = file_get_contents('php://input', false, null, 0, 32769) ?: '';
if (strlen($rawBody) > 32768) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'message' => 'Solicitacao muito longa.']);
    exit;
}
$data = json_decode($rawBody, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'JSON invalido.']);
    exit;
}

function field_value(array $data, string $key, string $fallback = 'Nao informado'): string
{
    $value = $data[$key] ?? $fallback;
    if (!is_scalar($value)) {
        return $fallback;
    }

    $clean = trim((string) $value);
    return $clean !== '' ? $clean : $fallback;
}

$recipient = 'comercial@totalqualitygroup.com.br';
$subject = field_value($data, '_subject', 'Novo lead pelo site Total Quality Group Brasil');
$subject = str_replace(["\r", "\n"], ' ', $subject);

$replyTo = field_value($data, 'Email', '');
if (!filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'E-mail obrigatorio ou invalido.']);
    exit;
}

$orderedFields = [
    'Origem',
    'Nome',
    'Empresa',
    'Telefone',
    'Email',
    'Interesse',
    'Mensagem',
    'UTM_Source',
    'UTM_Medium',
    'UTM_Campaign',
    'UTM_Term',
    'UTM_Content',
    'GCLID',
    'FBCLID',
    'Lead_Origin',
    'Landing_Page',
    'First_Page',
    'Last_Page',
    'First_Referrer',
];

$lines = [];
$lines[] = 'Novo lead recebido pelo site totalqualitygroupbrasil.com.br';
$lines[] = '';

foreach ($orderedFields as $field) {
    $lines[] = $field . ': ' . field_value($data, $field, '');
}

$lines[] = '';
$lines[] = 'Enviado em: ' . date('Y-m-d H:i:s');
$message = implode("\n", $lines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Total Quality Group Brasil <noreply@totalqualitygroupbrasil.com.br>',
    'Reply-To: ' . $replyTo,
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($recipient, $subject, $message, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Falha ao enviar e-mail.']);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Lead enviado com sucesso.']);
