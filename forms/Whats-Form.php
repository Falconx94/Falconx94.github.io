<?php
  if(isset($_POST["Send"]))
  {
    $Nombre = $_REQUEST['name'];
    $Email = $_REQUEST['email'];
    $Phone = $_REQUEST['phone'];
    $Asunto = $_REQUEST['subject'];
    $Mensaje = $_REQUEST['message'];

    header("Location: https://api.whatsapp.com/send?phone=526871732226&text=Hola%20soy%20$Nombre%20mi%20correo es:%20$Email%20,%20mi%20Teléfono:%20$Phone%20le%20hablo%20por%20$Asunto%20$Mensaje");
  }
?>