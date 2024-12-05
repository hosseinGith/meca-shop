Fancybox.bind("[data-fancybox]", {});

let openCart2 = document.getElementById("openCart2");
openCart2.addEventListener("click", function () {
  cartModal.classList.toggle("active");
  categoryModal.classList.remove("active");
  filterModal.classList.remove("active");
});
const zoomContainer = document.querySelectorAll(".zoom-container");

zoomContainer.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const zoomImage = item.querySelector("img");
    const zoomLens = item.querySelector(".zoom-lens");
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - zoomLens.offsetWidth / 2;
    const y = e.clientY - rect.top - zoomLens.offsetHeight / 2;

    // محدود کردن لنز در محدوده تصویر
    const lensX = Math.max(0, Math.min(x, rect.width - zoomLens.offsetWidth));
    const lensY = Math.max(0, Math.min(y, rect.height - zoomLens.offsetHeight));

    zoomLens.style.left = lensX + "px";
    zoomLens.style.top = lensY + "px";

    // بزرگنمایی تصویر
    zoomImage.style.transformOrigin = `${(lensX / rect.width) * 100}% ${
      (lensY / rect.height) * 100
    }%`;
    zoomImage.style.transform = "scale(2)"; // نسبت زوم
  });

  item.addEventListener("mouseleave", () => {
    const zoomImage = item.querySelector("img");
    zoomImage.style.transform = "scale(1)";
  });
});
const closeSizeDropDown = document.querySelector("#closeSizeDropDown");
const sizeDropDownCont = document.querySelector("#sizeDropDownCont");
const openSizeDropDown = document.querySelector("#openSizeDropDown");
let galleryCategorySlider;
closeSizeDropDown.addEventListener("click", () => {
  sizeDropDownCont.children[0].classList.add("hideDropDownAnimation");
  sizeDropDownCont.children[0].classList.remove("showDropDownAnimation");
  let event;

  sizeDropDownCont.children[0].addEventListener("animationend", () => {
    if (
      sizeDropDownCont.children[0].className.indexOf(
        "hideDropDownAnimation"
      ) === -1
    )
      return;
    sizeDropDownCont.classList.remove("flex");
    sizeDropDownCont.children[0].classList.remove("hideDropDownAnimation");
    sizeDropDownCont.children[0].classList.add("showDropDownAnimation");
    sizeDropDownCont.classList.add("hidden");
  });
});
openSizeDropDown.addEventListener("click", () => {
  sizeDropDownCont.classList.add("flex");
  sizeDropDownCont.classList.remove("hidden");
});
sizeDropDownCont.addEventListener("click", (e) => {
  if (e.target !== sizeDropDownCont) return;
  closeSizeDropDown.click();
});
let gallery = document.querySelector(".gallery");
function dinamicData() {
  var gallerySlide = new Swiper(".gallery", {
    dir: "ltr",
    spaceBetween: 10,
  });
  let productColorsContSlider = new Swiper(".productColorsCont", {
    slidesPerView: "auto",
    spaceBetween: 14,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: "auto",
      },
    },
  });

  galleryCategorySlider = new Swiper(".galleryCategory", {
    direction: "vertical",
    spaceBetween: 14,
    slidesPerView: "auto",
    slidesPerView: "auto",
  });
  $("#next-product-color").click(() => {
    gallerySlide.slideNext();
  });
  $("#prev-product-color").click(() => {
    gallerySlide.slidePrev();
  });
  gallerySlide.on("transitionStart", function (e) {
    galleryCategory_slide.forEach((item) => {
      let indexSLide = Number(item.getAttribute("categoryid"));
      if (indexSLide == gallery.querySelector(".swiper-slide-active").id) {
        galleryCategorySlider.slideTo(e.activeIndex);
        galleryCategory_slide.forEach((item) => {
          item.querySelector("img").classList.remove("border");
        });
        item.querySelector("img").classList.add("border");
      }
    });
  });
  const galleryCategory_slide = document.querySelectorAll(
    ".galleryCategory .swiper-slide"
  );
  galleryCategory_slide.forEach((item) => {
    item.addEventListener("click", () => {
      let indexSLide = Number(item.getAttribute("aria-label").split("/")[0]);
      gallerySlide.slideTo(indexSLide - 1);
      galleryCategory_slide.forEach((item) => {
        item.querySelector("img").classList.remove("border");
      });
      item.querySelector("img").classList.add("border");
    });
  });
  let productColors = document.querySelectorAll("productColors swiper-slide");
  productColors.forEach((item) => {
    item.addEventListener("click", () => {
      productColors.forEach((item) => {
        item
          .querySelector("img")
          .classList.remove("border-sliedContImageHeartColor");
      });
      item
        .querySelector("img")
        .classList.add("border-sliedContImageHeartColor");
    });
  });
}
dinamicData();
let submitProduct = document.querySelector("#submitProduct");
submitProduct.addEventListener("click", async (e) => {
  e.preventDefault();
  let productColor = document.querySelector("#productColor");
  let productSize = document.querySelector("#productSize");
  productColor.value = document
    .querySelector(".productColorsCont .swiper-slide-active")
    .getAttribute("productColor");
  productSize.value = document.querySelector("#productSize").value;
  let data = {
    a: productColor.value,
    b: productSize.value,
  };
  try {
    let res = await (
      await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    ).json();
  } catch (e) {}
});


