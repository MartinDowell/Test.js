<?php

require('../connect_db.php');

function show_records($dbc)  {
  $q = 'SELECT * FROM prints';
  $r = mysqli_query($dbc, $q);
  $num = mysqli_num_rows($r);

  if ($num > 0)  {
    echo '<h1>Records in <i>prints</i> table:</h1>';
    while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC))  {
      echo '<br>' . $row['Artist'] . '| ' . $row['Name'] . '@' . $row['Price'];
    }
  }  else  {
    echo '<p>' . mysqli_error($dbc) . '</p>';
  }
}

show_records($dbc);

$q = 'UPDATE prints
      SET Artist = "Dave" WHERE Artist = "Adam"';

$r = mysqli_query($dbc, $q);

if (mysqli_affected_rows($dbc) == 2)  {
  echo '<hr>' . mysqli_affected_rows($dbc) . 'records updated...';
  show_records($dbc);
}

mysqli_close($dbc);
