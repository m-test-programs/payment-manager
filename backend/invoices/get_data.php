<?php

include "../index.php";

$data =  json_decode(file_get_contents("../data/invoices_data.json"));

$invoices = $data->invoices;

echo(json_encode($invoices));