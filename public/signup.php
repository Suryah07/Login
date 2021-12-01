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