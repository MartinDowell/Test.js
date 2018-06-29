<!DOCTYPE html>
<html>
<body>

<form action = "Test2.php" method = "POST">
  <p>Name:
  <input type="text" name="name" value="<?php
      if(isset($_POST['name']))
        echo $_POST['name']; ?>">
  </p>
  <p>Age:
  <input type="text" name="age" value="<?php
      if(isset($_POST['age']))
        echo $_POST['age']; ?>">
  </p>
  <p>Email:
  <input type="text" name="email" value="<?php
      if(isset($_POST['email']))
        echo $_POST['email']; ?>">
  </p>
<p><input type="submit" ></p>
</form>

<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')  {
    $errors = array();
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];

    if(empty($name))  {
      $errors[] = 'name ';
    }  else  {
      $name = trim($name);
    }

    if(empty($age))  {
      $errors[] = 'age ';
    }  else  {
      $age = trim($age);
    }

    if (empty($email))  {
      $errors[] = 'email ';
    }  else  {
      $email = trim($email);
    }

    if (!empty($errors))  {
      echo "Error! Please enter - ";
      foreach($errors as $msg)  {
        echo "$msg";
      }
    }  else  {
        echo "Success! Thanks $name. Your age is $age and your email is <i>$email</i>";
      }
}

 ?>



</body>
</html>
