const countries = [
    { name: "Japan", capital: "Tokyo", inhabitants: 126300000, flag: "https://flagcdn.com/jp.svg", funFact: "Japan is home to over 6,800 islands." },
    { name: "Canada", capital: "Ottawa", inhabitants: 38000000, flag: "https://flagcdn.com/ca.svg", funFact: "Canada has the longest coastline in the world." },
    { name: "Brazil", capital: "Brasília", inhabitants: 214000000, flag: "https://flagcdn.com/br.svg", funFact: "Brazil is the only country in South America that speaks Portuguese." },
    { name: "Australia", capital: "Canberra", inhabitants: 26000000, flag: "https://flagcdn.com/au.svg", funFact: "Australia has more kangaroos than people." },
    { name: "Germany", capital: "Berlin", inhabitants: 83000000, flag: "https://flagcdn.com/de.svg", funFact: "Germany is home to over 1,500 varieties of beer." },
    { name: "India", capital: "New Delhi", inhabitants: 1400000000, flag: "https://flagcdn.com/in.svg", funFact: "India is the world's largest democracy." },
    { name: "South Africa", capital: "Pretoria", inhabitants: 60000000, flag: "https://flagcdn.com/za.svg", funFact: "South Africa has 11 official languages." },
    { name: "Italy", capital: "Rome", inhabitants: 59000000, flag: "https://flagcdn.com/it.svg", funFact: "Rome is home to the smallest country in the world, Vatican City." },
    { name: "USA", capital: "Washington, D.C.", inhabitants: 331000000, flag: "https://flagcdn.com/us.svg", funFact: "The U.S. has the highest number of immigrants in the world." },
    { name: "France", capital: "Paris", inhabitants: 67000000, flag: "https://flagcdn.com/fr.svg", funFact: "France is the most visited country in the world." }
  ];

  let out = document.getElementById("content");

  countries.map(nation => displaynation(nation))
  function displaynation(nation) {
    out.innerHTML += `
        <div class="nation">
            <img src="${nation.flag}">
            <h1>${nation.name}</h1>
            <h3>Capital: ${nation.capital}</h3>
            <h3>Population: ${nation.inhabitants}</h3>
            <p>"${nation.funFact}"</p>
        </div>`;
  }