const worker = new Worker("worker.js");

worker.onmessage = function (event) {
  console.log(event.data);
};

const bgColor = document.getElementById("cbc");

bgColor.addEventListener("click", () => {
  if (document.body.style.backgroundColor != "red") {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "green";
  }
});

const total = document.getElementById("ct");

total.addEventListener("click", () => {
  worker.postMessage("Abe sun lode");
});
