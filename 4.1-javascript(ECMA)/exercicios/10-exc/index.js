const Author = require("./Author");

const sena = new Author("Matheus Sena");

const post = sena.createPost("Título", "Lorem ipsum docis...");

post.addComment("devmathsena", "Olá pessoal!")
post.addComment("droid98", "Eaiiii")

console.log(sena);
console.log(post);