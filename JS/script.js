// SLIDESHOW IMAGE
let index = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;
  if (index >= totalSlides) {
    index = 0;
  }

  setTimeout(showSlides, 3000);
}

window.onload = showSlides;

// AUTOSCROLL
function scrollToPackage() {
  const packageSection = document.getElementById("package");
  packageSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollToCallUs() {
  const callUsSection = document.getElementById("call");
  callUsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// SUBMIT FORM
function showAlert() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const negara = document.getElementById("negara").value.trim();

  if (name === "") {
    alert("Nama harus diisi");
    return;
  }

  if (email === "") {
    alert("Email harus diisi!");
    return;
  }

  if (negara === "") {
    alert("Pilih negara tujuan!");
    return;
  }

  alert("Terima kasih data anda sudah kami terima");
}
