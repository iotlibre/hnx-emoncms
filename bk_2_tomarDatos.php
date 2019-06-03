<?php


$jsonurl = "http://192.168.2.1/emoncms/feed/fetch.json?ids=32,19,34,35,36,37,38,39,40";

$json = file_get_contents($jsonurl);

echo $json;
?>
