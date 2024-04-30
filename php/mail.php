<?php
if (isset($_POST)) {
    $to = 'zlaborde@iu.edu';
    $data = json_decode(file_get_contents('php://input'), true);
    $subject = $data['subject'];
    $message = $data['text'];
    $headers = array(
      'From' => $data['from'],
      'Reply-To' => $data['from'],
      'X-Mailer' => 'PHP/' . phpversion()
    );
    $success = mail($to, $subject, $message);
    if ($success) {
        echo 'Success!';
    }
    else {
        echo 'Fail';
    }
}
?>