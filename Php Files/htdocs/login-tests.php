<?php

require('connect_db.php');

$y = "SELECT user_id FROM users";

$x = mysqli_query($dbc, $y);

foreach ($x as $k)  {
  echo $k['first_name'];
}


mysqli_close($dbc);

 ?>
