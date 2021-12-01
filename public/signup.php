<?php
include("config.php");
$name = $_POST['fullname'];
$uname = $_POST['username'];
$pass = $_POST['password'];
$contact = $_POST['emailormob'];


if($conn->connect_error)
{
    die("Connection failed :" .$conn->connect_error);
}   

if($name == null || $uname == null || $pass == null || $contact == null)
{
    echo "Details cant be empty";
}
else
{
    $stmt = $conn->prepare("insert into userinfo(name,uname,pass,contact) values (?,?,?,?)");
    $stmt->bind_param("ssss",$name,$uname,$pass,$contact);
    $stmt->execute();
    $conn->commit();
    echo "new user added";
    header("Location: index.html");
}
$conn->close();
