<?php

include "../index.php";

// Read the contents of the JSON file located in "..data/users_data.json" and send the data back to the client
$data =  json_decode(file_get_contents("../data/users_data.json"));

$users = $data->users;

echo(json_encode($users));