window.addEventListener("load", function () {
  let pre = document.getElementById("preloader");
  if (pre) {
    pre.style.opacity = 1;
    let fade = setInterval(() => {
      let current = parseFloat(pre.style.opacity);
      if (current > 0) {
        pre.style.opacity = (current - 0.05).toString();
      } else {
        clearInterval(fade);
        pre.style.display = "none";
      }
    }, 50);
  }
});
