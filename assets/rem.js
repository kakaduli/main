!function(n){
  var  e=n.document,
       t=e.documentElement,
       i=2150,
       d=i/100,
       o="orientationchange"in n?"orientationchange":"resize",
       a=function(){
           var n=t.clientWidth||320;n>i&&(n=i);
           t.style.fontSize=n/d+"px"
       };
       a();
       e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))

  Function.prototype.getdoc = function() {
    var str = this.toString();
    var start = str.indexOf('/*!');
    var end = str.lastIndexOf('!*/');
    if(start == -1 || end == -1) {
      return '';
    }

    return str.slice(start + 3, end);
  };
}(window);
