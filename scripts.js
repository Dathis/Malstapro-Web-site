$(document).ready(function(){
  
    $('.logo').css('text-shadow','0 0 80px yellow')
    $('#menu2').css('visibility','hidden')
})
var ShowMenu1 = function(){
    $('.logo').hide(500)
    $('.back').show(100)
    $('#menu2').css('visibility','visible')
    $('#menu1').css('visibility','hidden')
   
}
var ShowMenu2 = function(){
    $('#ph').hide(500)
    $('#Introduction_video').hide(500)
    $('#back2').css('visibility','visible')
    $('#back1').css('visibility','hidden')
}
var back1 = function(){
    $('#menu1').css('visibility','visible')
    $('#menu2').css('visibility','hidden')
    $('.logo').show(500)
}
var back2 = function(){
    $('#ph').show(500)
    $('#Introduction_video').show(500)
    $('#back1').css('visibility','visible')
    $('#back2').css('visibility','hidden')

   

}
