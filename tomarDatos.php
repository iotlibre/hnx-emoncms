<?php

// $jsonurl = "http://ns395885.ip-176-31-121.eu/emoncms/feed/fetch.json?ids=18,8,44,15,16,19,28,39,43";
$jsonurl = "http://192.168.2.1/emoncms/feed/fetch.json?ids=21,19,8,9,10,11,12,13,14,15,16,17";
// $jsonurl = "http://5.196.67.15/emoncms/feed/value.json?id=8";
// $jsonurl = "http://5.196.67.15/emoncms/feed/value.json?id=7&apikey=44d4dd66508f2eb39988207963f2ad87";
// $jsonurl = "http://192.168.2.1/emoncms/feed/value.json?id=8";
$json = file_get_contents($jsonurl);

echo $json;
?>
