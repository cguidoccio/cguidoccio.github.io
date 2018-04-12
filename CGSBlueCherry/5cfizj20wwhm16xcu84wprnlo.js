(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  var rule = ["*", "*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var content = unescape('%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/r/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/b/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/x/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/l/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/o/out%22/%3e%0a%3cimg%20height%3d%221%22%20width%3d%221%22%20style%3d%22border-style%3anone%3b%22%20alt%3d%22%22%20src%3d%22https%3a//d.adroll.com/cm/g/out%3fgoogle_nid%3dadroll5%22/%3e%0a');


  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','//connect.facebook.net/en_US/fbevents.js');

  try {
      try {
          
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = "<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/aol/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/index/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/n/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/outbrain/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/pubmatic/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/taboola/out\"/><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\"src=\"https://d.adroll.com/cm/triplelift/out\"/>";
__adroll._head().appendChild(rtb);
})();

      } catch(e) {}
      try {
          
(function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (window === window.top && ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('crios') === -1) {
    window.document.body.className += ' adroll_safari_light_theme';
    var b = window.document.createElement('script');
    b.language = 'javascript';
    b.src = '//d.adroll.com/bounce/pre/Z3OP2FVLZBGCBNO5IKU6WO/FW67LBQCHNFPZCWFDZFF55/?d=' + encodeURIComponent('//s.adroll.com/j/bounce.js');
    window.__adroll._head().appendChild(b);
  }
})();

      } catch(e) {}
      try {
          
(function(d) {
    var ca = d.cookie.split(';');
    var cn = "_mkto_trk=";
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cn) == 0) {
            l = "<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"[protocol]://d.adroll.com/cm/mk/Z3OP2FVLZBGCBNO5IKU6WO/in?id=[mk_id]\"/>";
            l = l.replace(/\[protocol\]/gi, ("https:" == d.location.protocol) ? "https" : "http");
            l = l.replace(/\[mk_id\]/gi, escape(c.substring(cn.length,c.length)));
            d.createElement("div").innerHTML = l;
        }
    }
})(document);


      } catch(e) {}
      try {
          if(typeof __adroll.fb === 'undefined'){
        fbq('init', '1215974248549434');
    fbq('set', 'autoConfig', 'false', '1215974248549434');
    __adroll.fb=true;

    var __fbcd = {segment_eid: "J4M6WTA7FJFEFLTUOPJLSM"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "PageView", __fbcd);


} else {
    var __fbcd = {event: "EventSegment", segment_eid: "J4M6WTA7FJFEFLTUOPJLSM"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "CustomEvent", __fbcd);

}


      } catch(e) {}
  } catch(e) {}


  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  var adroll_tpc = __adroll._global('adroll_tpc');
  if (adroll_tpc) {
    var srv_parts = __adroll._srv().split('?');
    var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
    var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
    content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
  }
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "J4M6WTA7FJFEFLTUOPJLSM");}
}());
