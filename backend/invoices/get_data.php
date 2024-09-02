<?php

include "../index.php";

$data =  json_decode(file_get_contents("../data/invoices_data.json"));

$index = array_search(true, array_column($data->invoices, 'invoice_assigned'));


if(is_numeric($index)){
    $data->assigned_invoice_number = $data->invoices[$index]->invoice_number;
}else{
    $data->assigned_invoice_number = null;
}

echo json_encode($data);