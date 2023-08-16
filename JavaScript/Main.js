///////////////////////////// Headre links /////////////////////////////
let Header_Links = document.querySelectorAll("header ul li a");
let ToggleBtn = document.querySelector("header .container nav button.toggle");
let Links = document.querySelector("header .container nav ul");
let TheAboutSection = document.querySelector("section.service");
let upBtn = document.querySelector("body > button");
Header_Links.forEach((HL) => {
  HL.onclick = function () {
    Header_Links.forEach((HL) => {
      HL.classList.remove("active");
      this.classList.add("active");
    });
    Links.classList.toggle("open");
    ToggleBtn.classList.toggle("show");
  };
});
ToggleBtn.addEventListener("click", function (e) {
  Links.classList.toggle("open");
  ToggleBtn.classList.toggle("show");
  e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (e.target !== ToggleBtn && e.target !== Links) {
    if (Links.classList.contains("open")) {
      Links.classList.toggle("open");
      ToggleBtn.classList.toggle("show");
    }
  }
});
/////////////////////////////////////////////////////////////////////////
//////////////////////////////// bullets ////////////////////////////////
let landBul = document.querySelectorAll(".landBul li");
let ou = document.querySelectorAll(".ou li");
let landing = document.querySelector(".landing");
let counter = 2;
landBul.forEach((bul) => {
  bul.onclick = function () {
    landBul.forEach((bul) => {
      bul.classList.remove("active");
      this.classList.add("active");
    });
    if (this.classList.contains("active") && this.dataset.numbers == 1) {
      landing.style.backgroundImage = "url(Images/shuffle-01.jpg)";
    } else if (this.classList.contains("active") && this.dataset.numbers == 2) {
      landing.style.backgroundImage = "url(Images/shuffle-02.jpg)";
    } else if (this.classList.contains("active") && this.dataset.numbers == 3) {
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
      bul.classList.remove("active");
      this.classList.add("active");
    });
  };
});
/////////////////////////////////////////////////////////////////////////
//////////////////////////// Landing Images ////////////////////////////
let TheLandingSection = document.getElementById("landing");
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
    bul.classList.remove("active");
    if (bul.dataset.numbers == counter) {
      bul.classList.add("active");
    }
    if (bul.classList.contains("active")) {
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
    bul.classList.remove("active");
    if (bul.dataset.numbers == counter) {
      bul.classList.add("active");
      console.log(bul);
    }
    if (bul.classList.contains("active")) {
      landing.style.backgroundImage = `url(Images/shuffle-0${counter}.jpg)`;
    }
  });
};
////////////////////////////////////////////////////////////////////////
//////////////////////////////// Shuffle ////////////////////////////////
let shuffle = document.querySelectorAll(".shuffle ul li");
let images = document.querySelectorAll(".Images-Holder .box");
let kide = document.querySelectorAll(".Images-Holder .box .Caption p");
shuffle.forEach((shuf) => {
  shuf.onclick = function () {
    shuffle.forEach((shuf) => {
      shuf.classList.remove("active");
      this.classList.add("active");
    });
    images.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
      img.style.display = "block";
    });
  };
});
/////////////////////////////////////////////////////////////////////////
////////////////////////////// Statistics //////////////////////////////
let statSection = document.querySelector(".about-us");
let statNumbers = document.querySelectorAll(".statistics .box .number");
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
  ".skills .Prog-Holder .Prog span"
);
let skillSection = document.querySelector(".skills");
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
  if (window.scrollY >= TheAboutSection.offsetTop) {
    upBtn.classList.add("show-up");
  } else {
    upBtn.classList.remove("show-up");
  }
};
////////////////////////////////////////////////////////////////////////
upBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
