<?php

require 'PHPMailer/PHPMailerAutoload.php';

$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);
foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
		$messageHTML .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
		$message .= "You recived a new message from " . $project_name . "\r\n
			<b>" . $key . "</b> - " . $value . "\r\n
		";
	}
}

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 2;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'host';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'username';                 // SMTP username
$mail->Password = 'password';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('email', 'Name');
$mail->addAddress($admin_email);     // Add a recipient
$mail->addAddress('email');               // Name is optional
// $mail->addReplyTo('info@example.com', 'Information');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $form_subject;
$mail->Body    = $messageHTML;
$mail->AltBody = $message;
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	echo 'Message has been sent';
}
