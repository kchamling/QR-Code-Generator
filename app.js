const input = document.querySelector(".container input");
const generateQrBtn = document.querySelector(".container button");
const qrBox = document.querySelector("#qr-box");
const qrImg = document.querySelector("#qr-img");

function generateQrCode() {
  const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=/" + input.value
  qrImg.src = URL;
  qrBox.classList.add("show-img");
}

generateQrBtn.addEventListener("click", () => {
  generateQrCode();
});
