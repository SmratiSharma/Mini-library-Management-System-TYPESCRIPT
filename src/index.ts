import { Library } from "./library/Library";
import { Book } from "./interfaces/Book";
import { Member } from "./interfaces/Member";
import { Genre } from "./enums/Genre";
import booksData from "./data/books.json";
import membersData from "./data/members.json";


const library = new Library();

const books: Book[] = booksData.map((b) => ({
    ...b,
    genre: Genre[b.genre.replace("-","").replace(" ", "") as keyof typeof Genre],
}));


const members : Member[] = membersData;

books.forEach((book) => library.addBook(book));

members.forEach((member) => library.registerMemeber(member));


console.log("-----------------------------All Books------------------------------------")


console.log("All Books:", JSON.stringify(library.getAllBooks(), null, 2));


console.log("\n\n-----------------------------All Members------------------------------------")

console.log("All Members:", JSON.stringify(library.getAllMembers(), null, 2));


console.log("\n\n-----------------------------Finding Book and Member------------------------------------")
console.log("Finding book by id 2 " + JSON.stringify(library.findBook(2)));

console.log("Finding member by id 3 " + JSON.stringify(library.memberDetails(3)));

console.log("\n\n-----------------------------Asscoicating Book 2 with Member 1 ------------------------------------")
console.log(library.associateMemberToBook(2,1));

console.log("\n\n-----------------------------Adding new Book and Member------------------------------------")
library.registerMemeber({id:4, name:"Harsh", email:"harsh@gmail.com",books:[]});

library.addBook({id:5, name:"Gunaho Ka Devta", author:"Dharamvir Bharti",genre:Genre.Fiction});


console.log("All Books after updation:", JSON.stringify(library.getAllBooks(), null, 2));
console.log("All Members after updation:", JSON.stringify(library.getAllMembers(), null, 2));

