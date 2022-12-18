import loadingGif from "/loadinggif.gif";
import { copyImageToClipboard } from "copy-image-clipboard";

const form: HTMLFormElement | null = document.querySelector("form");

function showSpinner() {
  const img = document.createElement("img");
  img.src = loadingGif;
  document.querySelector("#loading")?.appendChild(img);
}

function hideSpinner() {
  document.querySelector("#loading")!.innerHTML = "";
}

const generateQRCode = (url: String, size: Number) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  // * disable button, show spinner, clear QR code if one is visible
  clearQR();
  document.querySelector("button")!.disabled = true;
  showSpinner();

  // * get data
  const url: String = form.url.value;
  const size: Number = Number(form.size.value);
  console.table({ url, size });
  // * generate qr code
  generateQRCode(url, size);

  // * hide spineer
  hideSpinner();

  // *enable button
  document.querySelector("button")!.disabled = false;
  // clearQR();
});

function clearQR() {
  document.getElementById("qrcode")!.innerHTML = "";
}

export {};
