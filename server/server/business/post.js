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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.deletePost = exports.createPost = void 0;
const post_1 = require("../models/post");
const db_connect_1 = require("../tools/db-connect");
function createPost(text, poster) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = new post_1.Post();
        post.date = new Date();
        post.text = text;
        post.poster = poster;
        yield db_connect_1.AppDataSource.manager.save(post);
        return post;
    });
}
exports.createPost = createPost;
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const postRepository = db_connect_1.AppDataSource.getRepository(post_1.Post);
        yield postRepository.createQueryBuilder("post").delete().where("id = :id", { id: id }).execute();
    });
}
exports.deletePost = deletePost;
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const postRepository = db_connect_1.AppDataSource.getRepository(post_1.Post);
        return yield postRepository.createQueryBuilder("post").orderBy("post.date", "DESC").getMany();
    });
}
exports.getPosts = getPosts;
//# sourceMappingURL=post.js.map