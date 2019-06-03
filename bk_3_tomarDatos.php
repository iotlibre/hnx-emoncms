<?php


$jsonurl = "http://192.168.2.1/emoncms/feed/fetch.json?ids=93,97,94,80,89,88,91,90,92";

$json = file_get_contents($jsonurl);

echo $json;
?>
