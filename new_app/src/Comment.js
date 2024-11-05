import React from "react";
import message from './message.png';
import trash from './trash.png';

class Comment extends React.Component{

    render() {
        return (
            <table className="comment">
                <tbody>
                    <tr>
                        <td className="photo">
                            <img src={message}/>
                        </td>
                        <td className="message">
                           {this.props.message}
                        </td>
                        <td className="delete">
                            <img src={trash}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Comment;