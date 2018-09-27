<?php

session_start();

include('includes/header.html');

require('connect_db.php');

$q = "SELECT * FROM fruits";
$r = mysqli_query($dbc, $q);

echo '<table><th>Fruits Table:</th>';

while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC))  {
  echo '<tr><td>' . $row['name'] . '</td><td>' . $row['colour'] . '</td><td>' . $row['country'] . '</td></tr>';
}

echo '</table>';

mysqli_close($dbc);

 ?>
