import React from 'react';
import './TopicQuestion.scss'
export function TopicQuestion(props) {
    return(
        <div>
            <h3>{props.topic}</h3>
            <div class="float-container">
                <div class="float-child">
                    <div class="child-title">Green being:</div>
                    {props.goodExample}
                </div>
                <div class="float-child">{props.badExample}</div>
            </div>
        </div>
    )
}