<!DOCTYPE html>
<html>
<body>

<?php

date_default_timezone_set('Europe/London');
$time = date('H:i, jS F');
$user = 'Martin';

echo '
<form action = "Test3.php" method = "POST">
  <fieldset>
    <legend>Post a comment:</legend>
    <textarea rows="5" cols="20" name="comment"></textarea>
    <input type="hidden" name="user" value="'.$user.'">
    <input type="hidden" name="time" value="'.$time.'">
  </fieldset>
<p><input type="submit" ></p>
</form>';

?>

</body>
</html>
