import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const App = function() {
    return <div className="card">
        <Avatar />
        <div className="data">
           <Intro />
           <SkillList />
        </div>
    </div>
}

const Avatar = function(){
   return  <img src="satya.jpg" className="avatar" alt="mypic"></img>
}

const Intro = function(){
    return <div className="data">
        <h1>Satya Medicherla</h1>
        <p>I am an accomplished professional in the blockchain space, holding an advanced computing degree from the Australian National University. Over the last 5 years, my work has spanned various facets of blockchain technology
        </p>
    </div>
}

const SkillList = function(){
    return <div className="skill-list">
      <Skill colourName="blue"  skillName="Ethereum" emoji="💪"/>
      <Skill colourName="red"  skillName="Solidity" emoji="🥊"/>
      <Skill colourName="yellow"  skillName="TypeScript" emoji="🔥"/>
      <Skill colourName="orange"  skillName="NodeJs" emoji="💪"/>
      <Skill colourName="green"  skillName="DEFI" emoji="🥊"/>
    </div>
}

const Skill = function(props){
    const style = { backgroundColor : props.colourName}
    return <div className="skill" style={style} >
        <span >{props.skillName} </span>
        <span>{props.emoji}</span>
    </div>
}
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode><App /></React.StrictMode>)