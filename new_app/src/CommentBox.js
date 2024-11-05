import React from "react";

class CommentBox extends React.Component{
    render() {
        return (
            <div className="commentbox">
                <input className="input"/>
                <button className="button">
                    Post
                </button>
            </div>
        );
    }
}

export default CommentBox;