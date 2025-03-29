let img1 = document.querySelector("#one img");
let img2 = document.querySelector("#two img");
console.log(img1.src);

document.querySelector("#btn").addEventListener("click", function () {
  let temp = img1.src;
  img1.src = img2.src;
  img2.src = temp;
});
