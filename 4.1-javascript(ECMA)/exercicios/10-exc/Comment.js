class Comment {
    constructor(username, text){
        this.username = username;
        this.text = text;
        this.createdAt = new Date();
    }
}

module.exports = Comment;