<?php

include "../index.php";

$data =  json_decode(file_get_contents("../data/users_data.json"));

$users = $data->users;

echo(json_encode($users));