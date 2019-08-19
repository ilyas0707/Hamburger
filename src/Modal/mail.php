<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                               
$mail->Username = 'ilyas.yangurazov.iy@mail.ru'; 
$mail->Password = '070790i'; 
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;

$mail->setFrom('ilyas.yangurazov.iy@mail.ru'); 
$mail->addAddress('ilyas.yangurazov.iy@gmail.com');    
$mail->isHTML(true);         

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = ' ' .$name . ' ' .$email.
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: https://www.instagram.com/accounts/login/?source=auth_switcher');
}
?>