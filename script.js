/* eslint-disable @typescript-eslint/no-unused-vars */
function addSparaToPage(url) {
  const chatSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" class="icon icon-tabler icons-tabler-filled icon-tabler-message-circle-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.821 4.91c3.898 -2.765 9.469 -2.539 13.073 .536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.232 -.101l-4.375 .931l-.075 .013l-.11 .009l-.113 -.004l-.044 -.005l-.11 -.02l-.105 -.034l-.1 -.044l-.076 -.042l-.108 -.077l-.081 -.074l-.073 -.083l-.053 -.075l-.065 -.115l-.042 -.106l-.031 -.113l-.013 -.075l-.009 -.11l.004 -.113l.005 -.044l.02 -.11l.022 -.072l1.15 -3.451l-.022 -.036c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168z" /></svg>`;
  const downSVG = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>`;
  const BOTTOM_DISTANCE = "11px";
  const RIGHT_DISTANCE = "19px";
  const BUTTON_SIZE = "50px";

  const sparaButton = document.createElement("button");
  sparaButton.style.cssText = `
      width: ${BUTTON_SIZE};
      height: ${BUTTON_SIZE};
      border-radius: ${BUTTON_SIZE};
      position: fixed;
      bottom: ${BOTTOM_DISTANCE};
      right: ${RIGHT_DISTANCE};
      z-index: 100000;
      background-size: ${BUTTON_SIZE} ${BUTTON_SIZE};
      background-color: black;
      border: 0px;
      cursor: pointer;
  `;
  sparaButton.innerHTML = chatSVG;
  document.body.appendChild(sparaButton);

  sparaButton.addEventListener("click", toggleChat);

  function toggleChat() {
    const ifrm = document.getElementById("spara-chat");
    if (!ifrm) {
      const ifrm = document.createElement("iframe");
      ifrm.id = "spara-chat";
      ifrm.setAttribute("src", url);
      ifrm.style.cssText = `
              width: 390px;
              height: 600px;
              position: fixed;
              bottom: 75px;
              right: ${RIGHT_DISTANCE};
              z-index: 100000;
              background-color: white;
              display: block;
          `;
      document.body.appendChild(ifrm);
      sparaButton.innerHTML = downSVG;
      localStorage.setItem("sparaChatOpen", "true");
    } else {
      if (ifrm.style.display === "block") {
        ifrm.style.display = "none";
        sparaButton.innerHTML = chatSVG;
        localStorage.setItem("sparaChatOpen", "false");
      } else {
        ifrm.style.display = "block";
        localStorage.setItem("sparaChatOpen", "true");
        sparaButton.innerHTML = downSVG;
      }
    }
  }
  const chatOpen = localStorage.getItem("sparaChatOpen");
  if (chatOpen === "true") {
    toggleChat();
  }
}
addSparaToPage("https://spara-flask-dev-32ab36466dad.herokuapp.com/sign-in");
