

// CSS to replace
let new_css = "<style>body{background:#f0f0ef;color:#000}@media only screen and (min-width:1300px){.wrapper{background:#fff}}@media only screen and (min-width:980px) and (max-width:1299px){.wrapper{background:#fff}}@media only screen and (max-width:979px){.wrapper{background:#fff}}h1,h2,h3,h4,h5,h6{color:#393a3c}.subheader{color:#777}p.lead{color:#777}.strong,b,strong{color:#000}.white{color:#fff}a:link{color:#060}a:visited{color:#25422d}a:focus{background:#ccc}a:hover{background:#ffe270}a:active{color:#8ec641}table.wt th{background:#edf0f2}table.wt th.selected{background-color:#25422d}table.wt th.selected a{color:#fff}.button,button,input[type=button],input[type=reset],input[type=submit]{background:#25422d;color:#fff}.button:hover,button:hover,input[type=button]:hover,input[type=reset]:hover,input[type=submit]:hover{color:#fff;background:#8ec641}.button:not(input[type=file]):active,button:active,input[type=button]:active,input[type=reset]:active,input[type=submit]:active{color:#fff}.button a,a.button{color:#fff}.button.white,button.white{color:#fff!important}.button.white:hover,button.white:hover{color:#25422d!important}.button.white:active,button.white:active{color:#25422d}input[type=email],input[type=password],input[type=text],select,textarea{color:#000;background:#fff}.select select,select{color:#000}input[type=email]:focus,input[type=password]:focus,input[type=text]:focus,textarea:focus{color:#000}label span,legend span{color:#444}.box h6{color:#000}.box.green{background:#e1f0b4;color:#000}.box.orange{background:#ffe270;color:#000}.box.rounded{background-color:#fff}.box.rounded.orange{background-color:#fff}.box.rounded.green{background-color:#fff}.testimonial{background-color:#fff}.ACTIVE{background-color:#d1f6bd}.BLANK{background-color:#ffffa0}.TREE-STATUS:hover{background-color:#ffffa0}.status{background-color:#ffe270}.green{background-color:#e1f0b4}.red{background-color:#ddd}.NOTICE{background-color:#ffffda}.EXAMPLE{background-color:#eee}.WIKITREER{background-color:#f4cd55}.HIGHLIGHT{background-color:#ffffa0}.SECTION{color:#253b2f}.TAG{color:#fff;background-color:#8fc741}.TAG:hover{background:#25422d}.TAG-DNA{background:#25422d}.TAG-DNA:hover{background:#fcb815}.TAG-SURNAME{background:#fcb815}#commentsform{background-color:#f4cd55}.PCOMMENT{background-color:#ddd}.mergeany{background-color:#ffffa0}.pseudolink{color:#060}.pseudolink:hover{background-color:#f3b51b}.fixedbox{background-color:#fff}.HISTORY-DATE,.THANKYOU-DATE{background-color:#8fc641;color:#fff}.VOLUNTEER{background-color:#ffffa0}body.profile .HISTORY-DATE{color:#000}#header{background:0 0;background-color:#f7f6f0}#footer{background:0 0;background-color:#25422d}#footer p{color:#fff!important}#footer a{color:#fff}#footer a:link,.footer a:visited{color:#fff}ul.pureCssMenu,ul.pureCssMenu ul{background-color:#fff}ul.pureCssMenu a,ul.pureCssMenu li.dis a:hover,ul.pureCssMenu li.sep a:hover{background-color:#fff;color:#000}ul.pureCssMenu li.sep span{background-color:#a6a6a6}ul.pureCssMenu li:hover>a{background-color:#fff;color:#fec017}ul.pureCssMenu ul li a:hover{background-color:#ffe270!important;color:#000}ul.pureCssMenu li a:hover{background-color:#fff;color:#fec017}ul.pureCssMenu li.dis a{color:#aaa!important}ul.views{background-color:#fff}ul.views a,ul.views li.dis a:hover,ul.views li.sep a:hover{background-color:#fff;color:#050}ul.views li:hover>a{background-color:#ffe270;color:#000}ul.views li a:hover{background-color:#ffe270;color:#000}ul.views li.dis a{color:#050}.addthis_toolbox a:link{color:#000}ul.profile-tabs li{background:#e1f0b4}ul.profile-tabs li:hover{background:#ffe270}ul.profile-tabs li.current{background:#ffe270}ul.profile-tabs li.locked{background-color:#e1f0b4}ul.profile-tabs{border-bottom:2px solid #ffe270}ul.profile-tabs li{background:#e1f0b4}ul.profile-tabs li:hover{background:#ffe270}ul.profile-tabs li.current{background:#ffe270}ul.profile-tabs li.locked{background-color:#e1f0b4}.autocomplete-suggestions{background:#fff}.autocomplete-suggestion{color:#333}.autocomplete-suggestion b{color:#1f8dd6}.autocomplete-suggestion.selected{background:#f0f0f0}.autocomplete-suggestion-term{color:#1f8dd6}.comment-archived{background:#f5f5f5}.comment button{background:0 0;color:#536051}.comment button:hover{color:#000;background:#ffe270}#commentEditDiv button,#commentPostDiv button{background:#25422d;color:#fff}#commentEditDiv button:hover,#commentPostDiv button:hover{background:#90c800}.comment-info{color:#536051}.qa-a-item-selected{background-color:#eee}.BLUE{background-color:#eef;}.PINK{background-color:#fee;}ol#connectionList li{background:#f0f0f0;}#pagePreview div{background-color:#fff!important;}.qa-c-item-content{color:#333}.qa-q-list-item-featured{background-color:#ffc;}#footer,#header,.stripes-1,.stripes,.nogender,.male,.female,.qa-body-wrapper,H1,.familyCount3,.familyCount4,.familyCount1,.familyCount2{background:0 0}</style>"

