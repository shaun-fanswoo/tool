



var isIE = navigator.userAgent.search("MSIE") > -1;
var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
var isIE8 = navigator.userAgent.search("MSIE 8") > -1;
var isIE10 = navigator.userAgent.search("Edge") > -1;
var isFirefox = navigator.userAgent.search("Firefox") > -1;
var isOpera = navigator.userAgent.search("Opera") > -1;
var isSafari = navigator.userAgent.search("Safari") > -1;
var isChrome = navigator.userAgent.search("Chrome") > -1;

if (isChrome) {
    console.log('Chrome');
} else if (isFirefox) {
    console.log('Firefox');
} else if (isIE) {
    console.log('IE');
} else if (isIE10) {
    console.log('IE10');
};


var userAgent = navigator.userAgent;
//  console.log(userAgent);
if (/Android/i.test(userAgent)) {
    //是否為Android
} else if (/iPhone|iPad/i.test(userAgent)) {
    //是否為iPhone或iPad
} else if (/Windows/i.test(userAgent)) {
    //使否是用電腦觀看
}

//判斷瀏覽器
if (/Chrome/i.test(userAgent)) {
    //是否為Chrome
} else if (/Firefox/i.test(userAgent)) {
    //是否為Chrome
}



$agent = $_SERVER['HTTP_USER_AGENT'];

if (strpos($agent, "MSIE 9.0")) {
    echo "Internet Explorer 9.0";
} else if (strpos($agent, "MSIE 8.0")) {
    echo "Internet Explorer 8.0";
} else if (strpos($agent, "MSIE 7.0")) {
    echo "Internet Explorer 7.0";
} else if (strpos($agent, "MSIE 6.0")) {
    echo "Internet Explorer 6.0";
} else if (strpos($agent, "Edge")) {
    echo "Microsoft Edge  IE10";
} else if (strpos($agent, "Trident/7")) {
    echo "Internet Explorer 11.0";
} else if (strpos($agent, "Firefox/5")) {
    $data['global']['style'][] = 'showpiece/combFirefox.css';
} else if (strpos($agent, "Firefox/3")) {
    echo "Firefox 3";
} else if (strpos($agent, "Firefox/2")) {
    echo "Firefox 2";
} else if (strpos($agent, "Chrome")) {
    $data['global']['style'][] = 'showpiece/combChrome.css';
} else if (strpos($agent, "Safari")) {
    echo "Safari";
    $data['global']['style'][] = 'showpiece/combChrome.css';
} else if (strpos($agent, "Opera")) {
    echo "Opera";
} else {
    echo $agent;

}

function browser_agent() {

    $CI_Model = new CI_Model();
    $CI_Model - > load - > library('user_agent');
    $browser = $CI_Model - > agent - > browser();
    // dd2($_SERVER['HTTP_USER_AGENT']);
    if ($CI_Model - > agent - > is_mobile()) {
        $browser_agent['agent'] = 'm';
    } else if ($browser == 'Internet Explorer') {
        $browser_agent['agent'] = 'ie';
        $version = $CI_Model - > agent - > version();
        if ($version == '8.0') {
            $browser_agent['agent_ie'] = 'ie8';
        } else if ($version == '9.0') {
            $browser_agent['agent_ie'] = 'ie9';
        } else if ($version == '10.0') {
            $browser_agent['agent_ie'] = 'ie10';
        } else if ($version == '11.0') {
            $browser_agent['agent_ie'] = 'ie11';
        }
        $browser_agent['browser_ie'] = 'agent-'.$browser_agent['agent_ie'];
    } else if (stripos($_SERVER['HTTP_USER_AGENT'], 'rv:11.0')) {
        $browser_agent['agent'] = 'ie';
        $browser_agent['agent_ie'] = 'ie11';
        $browser_agent['browser_ie'] = 'agent-'.$browser_agent['agent_ie'];
    } else if (stripos($_SERVER['HTTP_USER_AGENT'], 'rv:12.0')) {
        $browser_agent['agent'] = 'ie';
        $browser_agent['agent_ie'] = 'ie12';
        $browser_agent['browser_ie'] = 'agent-'.$browser_agent['agent_ie'];
    } else if (stripos($_SERVER['HTTP_USER_AGENT'], 'Edge')) {
        $browser_agent['agent'] = 'Edge';
    } else if ($browser == 'Chrome') {
        $browser_agent['agent'] = 'chrome';
    } else if ($browser == 'Firefox') {
        $browser_agent['agent'] = 'firefox';
    } else {
        $browser_agent['agent'] = 'other';
    }

    $browser_agent['browser'] = 'agent-'.$browser_agent['agent'];
    $browser_agent['agent_temp'] = '_'.$browser_agent['agent'];

    return $browser_agent;
}