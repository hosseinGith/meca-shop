// checkbox

let checkbox = Array.from(document.getElementsByClassName("checkbox"));
let checkboxRow = Array.from(document.getElementsByClassName("checkboxRow"));

checkboxRow.forEach((item) => {
  item.addEventListener("click", function () {
    item.querySelector(".checkbox").classList.toggle("active");
  });
});
const updateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  } else {
    element.blur();
  }
};
const otpHiddenInput = document.getElementById("otpHiddenInput");
const setValue = () => {
  otpHiddenInput.value = finalInput;
};

const otpInputs = document.querySelectorAll(".otpInput");
const loginForm = document.getElementById("loginForm");
let inputCount = 0,
  finalInput = "";
  otpInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      updateInputConfig(e.target, true);
      if (inputCount <= otpInputs.length - 1 && e.key != "Backspace") {
        finalInput += value;
        setValue();
        if (inputCount < otpInputs.length - 1) {
          updateInputConfig(e.target.nextElementSibling, false);
        }
      }
      inputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      setValue();
      if (inputCount == 0) {
        updateInputConfig(e.target, false);
        return false;
      }
      updateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      updateInputConfig(e.target.previousElementSibling, false);
      inputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
    if (inputCount > otpInputs.length - 1) {
      // submit form on final char
      loginForm.submit();
      if (e.key == "Backspace") {
        finalInput = finalInput.substring(0, finalInput.length - 1);
        setValue();
        updateInputConfig(otpContainer.lastElementChild, false);
        otpContainer.lastElementChild.value = "";
        inputCount -= 1;
      }
    }
  });
});


function closeLoginWindow(){
  document.querySelector("#loginWIndow").classList.remove('active')
  document.querySelectorAll("#loginWIndow input").forEach((input) => {input.value=''})
}
document.querySelector("#loginWIndow").addEventListener('click',function(e){
  if(e.target===this)closeLoginWindow()
})
document.querySelectorAll(`
#loginSubmit,
#clientAccount,
#caratHeader
`).forEach((item) => {
  item.addEventListener('click',()=>{
  document.querySelector("#loginWIndow").classList.add('active')
  })
})

document.querySelectorAll(`form`).forEach((item) => {
    item.addEventListener('click',(e)=>{
      e.preventDefault()
    })
  })
  
// اسلایدر

var banner1 = new Swiper(".banner1", {
  dir: "rtl",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 14,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
});
var banner2 = new Swiper(".banner2", {
  dir: "rtl",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 14,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },
});
var banner3 = new Swiper(".banner3", {
  dir: "rtl",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 14,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next7",
    prevEl: ".swiper-button-prev7",
  },
});
var janebi = new Swiper(".janebi", {
  dir: "rtl",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});
var category = new Swiper(".brands", {
  dir: "rtl",
  slidesPerView: 2.8,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 14,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var time = new Swiper(".time", {
  dir: "rtl",
  slidesPerView: 1.3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});
var mobile = new Swiper(".mobile", {
  dir: "rtl",
  slidesPerView: 1.3,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var mobile2 = new Swiper(".mobile2", {
  dir: "rtl",
  slidesPerView: 2.4,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 16,
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var mobile = new Swiper(".blog", {
  dir: "rtl",
  slidesPerView: 1.1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});
var comments = new Swiper(".comments", {
  dir: "rtl",
  slidesPerView: 1.7,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".smallImgs", {
  dir: "rtl",
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
});

var brands = new Swiper(".payment", {
  dir: "rtl",
  slidesPerView: 2.8,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 14,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var category2 = new Swiper(".category2", {
  dir: "rtl",
  slidesPerView: 2,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 14,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});
// see-more

let seeMore = Array.from(document.getElementsByClassName("see-more"));

seeMore.forEach((item) => {
  item.addEventListener("click", function () {
    item.previousElementSibling.classList.toggle("active");
    item.querySelector("svg").classList.toggle("active");
  });
});

// accardion

let accardionBtn = Array.from(document.getElementsByClassName("accardionBtn"));
let accardionContent = Array.from(
  document.getElementsByClassName("accardionContent")
);
let footerBtn = Array.from(document.getElementsByClassName("footer-btn"));
let footerContent = Array.from(
  document.getElementsByClassName("footer-content")
);
let toggleCatDropdown = Array.from(
  document.getElementsByClassName("toggleCatDropdown")
);

accardionBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("active");
  });
});
toggleCatDropdown.forEach((item) => {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("active");
    item.querySelector("svg").classList.toggle("active");
  });
});
footerBtn.forEach((item) => {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("active");
    item.querySelector("svg").classList.toggle("active");
  });
});

// tab

let tabs = Array.from(document.querySelectorAll("#myTab li"));
let tabsMenu = Array.from(document.querySelectorAll(".tabs"));
let catDropdownTab = Array.from(document.querySelectorAll(".catDropdownTab"));
let myTabContent = Array.from(document.querySelectorAll("#myTabContent > div"));
let tabContent = Array.from(document.querySelectorAll(".tabContent > div"));
let catDropdownContent = Array.from(
  document.querySelectorAll(".catDropdownContent > div")
);

tabs.forEach((item) => {
  item.addEventListener("click", function () {
    tabs.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
    let tabId = item.dataset.id;
    myTabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

tabsMenu.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    tabsMenu.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
    let tabId = item.dataset.id;
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

catDropdownTab.forEach((item) => {
  item.addEventListener("click", function () {
    catDropdownTab.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
    let tabId = item.dataset.id;
    catDropdownContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
// go back

function goBack() {
  window.history.back();
}
// show all Size

let showSize = Array.from(document.getElementsByClassName("showSize"));

showSize.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.classList.add("active");
    item.style.display = "none";
  });
});

// select size  && color

let selectSize = Array.from(document.querySelectorAll(".selectSize > div"));
let selectColor = Array.from(document.querySelectorAll(".selectColor"));
let sizes = Array.from(document.querySelectorAll(".sizes > div"));

selectSize.forEach((item) => {
  item.addEventListener("click", function () {
    selectSize.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
    document.getElementById("sizeText").textContent = item.textContent;
  });
});
selectColor.forEach((item) => {
  item.addEventListener("click", function () {
    selectColor.forEach((items) => {
      items.classList.remove("active");
    });
    item.classList.add("active");
    let tabId = item.dataset.id;
    let tabColor = item.dataset.color;
    document.getElementById("colorText").textContent = tabColor;
    sizes.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
});
// show all category

let showAllCat = document.getElementById("showAllCat");
if (showAllCat)
  showAllCat.addEventListener("click", function () {
    this.parentElement.parentElement.classList.add("active");
    this.parentElement.style.display = "none";
  });

//initiate the plugin and pass the id of the div containing gallery images
if ($("#zoom_03"))
  $("#zoom_03").ezPlus({
    gallery: "gallery_01",
    cursor: "pointer",
    galleryActiveClass: "active",
    imageCrossfade: true,
    loadingIcon: "http://www.elevateweb.co.uk/spinner.gif",
  });

//pass the images to Fancybox
$("#zoom_03").bind("click", function (e) {
  var ez = $("#zoom_03").data("ezPlus");
  $.fancyboxPlus(ez.getGalleryList());
  return false;
});
