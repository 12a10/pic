// Post.js
const {Entity, PrimaryGeneratedColumn, Column, ManyToOne} = require("typeorm");
const User = require("./User");

@Entity()
class Post {
    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("text")
    title = "";

    @Column("text")
    content = "";

    @ManyToOne(type => User, user => user.posts)
    user = undefined;
}

module.exports = Post;