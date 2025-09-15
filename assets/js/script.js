window.addEventListener("load", function() {
  let pre = document.getElementById('preloader');
  if(pre){
    pre.style.opacity = "1";
    let fade = setInterval(()=>{
      if(pre.style.opacity > 0){
        pre.style.opacity -= 0.05;
      } else {
        clearInterval(fade);
        pre.style.display = "none";
      }
    }, 50);
  }
});

