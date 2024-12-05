let storyShowSliderSwiper;
function handleTickInit(tick) {
  Tick.helper.interval(function () {
    var d = Tick.helper.date();
    tick.value = {
      sep: ":",
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };
  });
}
document.querySelectorAll(".favouriteBtn").forEach((item) => {
  item.addEventListener("click", async () => {
    try {
      let res = await (
        await fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: item.id }),
        })
      ).json();
      item.children[0].classList.remove("hidden");
      item.children[1].classList.add("hidden");
    } catch (e) {}
  });
});
document.querySelectorAll("#productColors").forEach((item) => {
  if (item.querySelector(".text-productColorsPices")) {
    return;
  }
  if (item.children.length > 4) {
    for (let index = 4; index <= item.children.length; index++) {
      item.children[index].remove();
    }
    let pices = 4;
    item.innerHTML += `
                               <li
                                class="border bg-white w-[44px] h-[44px] flex centerWidthFlex rounded-lg overflow-hidden"
                              >
                              <span class="text-productColorsPices">+${pices}</span>
                              </li>
              `;
  }
});
const storySwiper = document.querySelector(".storySwiper");
const storyShowSlider = document.querySelector(".storyShowSlider");
const storyParnet = document.querySelector(".storyParnet");
function closeStory() {
  storyParnet.classList.remove("active");

  let slideActive = document.querySelectorAll(".storyShowSliderSlider");
  slideActive.forEach((item) => {
    item.querySelector("video").pause();
    item.querySelector("video").currentTime = 0;
  });
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60); // محاسبه دقیقه
  const remainingSeconds = Math.floor(seconds % 60); // محاسبه ثانیه
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`; // افزودن صفر به ثانیه‌ها
}
function storyVideo(index) {
  setStoryVideo(index);
}
let isMouseDown = false;
let index, targetStoryPercentVideo;
function mouseDownStory(inde, div) {
  isMouseDown = true;
  index = inde;
  targetStoryPercentVideo = div;
}
function changeVideoRadiu(e) {
  let x = e.clientX;
  if (!x) x = e.changedTouches[0].clientX;
  let left =
    x -
    targetStoryPercentVideo.getBoundingClientRect().left -
    targetStoryPercentVideo.children[0].scrollWidth / 2;
  if (left < 0 || left > targetStoryPercentVideo.scrollWidth) return;
  let slideActive = document.querySelectorAll(".storyShowSliderSlider");
  const video = slideActive[index].querySelector("video");

  targetStoryPercentVideo.children[0].style.left = left + "px";
  video.currentTime =
    (left / targetStoryPercentVideo.scrollWidth) * video.duration;
  setStoryVideo(index);
}

if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
  ontouchcancle = (e) => {
    isMouseDown = false;
  };
  ontouchend = (e) => {
    if (isMouseDown) {
      changeVideoRadiu(e);
    }
    isMouseDown = false;
  };
  ontoucstart = (e) => {
    if (!isMouseDown) return;
    changeVideoRadiu(e);
  };
} else {
  onmouseleave = (e) => {
    isMouseDown = false;
  };
  onmouseup = (e) => {
    if (isMouseDown) {
      changeVideoRadiu(e);
    }
    isMouseDown = false;
  };
  onmousemove = (e) => {
    if (!isMouseDown) return;
    changeVideoRadiu(e);
  };
}

function setStoryVideo(index) {
  let slideActive = document.querySelectorAll(".storyShowSliderSlider");
  const video = slideActive[index].querySelector("video");
  const percentage = (video.currentTime / video.duration) * 100;
  video.parentElement.querySelector(
    ".videoPercentComplated"
  ).style = `left:${percentage}%`;
  video.parentElement.querySelector(".videoPercentComplatedTime").textContent =
    formatTime(video.currentTime);
}
function playVideo(video, index) {
  console.log(video.played);
  if (!video.played) video.play();
  else {
    console.log(video.muted);
    video.muted = !video.muted;
    if (video.muted) {
      document
        .querySelectorAll(".storySlider")
        [index].querySelector(".mutedIcon").style.display = "block";
    } else {
      document
        .querySelectorAll(".storySlider")
        [index].querySelector(".mutedIcon").style.display = "none";
    }
  }
}
storyParnet.addEventListener("click", (e) => {
  if (e.target === storyParnet) closeStory();
});
async function fallowPosr() {
  try {
    let res = await (await fetch("storys.json")).json();
    console.log(res);
  } catch (e) {}
}
async function likePost() {
  try {
    let res = await (await fetch("storys.json")).json();
    console.log(res);
  } catch (e) {}
}
function showComments() {}
async function storySwiperGetData() {
  storySwiper.querySelector(".swiper-wrapper").innerHTML = "";
  storyShowSlider.querySelector(".swiper-wrapper").innerHTML = "";

  try {
    let res = await (await fetch("storys.json")).json();
    console.log(res);
    res.forEach((item, index) => {
      let swiper = `
              <div
  onclick="showStory(${index})"
  href="#"
  style="font-size: 12px; width: 92px"
  class="swiper-slide storySlideStyle"
