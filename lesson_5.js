for (let i = 0; i < catalog.length; i++) {
  catalog[i]["id"] = i + 100;
}

function f1() {
  document.querySelector("#byname").innerHTML = "";
  let name1 = document.querySelector("#name").value;
  const catalog1 = catalog.filter((x) => x.title.includes(name1));
  for (let i = 0; i < catalog1.length; i++) {
    document.querySelector("#byname").innerHTML +=
      i + 1 + ". " + catalog1[i].title + "</br>";
  }
}

function f2() {
  let countries = catalog.map((item) => item.country);
  countries = countries.filter(
    (item, index) => !countries.includes(item, index + 1)
  );
  countries = countries.sort();
  countries = countries.map((item) => "<option>" + item + "</option>");
  document.getElementById("sel").innerHTML = countries;
}
f2();
function showDiskByCountry(event) {
  document.querySelector("#show").innerHTML = "";
  const catalog2 = catalog.filter(
    (item) => item.country === event.target.value
  );
  for (let i = 0; i < catalog2.length; i++) {
    document.querySelector("#show").innerHTML += catalog2[i].title + "</br>";
  }
  f4(catalog2);
}
function f3() {
  document.querySelector("#show").innerHTML = "";
  let f = document.getElementById("from").value;
  let t = document.getElementById("to").value;
  let dates = catalog.find((item) => item.year >= f && item.year <= t);
  document.querySelector("#show").innerHTML = dates.title;
}
function f4(arr) {
  document.querySelector("#show").innerHTML = "";
  const t = arr.map(
    (item) => `<table><tr>
  <th>${item.title}</th>
  <td>${item.company}</td>
  <td>${item.country}</td>
  <td>${item.id}</td>
  <td>${item.price}</td>
  <td>${item.artist}</td>
  <td>${item.year}</td></tr></table>`
  );
  document.querySelector("#show").innerHTML += t.join();
}
function f5() {
  let title = document.getElementById("title").value;
  let company = document.getElementById("company").value;
  let artista = document.getElementById("artist").value;
  let country = document.getElementById("country").value;
  let year = document.getElementById("year").value;
  let price = document.getElementById("price").value;
  const id = catalog.length + 100;
  catalog.push({ title, company, artist, country, year, price, id });
  console.log(catalog);
}
function f6() {
  console.log(catalog.length);
  let x = document.getElementById("index").value;
  let y = catalog.findIndex((item) => item.id == x);
  catalog.splice(y, 1);
  console.log(catalog.length);
}
//תרגיל 2
function f6() {
  const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
  const nameCounts = names.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return cur;
  }, {});
  console.log(JSON.stringify(nameCounts, null, 2));
  console.log(nameCounts);
}
f6();
function f7_1() {
  const letters = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
  const uniqueLettersSet = new Set(letters);
  const uniqueLetters = [...uniqueLettersSet];
  console.log(uniqueLetters);
}
function f7() {
  const letters = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
  const uniqueLetters = letters.reduce((unique, letter) => {
    if (!unique.includes(letter)) {
      unique.push(letter);
    }
    return unique;
  }, []);
  console.log(uniqueLetters);
}
f7();
f7_1();
function f8() {
  const numbers = [-5, 25, -19, 0, 16, 0];
  const numbers_new = numbers.reduce((arr, x) => {
    if (x > 0) {
      arr.push(Math.sqrt(x));
    }
    return arr;
  }, []);
  console.log(numbers_new);
}
f8();
