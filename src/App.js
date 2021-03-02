import logo from './logo.svg';
import './App.css';
import {TopicQuestion} from "./components/TopicQuestion/TopicQuestion";
import {SentimentButtons} from "./components/SentimentButtons/SentimentButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*>*/}
        {/*    Learn React*/}
        {/*</a>*/}
          <TopicQuestion topic="Easy To Release" goodExample="Our code is easy to release." badExample="Our code is a nightmare to release."/>
          <SentimentButtons/>
    </header>


    </div>
  );
}

export default App;
