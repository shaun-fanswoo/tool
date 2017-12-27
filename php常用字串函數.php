strlen($value) 判斷字串長度
strpos($value,"1") 判斷字串出現位置
substr(目標字串,開始位置,擷取長度)此函式會擷取在目標字串中，從開始位置到指定擷取長度中間的字串（若沒有指定擷取長度，則從起使位置取到最後）


preg_replace("/\s+/",',',$value),
preg_replace ( $searchword , $replacement , $subject )
/\s+/   php 正規表示空白處


字串拆解陣列
pre( explode( '&', $post_str) );