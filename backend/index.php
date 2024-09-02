<?php

// Allows requests from any domain to access this resource.
header("Access-Control-Allow-Origin: *");

// Specifies the allowed HTTP methods for accessing this resource.
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");

// Specifies which HTTP headers are allowed in the request.
header("Access-Control-Allow-Headers: Content-Type");