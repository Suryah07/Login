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
          echo '<script type="text/javascript">
          alert("Signed in");
          window.location = "index.html";
          </script>';
          $count = 1;
        }
      }
    }
    if($count == 0)
    {
      echo '<script type="text/javascript">
      alert("Wrong credentials!");
      window.location = "index.html";
      </script>';
    }
  }
  else 
  {
    echo "0 results";
  }
  
  $conn->close();
  ?>