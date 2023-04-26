import { Post } from "../models/post"
import { AppDataSource } from "../tools/db-connect"

export async function createPost(text: string, poster:string) {
    const post = new Post()
    post.date = new Date()
    post.text = text
    post.poster = poster

    await AppDataSource.manager.save(post)

    return post;
}

export async function deletePost(id: number) {
    const postRepository = AppDataSource.getRepository(Post)
    await postRepository.createQueryBuilder("post").delete().where("id = :id", {id: id}).execute();
}

export async function getPosts() {
    const postRepository = AppDataSource.getRepository(Post)
    return await postRepository.createQueryBuilder("post").orderBy("post.date", "DESC").getMany();
}