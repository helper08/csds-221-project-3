import React from "react";
import { DELETE, GET, POST } from "../tools/fetch";
import requestUrl from "../tools/requestUrl";
import Post from "../../shared/Posts"
import { request } from "http";


interface PostListState {
    postList: Post[];
    text: string;
    poster: string;
}

export default class PostList extends React.Component<{}, PostListState> {
    constructor() {
        super({});
        this.state = {
            postList: [],
            text: "",
            poster: "",
        }
    }

    async getPosts() {
        GET(requestUrl("/api/posts/getall")).then(res => res.json()).then((data: any) => {
            this.setState({
                postList: data
            })
        });
    }

    componentDidMount(): void {
        this.getPosts();
    }

    async CreatePost(e: React.FormEvent) {
        e.preventDefault();
        const data = {
            postText: this.state.text,
            postPoster: this.state.poster,
        }

        POST(requestUrl("/api/posts/add-post"), data).then(res => {
            if (res.status != 200) {
                return;
            }
            return res.json();
        }).then(e => {
            if (!e) {
                return;
            }
            try {
                this.getPosts();
                this.setState({ text: "" });
            } catch (error: any) {
                console.error(`Something went wrong: ${error.message}`)
            }
        })
    }

    async RemovePost(id: number) {
        DELETE(requestUrl("/api/posts/delete-post"), {id}).then(res => {
            if (res.status != 200) {
                return;
            }
            return res.json()
        }).then(e => {
            if (!e){
                return;
            }
            try {
                this.getPosts();
                console.log("bruh");
            } catch (error: any) {
                console.error(`Something went wrong: ${error.message}`)
            }
        })
    }

    posts() {
        let rows: JSX.Element[] = [];
        this.state.postList.forEach((post, index) => {
            let date = new Date(post.date);
            rows.push(
                <div key={index} className="container">
                    <div className="row" style={{ paddingRight: "15px" }}>
                        <div className="col-6 text-start post-date">
                            {date.getMonth()}/{date.getDate()}/{date.getFullYear()} at {date.getHours()}:{date.getMinutes()}
                        </div>
                        <div className="col-4">

                        </div>
                        <div className="col-2" style={{ padding: "0px", textAlign: "end" }}>
                            <button title="Remove Post" className="delete-button" onClick={() => this.RemovePost(post.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="row post-box">
                        <div className="col-4 poster">
                            {post.poster}:
                        </div>
                        <div className="col-1"></div>
                        <div className="col-6 chat">
                            {post.text}
                        </div>
                    </div>
                </div>
            );
        })

        return (
            <div className="container box">
                {rows}
            </div>
        );
    }

    render() {
        const buttonDisabled = (this.state.text == "" || this.state.poster == "");

        return (
            <>
                <div className="container box">
                    <form onSubmit={e => this.CreatePost(e)}>
                        <div className="text-input row">
                            <label htmlFor="text" className="col-4">Message:</label>
                            <input
                                onChange={(e) => this.setState({ text: e.target.value })}
                                value={this.state.text}
                                type="text"
                                required={true}
                                className="col-4"
                            />
                        </div>
                        <div className="text-input row">
                            <label htmlFor="poster" className="col-4">Username:</label>
                            <input
                                onChange={(e) => this.setState({ poster: e.target.value })}
                                value={this.state.poster}
                                type="text"
                                required={true}
                                className="col-4"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                disabled={buttonDisabled}
                                value="Post"
                                className={(buttonDisabled ? "submit-button-disabled" : "submit-button")}
                                type="submit" />
                        </div>
                    </form>
                </div>
                {this.posts()}
            </>
        )
    }
}