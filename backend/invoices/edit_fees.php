<?php

include "../index.php";

$data =  json_decode(file_get_contents("../data/invoices_data.json"));

if ($_SERVER['REQUEST_METHOD'] === "POST"){
    $invoice_number = $_POST['invoice_number'];

    $platform_fee = $_POST['platform_fee'];
    $spedition_fee = $_POST['spedition_fee'];
    $payment_processor_fee = $_POST['payment_processor_fee'];
    $taxes_fee = $_POST['taxes_fee'];
   

    $index = array_search($invoice_number, array_column($data->invoices, 'invoice_number'));

    $data->invoices[$index]->fees->platform_fee = $platform_fee;
    $data->invoices[$index]->fees->spedition_fee = $spedition_fee;
    $data->invoices[$index]->fees->payment_processor_fee = $payment_processor_fee;
    $data->invoices[$index]->fees->taxes_fee = $taxes_fee;
    
 
    $jsonString = json_encode($data, JSON_PRETTY_PRINT);

    $fp = fopen("../data/invoices_data.json", 'w');

    fwrite($fp, $jsonString);

    fclose($fp);

    echo "Fees updated";

}