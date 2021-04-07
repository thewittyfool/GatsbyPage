import React from 'react' 
import '../styles/features.css'
import view from '../images/view.svg'
import card from '../images/card-back.svg'
import auto from '../images/automation.png'
import power from '../images/power-ups.png'

const FeaturesPage = () => {
    console.log(view)
    console.log(card)
    console.log(auto)
    console.log(power)
return(
        // <div>
        // //     <h1>Features to help your team succeed</h1>
        //         <p>Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, 
        //             Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
        // // </div>
        <div className="grid-container">
                <div className="grid">
                <img className="view" src= {view} alt="view" />
                </div>
            <div className="grid view1">
                <h4>CHOOSE A VIEW</h4>
                <h2>The board is just the beginning</h2>
                <p>Lists and cards are the building blocks of organizing work on a Trello board. 
                Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
               </div>
            <div className="grid">
                <h4>DIVE INTO THE DETAILS</h4>
                <h2>Cards contain everything you need </h2>
                <p>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. 
                Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
            </div>
            <div className="grid">
            <img className="card" src={card} alt="card" />
            </div>
                <div className="grid">
                <img className="auto grid" src={auto} alt="automation" />
                </div>
            <div className="grid">
                <h4>MEET YOUR NEW BUTLER</h4>
                <h2>No-code automation</h2>
                <p>Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, 
                Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
            </div>
            <div className="grid">
                <h4>POWER-UPS</h4>
                <h2>Integrate top work tools</h2>
                <p>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. 
                With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
            </div>
            <div className="grid">
                <img className="power grid" src={power} alt="power" />
            </div>
        </div>
)
}
export default FeaturesPage