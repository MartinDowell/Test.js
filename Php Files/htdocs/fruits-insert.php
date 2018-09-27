<?php

require('connect_db.php');

$q = "INSERT INTO fruits (name, colour, country, entry_date)
      VALUES ('Apple', 'Green', 'UK', NOW()),
      ('Banana', 'Yellow', 'South Africa', NOW()),
      ('Plums', 'Purple', 'Germany',NOW())";

$r = mysqli_query($dbc, $q);

echo '<p>Error reported:<br>'
      . mysqli_error($dbc) . '</p>';


mysqli_close($dbc);

 ?>
