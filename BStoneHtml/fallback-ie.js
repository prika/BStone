//detects if user is using Internet Explorer
//returns version of IE or false, if browser is not IE
//Function to detect IE or not
function IEdetection() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older, return version number
        return ('IE ' + parseInt(ua.substring(
            msie + 5, ua.indexOf('.', msie)), 10));
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11, return version number
        var rv = ua.indexOf('rv:');
        return ('IE ' + parseInt(ua.substring(
            rv + 3, ua.indexOf('.', rv)), 10));
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        //Edge (IE 12+), return version number
        return ('IE ' + parseInt(ua.substring(
            edge + 5, ua.indexOf('.', edge)), 10));
    }
    // User uses other browser
    return ('Not IE');
}
var result = IEdetection();
document.write(result);


// <?php 
// function browser_info($agent=null) {
//   $known = array('msie', 'firefox', 'safari', 'webkit', 'opera', 'netscape',
//   'konqueror', 'gecko');
//   $agent = strtolower($agent ? $agent : $_SERVER['HTTP_USER_AGENT']);
//   $pattern = '#(?<browser>' . join('|', $known) . ')[/ ]+(?<version>[0-9]+(?:\.[0-9]+)?)#';
//   if (!preg_match_all($pattern, $agent, $matches)) return array();
//   $i = count($matches['browser'])-1;
//   return array($matches['browser'][$i] => $matches['version'][$i]);
// }

// $user_agent = browser_info();
// if($user_agent['msie']=="8.0" || $user_agent['msie']=="7.0" || $user_agent['msie']=="6.0"){

    // if($LG=="pt"){
    // $link_chrome = "https://www.google.com/intl/pt/chrome/browser/";
    // $link_firefox = "http://www.mozilla.org/pt-PT/firefox/new/";
    // $link_ie = "http://windows.microsoft.com/pt-PT/internet-explorer/download-ie";
    // $fall_exp1 = "Verificamos que est� a utilizar uma vers�o desactualizada do Internet Explorer";
    // $fall_exp2 = "Por favor actualize para a  
    //               <a href='$link_ie' rel='nofollow' target='_blank'>vers�o mais recente</a>, 
    //               ou experimente utilizar outro browser como o 
    //               <a href='$link_chrome' rel='nofollow' target='_blank'>Google Chrome</a> ou 
    //               <a href='$link_firefox' rel='nofollow' target='_blank'>Mozilla Firefox</a> para aproveitar todas as funcionalidades do nosso site.";
    // }
// }




