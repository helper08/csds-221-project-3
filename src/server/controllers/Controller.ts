import express from "express";
import STATIC_PATH from "../tools/static-path";
import path from "path";

const router = express.Router();

router.get("*", function (req, res) {
    let file = path.join(STATIC_PATH, 'index.html');
    res.sendFile(file);
})

export default router;