<?php
require('../connect_db.php');

function show_records($dbc)  {
  $q = 'SELECT * FROM prints';
  $r = mysqli_query($dbc, $q);
  $num = mysqli_num_rows($r);

  if ($num > 0)  {
    echo '<h1>Records in the <i>prints</i> table:</h1>';

    while ($row = mysqli_fetch_array($r, MYSQLI_ASSOC))  {
      echo '<br>' . $row['Name'] . ' <i>by</i> ' . $row['Artist'] . '@' . $row['Price'];
    }
    echo "<br><br>...<i>$num records</i>";
  }
  else {
    echo '<p>' . mysqli_error($dbc) . '</p>';
  }
}

show_records($dbc);

$q = 'INSERT INTO prints (Name, Artist, Price)
      VALUES("Blue Car", "Dave", 17.99)';
$r = mysqli_query($dbc, $q);

if ($r)  {
  show_records($dbc, $r);
}  else  {
  echo '<p>' . mysqli_error($dbc) . '</p>';
}

mysqli_close($dbc);
