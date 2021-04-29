const weight = document.getElementById("weight");
const output = document.getElementById("output");
const grams = document.getElementById("grams");
const tonne = document.getElementById("tonne");
const pound = document.getElementById("pound");
const miligrams = document.getElementById("miligrams");
const microgram = document.getElementById("microgram");
const select = document.getElementById("select");

output.style.display = "none";
weight.addEventListener("input", e => {
  if (e.target.value === "") {
    output.style.display = "none";
  } else {
    output.style.display = "block";
    let val = e.target.value;
    tonne.innerHTML = `Tonne : ${(val * 0.001).toFixed(3)}`;
    grams.innerHTML = `Grams : ${val * 1000}`;
    miligrams.innerHTML = `Mili Grams : ${val * 1e6}`;
    microgram.innerHTML = `Micro Grams : ${val * 1e9}`;
    pound.innerHTML = `Pound : ${(val * 2.20462).toFixed(3)}`;
  }
});
console.log(weight.value);
