let btn = document.getElementById("spin");
let close = document.querySelector(".close");
let win_div = document.getElementById("winning");
let okbtn = document.getElementById("ok");

btn.onclick = function () {
  let val = Math.ceil(Math.random() * 15);
  let container = document.querySelector(".container");
  container.style.transitionDuration = val + "s";
  container.style.transform = "rotate(" + (val + 1) * 1024 + "deg)";
  setTimeout(() => {
    let divNum = Math.floor(((val + 1) * 1024) / 45) % 8;
    divNum = ((divNum + 3) % 8) + 1;
    document.getElementById("winning-message").innerHTML =
      "You have won " +
      document.querySelector(".div" + divNum).innerHTML +
      " on everything you buy from now on.";

    container.style.transitionDuration = 0 + "s";
    container.style.transform = "rotate(" + (val * -1 - 1) * 1024 + "deg)";
    win_div.style.display = "block";
    btn.disabled = true;
    btn.style.backgroundColor = "#e2e2e2";
    btn.style.color = "#a2a2a2";
  }, val * 1000);
};

okbtn.onclick = function () {
  win_div.style.display = "none";
  btn.disabled = false;
  btn.style.backgroundColor = "#8595f0";
  btn.style.color = "white";
};

close.onclick = () => {
  document.getElementById("popup").style.display = "none";
};
