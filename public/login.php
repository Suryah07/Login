<?php
include("config.php");
$uname = $_POST['username'];
$upass = $_POST['password'];
$count = 0;


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $sql = "SELECT * FROM userinfo";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) 
  {
    while($row = $result->fetch_assoc()) 
    {
      $dname = $row["uname"];
      $dpass = $row["pass"];
      if($dname == $uname)
      {
        if($dpass == $upass)
        {
          echo "login successfull.";
          $count = 1;
        }
      }
    }
    if($count == 0)
    {
      echo "Wrong credentials";
    }
  }
  else 
  {
    echo "0 results";
  }
  
  $conn->close();
  ?>