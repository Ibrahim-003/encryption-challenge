import { handleButton } from "./utils/util.js";

const encryptor = document.querySelector(".encryptor");
const decryptor = document.querySelector(".decryptor");
const userEntry = document.querySelector("#userEntry");
const outputSection = document.querySelector(".output-section");

// encriptando el texto
encryptor.addEventListener("click", () => {
  //entrada del usuario
  const userText = userEntry.value;

  //validaciones por hacer

  //si pasa las validaciones, entonces lo encrypto
  const userTextEncrypted = handleButton(userText, true);
  // muestro lo encryptado en pantalla.
  outputSection.innerHTML = `
    <div class="output-containerF output-container">
    <p>${userTextEncrypted}</p>
    <button class="btn copy">Copy</button>
    </div>
    `;

  //copiando el texto
  const copyBtn = document.querySelector(".copy");
  copyBtn.addEventListener("click", () => {
    const copyText = document.querySelector(".output-containerF p").textContent;

    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("Texto copiado al portapapeles.");
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
  });
});

//desencriptando el texto
decryptor.addEventListener("click", () => {
  const userText = userEntry.value;

  //validaciones por hacer

  //si pasa las validaciones, entonces lo desencripto
  const userTextDecrypted = handleButton(userText, false);

  console.log(userTextDecrypted);
  // muestro lo desencriptado en pantalla.
  outputSection.innerHTML = `
    <div class="output-containerF output-container">
    <p>${userTextDecrypted}</p>
    <button class="btn copy">Copy</button>
    </div>
    `;

  //copiando el texto
  const copyBtn = document.querySelector(".copy");
  copyBtn.addEventListener("click", () => {
    const copyText = document.querySelector(".output-containerF p").textContent;

    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert("Texto copiado al portapapeles.");
      })
      .catch((err) => {
        console.error("Error al copiar texto: ", err);
      });
  });
});
