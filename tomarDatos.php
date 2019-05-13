<?php

// $jsonurl = "http://ns395885.ip-176-31-121.eu/emoncms/feed/fetch.json?ids=18,8,44,15,16,19,28,39,43";
$jsonurl = "http://ns378204.ip-5-196-67.eu/emoncms/feed/fetch.json?ids=6,7,8,9,10,11,12,13,14,15,16,17”;
$json = file_get_contents($jsonurl);

echo $json;
?>
