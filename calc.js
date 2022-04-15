document.querySelector(".calculate").onclick = calcClick;
function calcClick() {
  let xsquare = document.querySelector(".xsquare").value;
  let x = document.querySelector(".x").value;
  let free = document.querySelector(".free").value;
  let disc = Number(x) * Number(x) - 4 * Number(xsquare) * Number(free);
  if (Number(xsquare) === 0) {
    alert("First coefficient is zero!");
    return;
  }
  if (disc > 0) {
    let x1 = (-Number(x) + Math.sqrt(disc)) / (2 * Number(xsquare));
    let x2 = (-Number(x) - Math.sqrt(disc)) / (2 * Number(xsquare));
    document.querySelector(".output").innerHTML =
      x1 +
      " - these is first equation" +
      "<br>" +
      x2 +
      " - these is second equation";
    return;
  }
  if (disc === 0) {
    let x3 = -Number(x) / (2 * Number(xsquare));
    document.querySelector(".output").innerHTML =
      x3 + " - the only root of the equation";
    return;
  }
  if (disc < 0) {
    document.querySelector(".output").innerHTML =
      "the roots of the equation are missing";
    return;
  }
}

document.querySelector(".reset").onclick = reset;
function reset() {
  document.querySelector(".xsquare").value = "";
  document.querySelector(".x").value = "";
  document.querySelector(".free").value = "";
  document.querySelector(".output").innerHTML = "";
}
