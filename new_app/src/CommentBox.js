import React, { Component } from 'react';


class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.messageInputRef = React.createRef();
    }

    addComment = () => {
        if (this.props.addComment){
            this.props.addComment(this.messageInputRef.current.value);
            this.messageInputRef.current.value = '';

    } else{
        console.warn('addComment function is missing!');
    }
}

    render() {
        return (
            <div className="commentbox">
                <input ref={this.messageInputRef} className="input" />
                <button className="button"
                onClick={this.addComment}>
                    Post
                </button>
            </div>
        );
    }
}

export default CommentBox