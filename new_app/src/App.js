import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";


class App extends React.Component{
  state = {
    messages: [
      'React seems like a really cool library',
      'I love using components in React',
      'Makes development so easy',
      'It was hard to follow at first but now I love it!'
    ]
  }
  render (){
    return (
        <div>
          <CommentList messages={this.state.messages}/>
          <br/>
          <CommentBox/>
        </div>
    );
  }
}
export default App;
