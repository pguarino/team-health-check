import React from 'react';
import './SentimentButtons.scss'

export function SentimentButtons() {

    return (
        <div class="sentiment-container">
            <button className="sentiment">
                <img src="./images/red.png" title="Red"  onClick={() => console.log("red clicked")}/>
            </button>
            <button className="sentiment">
                <img src="./images/orange.png" title="Orange"  onClick={() =>console.log("orange clicked")}/>
            </button>
            <button className="sentiment">
                <img src="./images/yellow.png" title="Yellow"  onClick={() => console.log("yellow clicked")}/>
            </button>
            <button className="sentiment">
                <img src="./images/light-green.png" title="Light Green"  onClick={() => console.log("light-green clicked")}/>
            </button>
            <button className="sentiment">
                <img src="./images/green.png" title="Green"  onClick={() => console.log("green clicked")}/>
            </button>
        </div>

    )
}