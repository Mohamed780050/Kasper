///////////////////////////// Headre links /////////////////////////////
let Header_Links = document.querySelectorAll("header ul li a");
Header_Links.forEach((HL) => {
  HL.onclick = function () {
    Header_Links.forEach((HL) => {
      HL.classList.remove("Active");
      this.classList.add("Active");
    });
  };
});
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// Bullets ////////////////////////////////
let landBul = document.querySelectorAll(".landBul li");
let ou = document.querySelectorAll(".ou li");
let landing = document.querySelector(".Landing");
let counter = 2;
landBul.forEach((bul) => {
  bul.onclick = function () {
    landBul.forEach((bul) => {
      bul.classList.remove("Active");
      this.classList.add("Active");
    });
    if (this.classList.contains("Active") && this.dataset.numbers == 1) {
      landing.style.backgroundImage = "url(Images/shuffle-01.jpg)";
    } else if (this.classList.contains("Active") && this.dataset.numbers == 2) {
      landing.style.backgroundImage = "url(Images/shuffle-02.jpg)";
    } else if (this.classList.contains("Active") && this.dataset.numbers == 3) {
      landing.style.backgroundImage = "url(Images/shuffle-03.jpg)";
    }
    counter = +bul.dataset.numbers;
    console.log(bul.dataset.numbers);
    console.log(counter);
  };
});
ou.forEach((bul) => {
  bul.onclick = function () {
    ou.forEach((bul) => {
      bul.classList.remove("Active");
      this.classList.add("Active");
    });
  };
});
/////////////////////////////////////////////////////////////////////////
//////////////////////////// Landing Images ////////////////////////////
let rightArrow = document.getElementById("right");
let leftArrow = document.getElementById("left");
rightArrow.onclick = function () {
  if (counter !== 3) {
    counter++;
  } else {
    counter = 1;
  }
  console.log(counter);
  landBul.forEach((bul) => {
    bul.classList.remove("Active");
    if (bul.dataset.numbers == counter) {
      bul.classList.add("Active");
    }
    if (bul.classList.contains("Active")) {
      landing.style.backgroundImage = `url(Images/shuffle-0${counter}.jpg)`;
    }
  });
};
leftArrow.onclick = function () {
  if (counter !== 1) {
    counter--;
  } else if (counter == 1 || counter == 0) {
    counter = 3;
  }
  console.log(counter);
  landBul.forEach((bul) => {
    bul.classList.remove("Active");
    if (bul.dataset.numbers == counter) {
      bul.classList.add("Active");
      console.log(bul);
    }
    if (bul.classList.contains("Active")) {
      landing.style.backgroundImage = `url(Images/shuffle-0${counter}.jpg)`;
    }
  });
};
////////////////////////////////////////////////////////////////////////
//////////////////////////////// Shuffle ////////////////////////////////
let shuffle = document.querySelectorAll(".Shuffle ul li");
let images = document.querySelectorAll(".Images-Holder .Box");
let kide = document.querySelectorAll(".Images-Holder .Box .Caption p");
shuffle.forEach((shuf) => {
  shuf.onclick = function () {
    shuffle.forEach((shuf) => {
      shuf.classList.remove("Active");
      this.classList.add("Active");
    });
    images.forEach((ele) => {
      ele.style.opacity = "0";
      ele.style.position = "absolute";
      ele.style.zIndex = "0";
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
      img.style.opacity = "1";
      img.style.position = "relative";
      img.style.zIndex = "1";
    });
  };
});
/////////////////////////////////////////////////////////////////////////
////////////////////////////// Statistics //////////////////////////////
let statSection = document.querySelector(".About-Us");
let statNumbers = document.querySelectorAll(".Statistics .box .Number");
let started = false;
function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// Skills ////////////////////////////////
let skillspersent = document.querySelectorAll(
  ".Skills .Prog-Holder .Prog span"
);
let skillSection = document.querySelector(".Skills");
let skillStarted = false;
window.onscroll = function () {
  if (window.scrollY >= statSection.offsetTop) {
    if (!started) {
      statNumbers.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= skillSection.offsetTop) {
    if (!skillStarted) {
      skillspersent.forEach((SP) => {
        let goal = SP.dataset.progress;
        let numberToStart = 1;
        let counter = setInterval(() => {
          SP.style.width = `${numberToStart++}%`;
          if (SP.style.width == goal) {
            clearInterval(counter);
          }
        }, 2000 / goal);
      });
    }
    skillStarted = true;
  }
};
////////////////////////////////////////////////////////////////////////
