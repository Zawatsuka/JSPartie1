window.onload = function(){
  document.getElementById('wow').style.opacity = 0;
}
window.addEventListener('scroll', function(){
    var obvious=window.scrollY;
    console.log(obvious);
    if (obvious>110) {
        document.getElementById('wow').style.opacity = 1;
        document.getElementById('wow').style.transition = 'opacity 2s';
    } else {
        document.getElementById('wow').style.opacity = 0;
    }
} )