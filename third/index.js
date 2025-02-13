const login = document.querySelector("#login");

const modal = document.querySelector("div.login-modal");

login.onclick = () => {
  alert("로그인모달 나와랑");

  modal.style.display = "block";
};

const closeBtn = document.querySelector(".login-modal > button");
closeBtn.onclick = () => {
  modal.style.display = "none";
};
