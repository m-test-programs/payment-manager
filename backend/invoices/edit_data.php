<?php

include "../index.php";

$data =  json_decode(file_get_contents("../data/invoices_data.json"));

/*
The endpoint accepts POST and DELETE requests (e.g., axios.post() // axios.delete()). 
In the first case, it updates the invoices_data file (specifically, it associates the price with the selected invoice). 
In the second case, it removes the price. 
The invoice is selected based on the invoice number (passed in the request body in the first case and as a parameter in the second) using the array_search and array_column functions.
*/

if ($_SERVER['REQUEST_METHOD'] === "POST"){
    $invoice_number = $_POST['invoice_number'];
    $invoice_price = $_POST['payment_amount'];

    $index = array_search(true, array_column($data->invoices, 'invoice_assigned'));

    $data->invoices[$index]->invoice_amount = null;
    $data->invoices[$index]->invoice_assigned = false;

    $index = array_search($invoice_number, array_column($data->invoices, 'invoice_number'));

    $data->invoices[$index]->invoice_amount = $invoice_price;
    $data->invoices[$index]->invoice_assigned = true;

 
    $jsonString = json_encode($data, JSON_PRETTY_PRINT);

    $fp = fopen("../data/invoices_data.json", 'w');

    fwrite($fp, $jsonString);

    fclose($fp);

}

if ($_SERVER['REQUEST_METHOD'] === "DELETE"){

    $invoice_number = $_GET['invoice_number'];

    $index = array_search($invoice_number, array_column($data->invoices, 'invoice_number'));

    $data->invoices[$index]->invoice_amount = null;
    $data->invoices[$index]->invoice_assigned = false;

    $jsonString = json_encode($data, JSON_PRETTY_PRINT);

    $fp = fopen("../data/invoices_data.json", 'w');

    fwrite($fp, $jsonString);

    fclose($fp);

    echo $index;

    echo $invoice_number;
}

