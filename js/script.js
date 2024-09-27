// 리스트 추가하기
const getAddListBtn = document.querySelector(".add_list");
const getMain = document.querySelector(".main");

getAddListBtn.addEventListener("click", () => {
  getMain.classList.toggle("open_add_box");
});
