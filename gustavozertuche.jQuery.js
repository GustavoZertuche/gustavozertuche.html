$(document).ready(function() {
  
  /** First Row **/
  $('#contentone').mouseenter(function() {
    $(this).animate({backgroundSize: '125%'}, 1000);
  });
  $('#contentone').mouseleave(function() {
    $(this).animate({backgroundSize: '100%'}, 400);
  });
  
  
  /** Second Row **/
  $('#contenttwo').mouseenter(function() {
    $(this).animate({
      backgroundPositionY: '50%'
    }, 1000);
  });
  $('#contenttwo').mouseleave(function() {
    $(this).animate({
       backgroundPositionY: '0%'
     }, 400);
  });

  /** Third Row **/
  $('.collapsed').fadeOut('fast');
  $('#contentthree').mouseenter(function() {
    $(this).find('h2.default').animate({
      marginTop: '-52px'
    }, 400).fadeOut(400);
    $(this).find('h2.collapsed').fadeIn(600)
    .animate({
      //marginTop: '-20px'
    }, 600);
  });
  $('#contentthree').mouseleave(function() {
    $(this).find('h2.collapsed').animate({
      marginTop: '52px'
    }, 400)
    .fadeOut(400);
    
    $(this).find('h2.default').fadeIn(400)
    .animate({
      marginTop: '52px'
    }, 400);
  });

//  $('#contentthree').mouseenter(function() {
//    $(this).animate({
//      backgroundPositionY: '56%'
//    }, 400);
//  });
//  $('#contentthree').mouseleave(function() {
//    $(this).animate({
//       backgroundPositionY: '0%'
//     }, 400);
//  });
  
  //Row five//
  
  $('.collapsed').fadeOut('fast');
  $('#contentfive').mouseenter(function() {
    $(this).find('h2.default').animate({
      marginTop: '-52px'
    }, 400).fadeOut(400);
    $(this).find('h2.collapsed').fadeIn(600)
    .animate({
      //marginTop: '-20px'
    }, 600);
  });
  $('#contentfive').mouseleave(function() {
    
    $(this).find('h2.collapsed').animate({
      marginTop: '52px'
    }, 400)
    .fadeOut(400);
    
    $(this).find('h2.default').fadeIn(400)
    .animate({
      marginTop: '52px'
    }, 400);
  });
  
  $('#sidebarprimary').affix
  
});
/* img blur function */
/*function blurElement(element, size) {
     var filterVal = 'blur(' + size + 'px)';
     $(element)
         .css('filter', filterVal)
         .css('webkitFilter', filterVal)
         .css('mozFilter', filterVal)
         .css('oFilter', filterVal)
         .css('msFilter', filterVal)
         .css('transition', 'all 0.5s ease-out')
         .css('-webkit-transition', 'all 0.5s ease-out')
         .css('-moz-transition', 'all 0.5s ease-out')
         .css('-o-transition', 'all 0.5s ease-out');

 }*/
