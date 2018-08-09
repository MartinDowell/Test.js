<!DOCTYPE html>
<html>

<title>Secure form</title>
<meta charset='utf-8'>
<head>
  <!-- <link rel='stylesheet' type='text/css' href='css/styles.css'> -->
</head>

<body>

<form action = "secure.php" method = "POST">
  <p>New Name: <input type = "text" name = "name">
    <input type = "submit">
  </p>
</form>

<?php
require('../connect_db.php');

if (!empty($_POST['name']) && !is_numeric($_POST['name']))  {
  $name = $_POST['name'];
  $name = mysqli_real_escape_string($dbc, $name);
  $name = strip_tags($name);
// echo $name;
  $q = 'UPDATE prints SET name = "'.$name.'"WHERE id = 4';
  mysqli_query($dbc, $q);
}  else  {
  echo 'Not a valid name...';
}

$q = 'SELECT * FROM prints WHERE id = 3';
$r = mysqli_query($dbc, $q);

while ($row = mysqli_fetch_array($r, MYSQLI_NUM))  {
  echo "<p>Name: $row[1] </p>";
}

mysqli_close($dbc);
 ?>

</body>
</html>
