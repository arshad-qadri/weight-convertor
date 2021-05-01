const weight = document.getElementById("weight");
const output = document.getElementById("output");
const grams = document.getElementById("grams");
const tonne = document.getElementById("tonne");
const pound = document.getElementById("pound");
const kilogram = document.getElementById("kilogram");
const miligrams = document.getElementById("miligrams");
const microgram = document.getElementById("microgram");
let val = "";

const getslectedValue = () => {
  const slectedValue = document.getElementById("list").value;
  pound.style.display = "block";
  microgram.style.display = "block";
  miligrams.style.display = "block";
  grams.style.display = "block";
  tonne.style.display = "block";
  kilogram.style.display = "block";

  // ----------------------kilogram--------------------
  if (slectedValue === "KiloGram") {
    weight.placeholder = "Enter Kilo Gram";
    kilogram.style.display = "none";

    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      tonne.innerHTML = `Tonne : ${(val * 0.001).toFixed(3)}`;
      grams.innerHTML = `Gram : ${val * 1000}`;
      miligrams.innerHTML = `Miligram : ${val * 1e6}`;
      microgram.innerHTML = `Microgram : ${val * 1e9}`;
      pound.innerHTML = `Pound : ${(val * 2.20462).toFixed(3)}`;
    }
  }
  // -----------tonne-------------------
  else if (slectedValue === "Tonne") {
    weight.placeholder = "Enter Tonne";
    tonne.style.display = "none";
    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      kilogram.innerHTML = `Kilogram : ${(val * 1000).toFixed(3)}`;
      grams.innerHTML = `Grams : ${val * 1e6}`;
      miligrams.innerHTML = `Miligram : ${val * 1e9}`;
      microgram.innerHTML = `Microgram : ${val * 1e12}`;
      pound.innerHTML = `Pound : ${(val * 2204.62).toFixed(3)}`;
    }
  }
  // ---------------------gram-----------------------
  else if (slectedValue === "Gram") {
    weight.placeholder = "Enter Gram";
    grams.style.display = "none";
    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      kilogram.innerHTML = `Kilogram : ${(val * 0.001).toFixed(3)}`;
      tonne.innerHTML = `Tonne : ${val * 1e-6}`;
      miligrams.innerHTML = `Miligram : ${val * 1000}`;
      microgram.innerHTML = `Microgram : ${val * 1e6}`;
      pound.innerHTML = `Pound : ${(val * 0.00220462).toFixed(3)}`;
    }
  }
  // ----------------miligram------------------
  else if (slectedValue === "MiliGram") {
    weight.placeholder = "Enter Mili Gram";
    miligrams.style.display = "none";
    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      kilogram.innerHTML = `Kilogram : ${val * 1e-6}`;
      tonne.innerHTML = `Tonne : ${val * 1e-9}`;
      grams.innerHTML = `Grams : ${val * 0.001}`;
      microgram.innerHTML = `Microgram : ${val * 1000}`;
      pound.innerHTML = `Pound : ${(val * 2.2046e-6).toFixed(3)}`;
    }
  }
  // --------------microgram-------------------
  else if (slectedValue === "MicroGram") {
    weight.placeholder = "Enter Micro Gram";
    microgram.style.display = "none";
    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      kilogram.innerHTML = `Kilogram : ${val * 1e-9}`;
      tonne.innerHTML = `Tonne : ${val * 1e-12}`;
      grams.innerHTML = `Gram : ${val * 1e-6}`;
      miligrams.innerHTML = `Miligram : ${val * 0.001}`;
      pound.innerHTML = `Pound : ${(val * 2.2046e-9).toFixed(3)}`;
    }
  }
  // -------------pound------------------------------
  else if (slectedValue === "Pound") {
    pound.style.display = "none";
    weight.placeholder = "Enter Pound";
    if (val === "") {
      output.style.display = "none";
    } else {
      output.style.display = "block";
      kilogram.innerHTML = `Kilogram : ${val * 0.453592}`;
      tonne.innerHTML = `Tonne : ${val * 0.000453592}`;
      grams.innerHTML = `Gram : ${val * 453.592}`;
      miligrams.innerHTML = `Miligram : ${val * 453592}`;
      microgram.innerHTML = `Microgram : ${(val * 4.536e8).toFixed(3)}`;
    }
  }
};

weight.addEventListener("input", e => {
  val = e.target.value;
  getslectedValue();
});

getslectedValue();
