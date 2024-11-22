const animals = [
    { name: "Elephant", habitat: "Savannah", details: { diet: "Herbivore", lifespan: "60-70 years", weight: "6000 kg" } },
    { name: "Penguin", habitat: "Antarctica", details: { diet: "Carnivore", lifespan: "15-20 years", weight: "30 kg" } },
    { name: "Tiger", habitat: "Forests", details: { diet: "Carnivore", lifespan: "10-15 years", weight: "220 kg" } },
    { name: "Kangaroo", habitat: "Australia", details: { diet: "Herbivore", lifespan: "6-8 years", weight: "85 kg" } },
    { name: "Dolphin", habitat: "Ocean", details: { diet: "Carnivore", lifespan: "40-50 years", weight: "300 kg" } },
    { name: "Panda", habitat: "Mountains", details: { diet: "Herbivore", lifespan: "20 years", weight: "100 kg" } },
    { name: "Polar Bear", habitat: "Arctic", details: { diet: "Carnivore", lifespan: "25-30 years", weight: "450 kg" } },
    { name: "Koala", habitat: "Australia", details: { diet: "Herbivore", lifespan: "10-15 years", weight: "15 kg" } },
    { name: "Cheetah", habitat: "Grasslands", details: { diet: "Carnivore", lifespan: "10-12 years", weight: "60 kg" } },
    { name: "Owl", habitat: "Forests", details: { diet: "Carnivore", lifespan: "10 years", weight: "1.5 kg" } }
  ];

  let out = document.getElementById("content");

  animals.map(fauna => displayfauna(fauna))
  function displayfauna(fauna) {
    out.innerHTML += `
        <div class="fauna">
            <h1>${fauna.name}</h1>
            <h3>Natural habitat: ${fauna.habitat}</h3>
            <h3>Details:</h3>
            <h5>Diet: ${fauna.details.diet}</h5>
            <h5>Lifespan: ${fauna.details.lifespan}</h5>
            <h5>Avg. weight: ${fauna.details.weight}</h5>
        </div>`;
  }

function setHabit() {
    out.innerHTML = "";
    let sel = document.getElementById("sortHabitat").value;
    if (sel == "") {
        animals.map(fauna => displayfauna(fauna));
    }
    else {
    let designated = animals.filter((fauna) => {return fauna.habitat == sel});
    designated.map(fauna => displayfauna(fauna));
    }
}

function setDiet() {
    out.innerHTML = "";
    let sel = document.getElementById("sortDiet").value;
    if (sel == "") {
        animals.map(fauna => displayfauna(fauna));
    }
    else {
    let designated = animals.filter((fauna) => {return fauna.details.diet == sel});
    designated.map(fauna => displayfauna(fauna));
    }
}