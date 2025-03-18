const library = [
  {
    author: "King",
    books: [
      {
        id: 1,
        name: "IT",
        year: 1992,
        genre: "fantasy",
        length: 500,
        rating: 2,
      },
      {
        id: 2,
        name: "Salems",
        year: 1992,
        genre: "fantasy",
        length: 500,
        rating: 5,
      },
      {
        id: 3,
        name: "Carrie",
        year: 1994,
        genre: "fantasy",
        length: 544,
        rating: 3,
      },
      {
        id: 4,
        name: "Misery",
        year: 1993,
        genre: "fantasy",
        length: 500,
        rating: 4,
      },
      {
        id: 5,
        name: "The stand",
        year: 1991,
        genre: "fantasy",
        length: 500,
        rating: 6,
      },
    ],
  },
  {
    author: "M TWEN",
    books: [
      {
        id: 1,
        name: "The Adventures of Tom Sawyer",
        year: 1876,
        genre: "Adventure",
        length: 521,
        rating: 2,
      },
      {
        id: 2,
        name: "The Prince and the Pauper",
        year: 1881,
        genre: "Historical Adventure",
        length: 123,
        rating: 5,
      },
      {
        id: 3,
        name: "Adventures of Huckleberry Finn",
        year: 1884,
        genre: "Adventure, Satire",
        length: 5121,
        rating: 2,
      },

      {
        id: 4,
        name: "A Connecticut Yankee in King Arthurs Court",
        year: 1889,
        genre: "Fantasy Satire",
        length: 5323,
        rating: 4,
      },
      {
        id: 5,
        name: "The Mysterious Stranger",
        year: 1916,
        genre: "Philosophical Fiction",
        length: 1323,
        rating: 3,
      },
    ],
  },
  {
    author: "Pushkin",
    books: [
      {
        id: 1,
        name: "Ruslan and Ludmila",
        year: 1820,
        genre: "Poem, Fantasy",
        length: 762,
        rating: 1,
      },
      {
        id: 2,
        name: "Eugene Onegin",
        year: 1833,
        genre: "Novel in Verse",
        length: 653,
        rating: 2,
      },
      {
        id: 3,
        name: "The Captains Daughter",
        year: 1836,
        genre: "Historical Novella",
        length: 541,
        rating: 4,
      },
      {
        id: 4,
        name: "Boris Godunov",
        year: 1825,
        genre: "Historical Drama",
        length: 312,
        rating: 3,
      },
      {
        id: 5,
        name: "The Queen of Spades",
        year: 1834,
        genre: "Mystical Novella",
        length: null,
        rating: 5,
      },
    ],
  },
];
function returnNames(smth) {
  return smth.map((item) => item.books.map((book) => book.name)).flat();
}
//a. Выведите в console названия всех книг.
// let res = returnNames(library);
// console.log(res);
// Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
function returnNames(smth) {
  return smth.map((item) => ({
    author: item.author,
    book: item.books
      .filter(
        (slot) =>
          slot.rating === Math.max(...item.books.map((lot) => lot.rating))
      )
      .map((lot) => lot.name),
  }));
}
let res = returnNames(library);
console.log(res);
function returnNames(smth) {
  return smth.map((item) => ({
    book: item.books.map((lot) =>({
        name:lot.name,
        date:lot.date
    })) 
  }
}
let res = returnNames(library);
console.log(res);
let arr=[]