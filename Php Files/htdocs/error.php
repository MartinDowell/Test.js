<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PHP Error Handling</title>
</head>
<body>

<?php
set_error_handler('error_handler');

function error_handler($level, $message, $file, $line)  {
  echo "Error [$level] : $message <br>
        (Check line $line in $file)";
}

$num = 11;

if ($num > 100)  {
  trigger_error('Number must be less than 100', E_USER_ERROR);
}  else  {
  echo '<p>' . "Number is: $num" . '</p>';
}

 ?>

</body>
</html>
