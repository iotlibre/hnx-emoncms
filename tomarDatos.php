<?php

$jsonurl = "http://ns378204.ip-5-196-67.eu/emoncms/feed/fetch.json?ids=6,7,8,9,10,11,12,13,14,15,16,17";
$json = file_get_contents($jsonurl);

echo $json;
?>
