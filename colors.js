var Links={
  setColor: function (color){
    // var alist= document.querySelectorAll('a');
    // var i=0;
    // while( i< alist.length){
    //   alist[i].style.color= color;
    //   i= i + 1;
    // }
    $('a').css('color', color);
  }
}
function LinkssetColor(color){
  var alist= document.querySelectorAll('a');
  var i=0;
  while( i< alist.length){
    alist[i].style.color= color;
    i= i + 1;
  }
}
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor: function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
// 다크-light 모드 함수
function nightDayHandler(self){
  var target= document.querySelector('body');
  if (self.value === 'dark mode'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'light mode';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'dark mode';

    Links.setColor('#FFB400');
    }
  }
