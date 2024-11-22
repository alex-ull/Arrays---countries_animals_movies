const movies = [
    { title: "Inception", actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], grossIncome: "$829.9M", releaseYear: 2010, genre: "Sci-Fi" },
    { title: "The Dark Knight", actors: ["Christian Bale", "Heath Ledger"], grossIncome: "$1.005B", releaseYear: 2008, genre: "Action" },
    { title: "Titanic", actors: ["Leonardo DiCaprio", "Kate Winslet"], grossIncome: "$2.195B", releaseYear: 1997, genre: "Romance" },
    { title: "Avatar", actors: ["Sam Worthington", "Zoe Saldana"], grossIncome: "$2.922B", releaseYear: 2009, genre: "Sci-Fi" },
    { title: "The Lion King", actors: ["Matthew Broderick", "Jeremy Irons"], grossIncome: "$968.5M", releaseYear: 1994, genre: "Animation" },
    { title: "Forrest Gump", actors: ["Tom Hanks", "Robin Wright"], grossIncome: "$678.2M", releaseYear: 1994, genre: "Drama" },
    { title: "The Avengers", actors: ["Robert Downey Jr.", "Chris Evans"], grossIncome: "$1.519B", releaseYear: 2012, genre: "Action" },
    { title: "Jurassic Park", actors: ["Sam Neill", "Laura Dern"], grossIncome: "$1.046B", releaseYear: 1993, genre: "Adventure" },
    { title: "Frozen", actors: ["Kristen Bell", "Idina Menzel"], grossIncome: "$1.282B", releaseYear: 2013, genre: "Animation" },
    { title: "The Godfather", actors: ["Marlon Brando", "Al Pacino"], grossIncome: "$250.1M", releaseYear: 1972, genre: "Crime" }
  ];

  let out = document.getElementById("content");

  movies.map(film => displayfilm(film))
  function displayfilm(film) {
    out.innerHTML += `
        <div class="film">
            <h1>${film.title}</h1>
            <h3>Year of release: ${film.releaseYear}</h3>
            <h3>Genre: ${film.genre}</h3>
            <h3>Income: ${film.grossIncome}</h3>
            <h3>Starring:</h3>
            <h5>Lead: ${film.actors[0]}</h5>
            <h5>Supporting: ${film.actors[1]}</h5>
        </div>`;
  }

function setGenre() {
    out.innerHTML = "";
    let sel = document.getElementById("sortgenre").value;
    if (sel == "") {
        movies.map(film => displayfilm(film));
    }
    else {
    let designated = movies.filter((film) => {return film.genre == sel});
    designated.map(film => displayfilm(film));
    }
}