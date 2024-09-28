// 리스트 추가하기
const main = document.querySelector(".main");

const getAddListBtn = document.querySelector(".add_list");
const getBox = document.querySelector(".add_list_box");
const getBoxItem = getBox.querySelector(".add_list_box_item");
const getListTitle = document.getElementById("add_list_title");

getAddListBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  getBox.classList.toggle("open_add_box");
});

getBoxItem.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  getBox.classList.remove("open_add_box");
});

getBox.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(getListTitle.value);

  main.insertAdjacentHTML(
    "beforeend",
    `<div class="main_box">
        <h3>${getListTitle.value}</h3>
        <div class="add_card">+ 카드 추가하기</div>
      </div>`
  );
  getListTitle.value = "";
  getBox.classList.remove("open_add_box");
});
