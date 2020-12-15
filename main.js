const elem = document.getElementById("myText");
const infoLine = document.getElementById("demo");

function showTextSize() {
  let elVal = elem.value;
  let content = "Size of text is: " + elVal.length + " symbol";
  infoLine.innerHTML = content;
  console.log(content);
}
