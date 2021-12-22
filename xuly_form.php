<?php
echo $_POST['uname'];
echo $_POST['passwd'];
echo $_POST['bthday'];
echo $_POST['gender'];
echo $_POST['address'];
echo $_POST['email'];
$arr = $_POST['interest'];
foreach ($arr as &$value) {
    echo $value;
}