let background_map = {
   "#25422d" : "#707D4F"
   , "#ddd" : "#413D3A"
   , "#e1f0b4" : "rgba(112,125,79,0.26)"
   , "#e1efbb" : "#707D4F"
   , "#f0f0ef" : "#413D3A"
   , "#f0f0f0" : "#413D3A"
   , "#f7f6f0" : "#2B2827"
   , "#ffe270" : "#DDC173"
   , "#ffe183" : "#DDC173"
   , "#fff" : "#2B2827"
   , "#ffc" : "#2B2827"
   , "#FFFFFF" : "#2B2827"
   , "#ffffa0" : "#DDC173"
   , "#8fc641" : "#707D4F"
   , "#ffeeee" : "#584141"
   , "#eeeeff" : "#37374C"
   , "#eee" : "#413D3A"
   , "#eef" : "#37374C"
   , "#fee" : "#584141"
}
let text_map = {
   "#000" : "#F8ECDD"
   , "#050" : "#A3B082"
   , "#060" : "#477998"
   , "#393a3c" : "#F8ECDD"
   , "#536051" : "#F8ECDD"
   , "#fff" : "#F8ECDD"
   , "#333" : "#F8ECDD"
   , "#25422d" : "#707D4F"
}

for(const n in background_map) {
   let background_css = new RegExp('(background(-color)?:)('+n+')(;|}|!important)','gi');
   new_css = new_css.replace(background_css,'$1'+background_map[n]+'$4');
   // Also inline styles
   $('div[style*="background-color:'+n+';"]').css('background-color', background_map[n]);
   $('div[style*="background:'+n+';"]').css('background', background_map[n]);
   $('td[bgcolor*="'+n+'"]').attr('bgcolor', background_map[n]);
}

for(const n in text_map) {
   let text_css = new RegExp('({|;)(color:)('+n+')(;|}|!important)','gi');
   new_css = new_css.replace(text_css,'$1$2'+text_map[n]+'$4');
   $('div[style*="color:'+n+';"]').css('color', text_map[n]);

}



// Insert css
new_css_tags = $.parseHTML( new_css );
$( "body" ).append(new_css_tags);

// Swap out logo
$('.logo a img'). attr("src", "/photo.php/9/95/WikiTree_Images-1.png");

//$('.logo a img'). attr("src", "/images/wikitree-logo.png.pagespeed.ce.aTEYekqftE.png");


