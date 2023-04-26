import express from "express";
import { getPosts, createPost, deletePost } from "../business/post";
import path from "path";
import STATIC_PATH from "../tools/static-path";

const router = express.Router();

router.get("/getall", async function (req, res) {
  res.send(await getPosts());
});

router.post("/add-post", async function (req, res) {
    let text: string;
    let poster: string;

    try {
        text = req.body.postText;
        poster = req.body.postPoster;
    } catch {
        return res.status(400).json({ message: "Could not create post, request body invalid"})
    }

    return await createPost(text, poster)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Failted to create post" }));
})

router.delete("/delete-post", async function (req, res) {
    try {
        console.log(req.body.id);
        await deletePost(req.body.id);
        res.status(200).json({ message: "Deleted Post" })
    } catch {
        return res.status(400).json({ message: "Could not delete post" })
    }

})

export default router;