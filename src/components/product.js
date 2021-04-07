import React from 'react' 
// import { Link } from "gatsby"
import '../styles/product.css'
import board from '../images/board.png'
const ProductPage = () => {
    console.log(board)
return(
        <div className="head">
            <h2 id="header">It’s more than work. It’s a way of working together.</h2>
            <p id="para">Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
            <button className="sign">Start Doing &rarr;</button>
            <img className="board" src={board} alt="dashboard" />
            <h3>Join over 1,000,000 teams worldwide that are using Trello to get more done.</h3>
        </div>
)
}
export default ProductPage
