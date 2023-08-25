const $ = document;
const modalOverley = $.querySelector(".modal-overley");
const modal = $.querySelector(".modal");
const openBioBtn = $.querySelector(".open-bio-btn");
const translate = $.getElementById("translate");

const myNameInModal = $.getElementById("my-name-in-modal");
const myBornInModal = $.getElementById("my-born-in-modal");
const myBioInModal = $.getElementById("my-bio-in-modal");
const myName = $.getElementById("my-name");
const myJob = $.getElementById("my-job");
const github = $.getElementById("github");
const linkedin = $.getElementById("linkedin");
const openWebsiteBtn = $.querySelector(".open-website-btn");

const openModal = () => {
  modal.style.animation = "show 0.3s forwards linear";
  modalOverley.style.display = "flex";
  $.body.style.overflowY = "hidden";
};

const closeModal = (e) => {
  if (e.target.className === "modal-overley") {
    modal.style.animation = "hide 0.3s forwards linear";
    setTimeout(() => {
      modalOverley.style.display = "none";
    }, 350);
    $.body.style.overflowY = "scroll";
  }
};

translate.addEventListener("change", (e) => {
  let translateValue = e.target.value;
  if (translateValue === "EN") {
    myNameInModal.innerHTML = "Sajad Mehri";
    myBornInModal.innerHTML = "Born: 19 October 2003";
    myBioInModal.style.direction = "ltr";
    myBioInModal.innerHTML = `
      Hello :) I am Sajad Mehri, associate student of Computer-Software at Shahid Mohammad Montazeri Technical College of Mashhad.<br>

I started self-taught programming a year ago and now I'm learning new things every day in the world of technology.<br>

My interests include coffee, computer games and JavaScript.
      `;
    openBioBtn.innerHTML = "About Me";
    myName.innerHTML = "Sajad Mehri";
    myJob.innerHTML = "FrontEnd Developer";
    openWebsiteBtn.innerHTML = "Open Website";
    github.innerHTML = "Open";
    linkedin.innerHTML = "Open";
    $.title = "Sajad Mehri / FrontEnd Developer";
  } else {
    myNameInModal.innerHTML = "سجاد مهری";
    myBornInModal.innerHTML = "متولد: 27 مهر 1382";
    myBioInModal.style.direction = "rtl";
    myBioInModal.innerHTML = `
    سلام :) سجاد مهری هستم دانشجوی مقطع کاردانی رشته کامپیوتر-نرم افزار در دانشکده فنی شهید محمد منتظری مشهد.<br>یک ساله برنامه نویسی رو به صورت خودآموز شروع کردم و در حال حاضر هر روز در حال یادگیری مطالب روز دنیای تکنولوژی هستم.<br>از علایق من می توان به قهوه،بازی های رایانه ای و زبان جاوااسکریپت اشاره کرد.
    `;
    openBioBtn.innerHTML = "درباره من";
    myName.innerHTML = "سجاد مهری";
    myJob.innerHTML = "توسعه دهنده فرانت اند";
    openWebsiteBtn.innerHTML = "مشاهده وبسایت";
    github.innerHTML = "مشاهده";
    linkedin.innerHTML = "مشاهده";
    $.title = "سجاد مهری / توسعه دهنده فرانت اند";
  }
});

openBioBtn.addEventListener("click", openModal);

modalOverley.addEventListener("click", closeModal);
