!function(){
  var shop = 'https://shop250923419.taobao.com/shop/view_shop.htm?tracelog=twddp&user_number_id=747566290';
  var links = [ 
    [['HOME', 'index.html'], ['STORY', 'story.html'], ['ABOUT US', 'aboutus.html'], ['SHOP', shop]],
    [['主页', 'index.html'], ['品牌故事', 'story.html'], ['关于我们', 'aboutus.html'], ['在线商城', shop]],
  ];

  var href = window.location.href;
  var iscn = !!href.match(/\/cn\//);
  var lang_links = links[+iscn]
  var nav = function() {/*!
      <div class="nav abs">
        {{MENU}}
      </div>
      <div class="lang abs">
        {{LANG}}
      </div>
  !*/}.getdoc();

  var menu = '';
  var page = 'index.html';
  for(var i=0; i<lang_links.length; i++){
    var it = lang_links[i];
    var active = '';
    if(! it[1].match(/^https?:/)) {
      if(href.match(it[1])) {
        active = 'class="active"';
        page = it[1];
      }
    }
    menu += '<a '+ active +' href="'+ it[1] +'">'+ it[0] +'</a>';
  }

  var lang = '<a href="../'+ page +'">ENGLISH</a> <span>|</span> <a class="active" href="#">中文</a>';
  if(! iscn){
    lang = '<a class="active" href="#">ENGLISH</a> <span>|</span> <a href="./cn/'+ page +'">中文</a>';
  }
  document.write(nav.replace('{{MENU}}', menu).replace('{{LANG}}', lang));
}();
