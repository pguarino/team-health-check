import React, {useState} from 'react';
import './CommentBox.scss'

export function CommentBox(props) {

    var [state, setState] = useState("")

    return (
        <div>
            <div>Comments</div>
            <input
                className="comment-box"
                type="textarea"
                cols="40"
                rows="3"
                value={state.value}
                onChange={setState}
            />
        </div>
    )
}