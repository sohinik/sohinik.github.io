function animateMouseover() {
  anime({
    targets: this.selector,
    d: [
      {
        value:
          "M230.079-32.689L1993.92-32.689C2151.08-32.689+2278.48+93.5231+2278.48+249.214L2278.48+1418.79C2278.48+1574.48+2151.08+1700.69+1993.92+1700.69L230.079+1700.69C72.9205+1700.69-54.4816+1574.48-54.4816+1418.79L-54.4816+249.214C-54.4816+93.5231+72.9205-32.689+230.079-32.689Z"
      }
    ],
    easing: "easeOutElastic(2, 1.5)",
    duration: 400
  });
}

function animateMouseout() {
  anime({
    targets: this.selector,
    d: [{ value: this.dValue }],
    easing: "easeOutElastic(2, 1.5)",
    duration: 400
  });
}


function buttonAnimation(hov, selector, dValue) {
  const btn = document.querySelector(hov);
  const btn2 = document.querySelector(selector);

  if (btn) {
    btn.addEventListener("mouseover", animateMouseover.bind({ selector, dValue }));
    btn.addEventListener("mouseout", animateMouseout.bind({ selector, dValue }));
  }

  if (btn2) {
    btn2.addEventListener("mouseover", animateMouseover.bind({ selector, dValue }));
    btn2.addEventListener("mouseout", animateMouseout.bind({ selector, dValue }));
  }
}
const blobA =
  "M44.1,-7.4C53.2,13.8,54,44.6,39.3,55.5C24.7,66.5,-5.4,57.6,-24,42C-42.7,26.3,-49.9,3.9,-44,-12.9C-38.1,-29.6,-19.1,-40.6,-0.8,-40.4C17.5,-40.1,35,-28.6,44.1,-7.4Z";

const blobB =
  "M698.566+85.2141L1639.26+8.19788C2131.81-52.1956+2224+228.98+2224+591.997L2224+1025.07C2224+1441.16+2224+1568.53+1383.48+1568.53L666.857+1568.53C170.085+1568.53+0+1489.15+0+1009.29L0+559.025C0+145.058+313.832+127.493+698.566+85.2141Z";

const blobC =
  "M722.943-18.1583L1324.18+100.798C1687.35+171.414+2260.09+28.3941+2271.63+464.681L2279.42+759.184C2290.96+1195.47+2258.69+1608.6+1416.53+1632.7L852.345+1648.85C200.264+1667.52-13.8522+1526.76-28.2462+982.482L-28.2462+400.345C-28.2462-18.1583+327.497-72.9284+722.943-18.1583Z";

const blobD =
  "M512.607+117.846L919.646+126.562C1650.13+188.345+2309.2-147.826+2224+818.726L2184.37+1313.15C2164.38+1553.01+1790.05+1772.89+1297.61+1668L616.184+1587.54C203.694+1540.29+0+1507.59+0+973.348L0+642.629C0+304.641+72.8601+109.807+512.607+117.846Z";

const blobE =
  "M598.257+0L1419.36+0C2024.46+0+2309.2+156.793+2224+818.726L2182.56+1134.41C2149.85+1319.76+2224+1722.77+1415.72+1668L598.257+1668C267.849+1668-85.2011+1579.61+0+916.356L56.5058+416.643C65.5915+189.501+267.849+0+598.257+0Z";

const blobF =
  "M705.587+0L1245.8+60.1222C1580.47+102.592+2135.69-18.0223+2224+474.628L2271.87+1118.47C2271.87+1522.78+2168.25+1779.65+1388.5+1668L773.539+1604.32C313.212+1588.3-27.8406+1500.65-11.8193+1040.33L0.672888+795.321C16.6942+334.994+41.3592-54.7701+705.587+0Z";

buttonAnimation("#full1", "#blob1", blobF);
buttonAnimation("#full2", "#blob2", blobE);
buttonAnimation("#full3", "#blob3", blobC);
buttonAnimation("#full4", "#blob4", blobD);
buttonAnimation("#full2", "#blob5", blobB);





window.addEventListener('resize', function () {
  document.getElementById('flowers-area').setAttribute("style", "height:" + parseInt($(".landing").css('height')) + "px");
})

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".landing-flowers").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

$(document).ready(function () {

  document.getElementById('flowers-area').setAttribute("style", "height:" + parseInt($(".landing").css('height')) + "px");

  var mousePos = {};

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }

  $(window).mousemove(function (e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });

  $(window).mouseleave(function (e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });

  var draw = setInterval(function () {
    if (mousePos.x > 0 && mousePos.y > 0 && mousePos.y < parseInt($("#flowers-area").css('height'))) {

      var range = 5;

      var color = "background-image: url('./assets/images/flower-" + getRandomInt(0, 6) + ".png');";
      // var color = "";

      var sizeInt = getRandomInt(10, 30);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

      var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

      var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

      var style = left + top + color + size;
      $("<div class='flowers' style=\"" + style + "\"></div>").appendTo('#page-wrapper').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).remove(); });

      // console.log(document.getElementById("page-wrapper"));
      // console.log("<div class='flowers' style=\"" + style + "\"></div>");
      // console.log(color);
    }
  }, 50);
});












const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});