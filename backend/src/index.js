// server.js
const express = require('express');
const { getRepository } = require('typeorm');
const {User, Post} = require('./entity/index.js');

const app = express();
app.use(express.json());

// Create
app.post('/users', async (req, res) => {
    const userRepository = getRepository(User);
    const user = userRepository.create(req.body);
    await userRepository.save(user);
    res.send(user);
});

// Read
app.get('/users', async (req, res) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
});

// Update
app.put('/users/:id', async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (user) {
        userRepository.merge(user, req.body);
        const result = await userRepository.save(user);
        res.send(result);
    } else {
        res.status(404).send({ message: "User not found" });
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (user) {
        await userRepository.delete(user);
        res.status(204).send();
    } else {
        res.status(404).send({ message: "User not found" });
    }
});




// Create
app.post('/posts', async (req, res) => {
    const postRepository = getRepository(Post);
    const post = postRepository.create(req.body);
    await postRepository.save(post);
    res.send(post);
});

// Read
app.get('/posts', async (req, res) => {
    const postRepository = getRepository(Post);
    const posts = await postRepository.find();
    res.send(posts);
});

// Update
app.put('/posts/:id', async (req, res) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(req.params.id);
    if (post) {
        postRepository.merge(post, req.body);
        const result = await postRepository.save(post);
        res.send(result);
    } else {
        res.status(404).send({ message: "Post not found" });
    }
});

// Delete
app.delete('/posts/:id', async (req, res) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(req.params.id);
    if (post) {
        await postRepository.delete(post);
        res.status(204).send();
    } else {
        res.status(404).send({ message: "Post not found" });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));