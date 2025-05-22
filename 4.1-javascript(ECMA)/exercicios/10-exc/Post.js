const Author = require("./Author");
const Comment = require("./Comment");

class Post {
    constructor(authorsName) {
        this.author = new Author(authorsName);
        this.comments = [];
    }
    saveComment(comment) {
        this.comments.push(new Comment(comment));
    }
}

module.exports = Post;