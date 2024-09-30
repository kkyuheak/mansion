// 데이터
let data = [
  {
    title: "To Do",
    cards: [
      {
        id: 1,
        name: "css 공부하기",
      },
      {
        id: 2,
        name: "html 공부하기",
      },
    ],
  },
  {
    title: "In Progress",
    cards: [
      {
        id: 1,
        name: "js 공부하기",
      },
      {
        id: 2,
        name: "html 공부하기",
      },
    ],
  },
  {
    title: "Completed",
    cards: [],
  },
];

localStorage.setItem("data", JSON.stringify(data));

const getData = JSON.parse(localStorage.getItem("data"));

// 리스트 추가하기
const getMainLists = document.querySelector(".main_lists");

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

// 리스트 제목 submit 함수
getBox.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(getListTitle.value);

  if (getListTitle.value !== "") {
    getMainLists.insertAdjacentHTML(
      "beforeend",
      `<div class="main_box">
          <h3>${getListTitle.value}</h3>
          <ul class="box_lists"></ul>
          <div class="add_card">+ 카드 추가하기</div>
        </div>`
    );
    data.push({
      title: `${getListTitle.value}`,
      cards: [],
    });
    localStorage.setItem("data", JSON.stringify(data));

    // data.push({
    //   title: `${getListTitle.value}`,
    //   cards: [],
    // });

    console.log(data);
  }

  getListTitle.value = "";
  getBox.classList.remove("open_add_box");

  // window.location.reload();
});

// 리스트안에 카드 추가하기
const getAddCardBtn = document.querySelectorAll(".add_card");
const getCardBox = document.querySelector(".add_card_box");
const getCardBoxItem = getCardBox.querySelector(".add_card_box_item");
const getMainBox = getMainLists.querySelectorAll(".main_box");

const getCardTitle = document.getElementById("add_card_title");

let cardIndex = 0;

// getAddCardBtn.forEach((item, index) => {
//   item.addEventListener("click", (e) => {
//     e.stopPropagation();
//     getCardBox.classList.toggle("open_add_box");
//     console.log(index);
//     cardIndex = index;
//   });
// });

// 이벤트 위임
getMainLists.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("add_card")) {
    e.stopPropagation();
    getCardBox.classList.toggle("open_add_box");

    cardIndex = Array.from(getMainLists.children).indexOf(
      e.target.closest(".main_box")
    );
    console.log(cardIndex);
  }
});

getCardBoxItem.addEventListener("click", (e) => {
  e.stopPropagation();
});

getCardBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const lists = getMainBox[cardIndex].querySelector(".box_lists");

  lists.insertAdjacentHTML(
    "beforeend",
    `<li class="card">${getCardTitle.value}</li>`
  );

  getCardTitle.value = "";
  getCardBox.classList.remove("open_add_box");
});

window.addEventListener("click", () => {
  getBox.classList.remove("open_add_box");
  getCardBox.classList.remove("open_add_box");
});
