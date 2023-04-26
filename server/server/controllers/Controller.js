"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../business/post");
const router = express_1.default.Router();
router.get("/getall", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send(yield (0, post_1.getPosts)());
    });
});
router.post("/add-post", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let text;
        let poster;
        try {
            text = req.body.postText;
            poster = req.body.postPoster;
        }
        catch (_a) {
            return res.status(400).json({ message: "Could not create post, request body invalid" });
        }
        return yield (0, post_1.createPost)(text, poster)
            .then(data => res.status(200).json(data))
            .catch(() => res.status(500).json({ message: "Failted to create post" }));
    });
});
router.delete("/delete-post", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body.id);
            yield (0, post_1.deletePost)(req.body.id);
            res.status(200).json({ message: "Deleted Post" });
        }
        catch (_a) {
            return res.status(400).json({ message: "Could not delete post" });
        }
    });
});
exports.default = router;
//# sourceMappingURL=Controller.js.map