<?php 

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['name'];
       $Email = $_POST['email'];
       $Subject = $_POST['subject'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           header("location:contact.php?error");
       }
       else
       {
           $to = "ayoubnaitbenmous@gmail.com";
           $headers = "From:" . $Email;
           if(mail($to,$Subject,$Msg,$headers))
           {
               header("location:contact.php?success");
           }
       }
    }
    else
    {
        header("location:contact.php");
    }
?>