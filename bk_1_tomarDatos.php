<?php

$jsonurl = "http://ns395885.ip-176-31-121.eu/emoncms/feed/fetch.json?ids=18,8,23,15,16,19,28,39,43";
$json = file_get_contents($jsonurl);

echo $json;
?>
