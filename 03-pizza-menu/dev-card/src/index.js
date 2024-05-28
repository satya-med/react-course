import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill : "Ethereum",
        level : "advanced",
        color : "blue"
    },
    {
        skill : "Solidity",
        level : "advanced",
        color : "orange"
    },
    {
        skill : "TypeScript",
        level : "intermediate",
        color : "yellow"
    },
    {
        skill : "NodeJs",
        level : "advanced",
        color : "red"
    },
    {
        skill : "DEFI",
        level : "advanced",
        color : "grey"
    },
    {
        skill : "React",
        level : "beginner",
        color : "orange"
    }
]

const emojis = {
    "advanced" : "💪",
    "intermediate" : "👍",
    "beginner" : "👦"
}
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
      {skills.map(skill => <Skill color={skill.color} skill={skill.skill} level={skill.level} />)}
      <Skill colourName="blue"  skillName="Ethereum" emoji="💪"/>
      <Skill colourName="red"  skillName="Solidity" emoji="🥊"/>
      <Skill colourName="yellow"  skillName="TypeScript" emoji="🔥"/>
      <Skill colourName="orange"  skillName="NodeJs" emoji="💪"/>
      <Skill colourName="green"  skillName="DEFI" emoji="🥊"/>
    </div>
}

const Skill = function({ color, skill, level}){
    const style = { backgroundColor : color}
    return <div className="skill" style={style} >
        <span >{skill} </span>
        <span>{emojis[level]}</span>
    </div>
}
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode><App /></React.StrictMode>)