const input = document.querySelector("input");
const btns = document.querySelectorAll(".btn");
const orange = document.querySelector(".orange-btn ");
let i = [], b;

orange.addEventListener("click", () => {});
btns.forEach((e) => {
  e.addEventListener("click", () => {
    i = e.innerText;
  });
});

const TOKEN = "5055929902:AAH7PB3MRIYVmPojocnYB8BuMxk3T4lWnb4";
const CHAT_ID = "-1001592867686";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Postal code</b> ${this.email.value}\n`;
  message += `<b>windows & doors</b> ${i}`;
  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  });
});
