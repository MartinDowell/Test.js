<?php

require ('../connect_db.php');
$q = 'SHOW TABLE';
$r = mysqli_query($dbc, $q);

if ($r)  {
  echo '<h1>Result set returned OK</h1>';
}  else  {
  echo '<p>' . mysqli_error($dbc) . '</p>';
}

mysqli_close($dbc);
