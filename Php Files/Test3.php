<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">

</head>
<body>

<?php

$comment = $_POST['comment'];
$time = $_POST['time'];
$user = $_POST['user'];

echo "$comment $time $user<br>";

if ($comment == null)  {
  echo "You need to enter a comment<br>";
}

if ((isset($comment) == true) && (isset($time) == true) && ($user != null))  {
  echo "<p>Comment receved: \"$comment\" <br>
        From $user at $time</p>";
}  else {
  echo "Incorrect info received";
}


?>

</body>
</html>
