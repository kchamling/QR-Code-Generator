const qrText = document.querySelector("#qr-text");
const imageBox = document.querySelector(".image-box");
const qrImage = document.querySelector("#qr");
const generateQrBtn = document.querySelector(".container button");

const createQRCode = (text) => {
  if (text.length > 0) {
    const URL =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;
    qrImage.src = URL;
    imageBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};

generateQrBtn.addEventListener("click", () => {
  createQRCode(qrText.value);
});

qrText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createQRCode(qrText.value);
  }
});