>
  <div>
    <div>
      <div>
        <img src="${item.image}" />
      </div>
      <div  class="${!item.time ? "hidden" : ""}" style="    position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          color: #e03e97;
          background: #fdecf5;
          padding: 0 10px;
          ">${item.time}</div>
    </div>
  </div>
  <p>${item.text}</p>
</div>

              `;
 let story = `
               <div
               class="swiper-slide storyShowSliderSlider md:block flex items-center justify-center "
                  >

                <div
                    class="storySlider mx-auto"
                >
                      <div
                       class="h-full mx-auto relative flex flex-col justify-center">
                        <div class="relative" style="height:${
                          innerHeight < 750 ? "80vh" : "672px"
                        }">
                          <video
                            onclick="playVideo(this,${index})"
                            ontimeupdate="storyVideo(${index})"
                            src="${item.video}"
                            class="h-full w-full"
                            style="background: #0c0c0c; "
                            pause="true"
                            loop="" disablepictureinpicture="true" playsinline="" webkit-playsinline="" x5-playsinline=""
                          ></video>
                          <div class="mutedIcon absolute" style="display: none; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.59); width: 58px; height: 58px; border-radius: 100%; pointer-events: none; padding: 10px;">
                            <svg style="stroke: #fff;width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>

                          </div>
                              <div class="swiper-lazy-preloader"></div>

                        <div style="background:linear-gradient(0deg, #0c0c0c00, #0c0c0c99) 100%; top:0px" class="absolute p-4  left-0 w-full justify-between flex">
                        <div class="flex gap-4">
                          <button onclick="closeStory()">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" style="rotate:180deg" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                          </button>
                           <a href="#" class="text-white text-[14px] flex items-center">
                          <img class="w-[40px] h-[40px] rounded-full object-cover aspcet-video" src="https://dkstatics-public.digikala.com/digikala-content-x-profile/c3b83574c7f24347f79847a46ebb605165fa6fa5_1724026718.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"/>
                          <span>${item.accountName}</span>
                        </a>
                        </div>

                        <div class="">
                          <button
                          onclick="fallowPost(${item.id})"
                            class="px-3 py-2 bg-white border border-[rgba(0,0,0,.1)] rounded-lg"
                          >
                            دنبال کردن
                          </button>
                        </div>
                      </div>
                      <div style="background:linear-gradient(180deg,#0c0c0c00,#0c0c0c)" class="absolute text-white bottom-0 left-0 w-full justify-between flex flex-col pb-1 gap-4" >
                        <div class="flex justify-between w-full items-center px-4">
                        <div class="pb-5">${item.text}</div>
                       <div class=" text-white left-0 flex flex-col w-max  gap-6 text-center">
                       <button onclick="likePost()">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>

                        <span>${item.likes}</span>
                       </button>
                       <button onclick="showComments(${item.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
                        <span>${item.comments.length}</span>
                       </button>
                        </div>
                        </div>
                          <div class="w-full flex gap-4 items-center pb-4 pr-4">
                          <div onmousedown="mouseDownStory(${index},this)" ontouchstart="mouseDownStory(${index},this)" class="bg-white rounded-lg h-[5px] w-full relative ">
                            <div   class="videoPercentComplated w-[20px] h-[20px] rounded-full  absolute top-[50%] translate-y-[-50%] left-0 bg-white"></div>
                          </div>
                          <span style="min-width:40px;" class="videoPercentComplatedTime">1:00</span>
                        </div>

                      </div>
                      </div>
                      <div style="width:100% ;" class="swiper bg-[#0c0c0c]">
                        <div class="siwper-wrapper p-2">
                          <div class="swiper-slide w-max">
                            <div class="bg-white flex w-[240px] rounded-lg overflow-hidden">
                            <div class="min-w-[60px]">
                              <img src="${
                                item.image
                              }" class="object-contain w-[60px] h-[60px] " style="border:0 !important; " />
                            </div>
                            <span style="
                                display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height:30px
                            " class="text-[12px]  ">
                          ${item.text}
                            </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              `;
      storySwiper.querySelector(".swiper-wrapper").innerHTML += swiper;
      storyShowSlider.querySelector(".swiper-wrapper").innerHTML += story;
    });
    new Swiper(".storySwiper", {
      dir: "rtl",
      slidesPerView: "auto",
      spaceBetween: 14,
    });
    let isLargeScreen = window.innerWidth > 767;
    let largeScreenSlide;
    function initializeSwiper() {
      isLargeScreen = window.innerWidth > 767;
      let index = null;
      if (storyShowSliderSwiper) {
        index = storyShowSliderSwiper.activeIndex;
        storyShowSliderSwiper.destroy(true, true);
      }
      if (largeScreenSlide) {
        largeScreenSlide.destroy(true, true);
      }
      if (!isLargeScreen) {
        document.querySelector(
          ".storyShowSlider .swiper-button-next"
        ).style.display = "none";
        document.querySelector(
          ".storyShowSlider .swiper-button-prev"
        ).style.display = "none";
      } else {
        document.querySelector(
          ".storyShowSlider .swiper-button-next"
        ).style.display = "flex";
        document.querySelector(
          ".storyShowSlider .swiper-button-prev"
        ).style.display = "flex";
      }
      storyShowSliderSwiper = new Swiper(".storyShowSlider", {
        dir: "rtl",
        slidesPerView: 1,
        allowTouchMove: !isLargeScreen,
        speed: !isLargeScreen ? 500 : 0,
        spaceBetween: !isLargeScreen ? 50 : 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          init: function () {
            let slideActive = document.querySelectorAll(
              ".storyShowSliderSlider"
            );
          },
          slideChangeTransitionStart: function () {
            console.log(234);
            let slideActive = document.querySelectorAll(
              ".storyShowSliderSlider"
            );
            slideActive.forEach((item) => {
              item.querySelector("video").pause();
              item.querySelector("video").currentTime = 0;
              item.querySelector("video").muted = false;
              item.querySelector(".mutedIcon").style.display = "none";
            });

            slideActive[this.activeIndex].querySelector("video").play();
          },
        },
      });
      if (index) storyShowSliderSwiper.slideTo(index);

      largeScreenSlide = new Swiper(".largeScreenSlide", {
        autoplay: {
          delay: 4000,
        },
        slidesPerView: 1,
        spaceBetween: !isLargeScreen ? 40 : 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    // مقداردهی اولیه
    initializeSwiper();

    // به‌روزرسانی در هنگام تغییر اندازه صفحه
    window.addEventListener("resize", initializeSwiper);
  } catch (e) {
    console.log(e);
  }
}
storySwiperGetData();
async function showStory(index) {
  storyParnet.classList.add("active");
  if (storyShowSliderSwiper.activeIndex === index) {
    let slideActive = document.querySelectorAll(".storyShowSliderSlider");
    slideActive[storyShowSliderSwiper.activeIndex]
      .querySelector("video")
      .play();
  } else storyShowSliderSwiper.slideTo(index);
}
