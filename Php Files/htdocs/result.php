<?php

require('../connect_db.php');

$q = 'SHOW TABLES';
$r = mysqli_query($dbc, $q);
// echo '<p>' . mysqli_fetch_array($r, MYSQLI_NUM) . '</p>';
if ($r)  {
  echo '<h1>Tables on the site_db database</h1>';
}  else  {
  echo '<p>' . mysqli_error($dbc) . '</p>';
}

while ($row = mysqli_fetch_array($r, MYSQLI_NUM)) {
  echo '<br>' . $row[0];
}

mysqli_free_result($r);

mysqli_close($dbc);
