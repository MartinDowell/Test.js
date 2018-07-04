<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PHP Tests</title>
</head>
<body>

<?php
if (isset($_POST['id']))  {
  $id = $_POST['id'];
  if ($id == 123)  {
    session_start();
    $_SESSION['id'] = $id;
    header('Location: Test3.php');
    exit();
  }
  else {
    echo "<p>$id is an incorrect ID!</p>";
  }
}

echo '<form action="Test1.php" method = "POST">
      <fieldset>
        <legend>Enter your user ID</legend>
        <p>ID: <input type="text" name="id"></p>
      </fieldset>

      <input type="submit">
      </form>';

?>

</body>
</html>
