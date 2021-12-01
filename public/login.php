<?php
include("config.php");
$uname = $_POST['username'];
$upass = $_POST['password'];
//$unumber = $_POST['phone'];
//$umessage = $_POST['message'];

// Check connection 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT * FROM userinfo";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) 
  {
    while($row = $result->fetch_assoc()) 
    {
      //echo "id: " . $row["name"]. " - Name: " . $row["pass"]."<br>";
      $dname = $row["uname"];
      $dpass = $row["pass"];
      if($dname == $uname)
      {
        if($dpass == $upass)
        {
          echo "login successfull";
        }
      }
    }
  }
  else 
  {
    echo "0 results";
  }

  //echo "Connection established ".$uname."welcome".$upass;
  
  $conn->close();
  ?>