const generateQrBtn = document.querySelector(".container button");
const qrText = document.querySelector(".container input");
const imageBox = document.querySelector(".image-box");
const qrImage = document.querySelector("#qr");

const createQRCode = () => {
  if (qrText.length > 0) {
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrImage.src = URL;
    imageBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setInterval(() => {
      qrText.classList.remove("error");
    }, 2000);
  }
};

generateQrBtn.addEventListener("click", () => {
  createQRCode();
});
