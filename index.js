let count = 0;

function increaseCounter() {
  count++;
  document.getElementById("count-el").innerText = count;
}

function decreaseCounter() {
  if (count > 0) {
    count--;
    document.getElementById("count-el").innerText = count;
  }
}

function saveCounter() {
  let entries = 0;
  entries = count + " - ";

  document.getElementById("last-entries").textContent += entries;

  count = 0;

  document.getElementById("count-el").innerText = count;
}
