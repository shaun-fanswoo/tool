<!-- 取現在時間 -->
$datetime = date ("Y- m - d / H : i : s"); 

<!-- 取時間加減 -->
date("Y-m-d",strtotime("+3 day"))
+1 week 2 days 4 hours 2 seconds


<?php

date_default_timezone_set('PRC'); //默认时区

echo
"今天:",date("Y-m-d",time()),"<br>";


echo "今天:",date("Y-m-d",strtotime("18 june
2008")),"<br>";

echo "昨天:",date("Y-m-d",strtotime("-1 day")),
"<br>";

echo "明天:",date("Y-m-d",strtotime("+1 day")),
"<br>";

echo "一周后:",date("Y-m-d",strtotime("+1 week")),
"<br>";

echo "一周零两天四小时两秒后:",date("Y-m-d G:H:s",strtotime("+1 week 2 days 4
hours 2 seconds")), "<br>";

echo "下个星期四:",date("Y-m-d",strtotime("next Thursday")),
"<br>";

echo "上个周一:".date("Y-m-d",strtotime("last
Monday"))."<br>";

echo "一个月前:".date("Y-m-d",strtotime("last
month"))."<br>";

echo "一个月后:".date("Y-m-d",strtotime("+1
month"))."<br>";

echo "十年后:".date("Y-m-d",strtotime("+10
year"))."<br>";