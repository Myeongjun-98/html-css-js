const form = document.querySelector("#signUp");
const userId = document.getElementById("userId");
const password = document.getElementById("password");
const birthDate = document.getElementById("birthDate");
const confirmPassword = document.getElementById("confirmPassword");
const sex = document.getElementById("sex");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userId.value.length === 0) {
    alert("아이디를 입력해주세요");
    return userId.focus();
  }
  if (password.value.length === 0) {
    alert("비밀번호를 입력해주세요");
    return password.focus();
  }
  if (confirmPassword.value.length === 0) {
    alert("비밀번호 확인란에 비밀번호를 입력해주세요");
    return confirmPassword.focus();
  }
  if (confirmPassword.value !== password.value) {
    alert("비밀번호를 확인해주세요.");
    return confirmPassword.focus();
  }
  if (birthDate.value.length === 0) {
    alert("생년월일을 입력해주세요");
    return birthDate.focus();
  }
  if (birthDate.value.length !== 8) {
    alert("생년월일을 확인해주세요");
    return birthDate.focus();
  }

  if (sex.value !== "남성" && sex.value !== "여성") {
    alert("성별을 선택해주세요");
    return sex.showPicker();
  }
  const message = `${userId.value}님, 회원가입 하시겠습니까?`;

  if (confirm(message)) {
    alert("가입을 축하드립니다.");
  } else {
    alert("가입하면 좋아요;; 다시 시도하세요.");
  }
});
