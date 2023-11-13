const screen = document.querySelector(".item1");
// const un = document.querySelector(".item10");
// un.addEventListener("click", function () {
//   console.log(un.innerText);
// });
// const deux = document.querySelector(".item11");
// deux.addEventListener("click", function () {
//   console.log(deux.innerText);
// });
// const trois = document.querySelector(".item12");
// trois.addEventListener("click", function () {
//   console.log(trois.innerText);
// });
// const qatre = document.querySelector(".item13");
// qatre.addEventListener("click", function () {
//   console.log(qatre.innerText);
// });
// const cinque = document.querySelector(".item14");
// cinque.addEventListener("click", function () {
//   console.log(cinque.innerText);
// });
// const sise = document.querySelector(".item15");
// sise.addEventListener("click", function () {
//   console.log(sise.innerText);
// });
// const sate = document.querySelector(".item16");
// sate.addEventListener("click", function () {
//   console.log(sate.innerText);
// });
// const wite = document.querySelector(".item17");
// wite.addEventListener("click", function () {
//   console.log(wite.innerText);
// });
// const noufe = document.querySelector(".item18");
// noufe.addEventListener("click", function () {
//   console.log(noufe.innerText);
// });
// const zero = document.querySelector(".item9");
// zero.addEventListener("click", function () {
//   console.log(zero.innerText);
// });
const egale = document.querySelector(".item8");
egale.addEventListener("click", function () {
  console.log(egale.innerText);
});
const plus = document.querySelector(".item7");
plus.addEventListener("click", function () {
  console.log(plus.innerText);
});
const moin = document.querySelector(".item6");
moin.addEventListener("click", function () {
  console.log(moin.innerText);
});
const x = document.querySelector(".item5");
x.addEventListener("click", function () {
  console.log(x.innerText);
});
const sur = document.querySelector(".item4");
sur.addEventListener("click", function () {
  console.log(sur.innerText);
});
const d = document.querySelector(".item3");
d.addEventListener("click", function () {
  console.log(d.innerText);
});
const c = document.querySelector(".item2");
c.addEventListener("click", function () {
  console.log(c.innerText);
});
const btns = document.querySelectorAll("div[type]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const element = btns[i].innerText;
    console.log(element);
    screen.append(element);
  });
  const clear = document.querySelector(".item2");
  clear.addEventListener("click", function () {
    screen.innerText = "";
  });
  const delet = document.querySelector(".item3");
  delet.addEventListener("click", function () {
    screen.innerText = -1;
  });
}
