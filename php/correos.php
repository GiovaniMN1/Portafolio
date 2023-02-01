
    <?php


     ini_set( 'display_errors', 1 );
     error_reporting( E_ALL );

            $to="gioaldo172@gmail.com";
            $name=$_POST['name'];
            $lastname=$_POST['lastname'];
            $from=$_POST['email'];
            $message=$_POST['textarea'];

            $subject = "Pagina web cv Giovani Madero";
            $header= 'Desde: ' .$from .' '.'Mensaje: '.$message;
            $fullname="Nombre Completo: ".$name.' '.$lastname;

    
    

        mail($to, $subject, $header, $fullname);
        echo "<script>alert('Envió exitoso')</script>";
        echo "<script>setTimeout(\"location.href='https://www.giomadero.com/'\",1000)</script>";

    
    ?>

