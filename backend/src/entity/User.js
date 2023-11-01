// User.js
const {Entity, PrimaryGeneratedColumn, Column, OneToMany} = require("typeorm");
const Post = require("./Post");

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id = undefined;

    @Column("text")
    username = "";

    @Column("text")
    password = ""; // Remember to hash passwords before storing!

    @OneToMany(type => Post, post => post.user)
    posts = undefined;
}

module.exports = User;