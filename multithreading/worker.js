self.onmessage = function (event) {
  console.log(event.data);
  self.postMessage("Hello from Worker");
};
