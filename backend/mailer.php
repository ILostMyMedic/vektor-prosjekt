<?php 
    require_once('phpmailer/PHPMailerAutoload.php');

    /**
     *  @author Martin Johansen
     * Edit the settings available in between the lines
     */

    
    // ======================================
    $smtpServer     = 'smtp.sendgrid.net'; // Server
    $smtpUsername   = 'apikey'; // Login username
    $smtpPassword   = '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'; // Login password
    $smtpPort       = '587';

    $myEmail        = 'martin.johansen.98@outlook.com';
    $myName         = 'Martin Johansen';

    // For HTML supported email
    function htmlMail($message) {
        return `
            <div class="mail">
                $message
            </div>
        `;
    }
    // ======================================



    $status = null;
    $mailerStatus = false;
    $error = [];

    $json = file_get_contents('php://input'); 	
    $obj = json_decode($json, true);
    
    $name = $obj['name'];
    $email = $obj['email'];
    $message = $obj['message'];
    
    if(empty($name)) {
        $status = false;
        array_push($error, 'Navn var ikke fylt ut.');
    }
    $name = htmlspecialchars($name);

    if(empty($email)) {
        $status = false;
        array_push($error, 'E-post var ikke fylt eller feil formatert.');
    }
    $email = htmlspecialchars($email);

    if(empty($message)) {
        $status = false;
        array_push($error, 'Melding var ikke fylt ut.');
    }
    $message = htmlspecialchars($message);

    /**
     * PHPMailer
    */
    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = $smtpServer;                            // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = $smtpUsername;                          // SMTP username
        $mail->Password   = $smtpPassword;                          // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = $smtpPort;                              // TCP port to connect to

        //Recipients
        $mail->setFrom($myEmail, $myName);
        $mail->addAddress($email);

        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = `Vektor kontakt – $name`;
        $mail->Body    = htmlMail($message);
        $mail->AltBody = $message;

        $mail->send();
        $mailerStatus = true;
    } catch (Exception $e) {
        $status = false;
        array_push($error, $mail->ErrorInfo);
    }

    if($status === true || $status === null) {
        /**
         * Send email to response
         */
        if($mailerStatus === true) {
            echo json_encode(
                array(
                    'status' => true,
                )
            );
        } else {
            echo json_encode(
                array(
                    'status' => false,
                    'error' => $error
                )
            );
        }
    }

    // Something went wrong
    if($status === false) {
        echo json_encode(
            array(
                'status' => false,
                'error' => $error
            )
        );
    }
?>