import React from 'react' 
import logo from '../images/myorglogo.png'
import "../styles/compare.css"
const ComparePage = () => {
    console.log (logo)
    return (
        <div className="table">
            <a className="title">Here's how we stack up ! </a>
            <table>
                <tr>
                    <th className="columnheader">
                        <h2>Features</h2>
                    </th>
                    <th>
                        <img className="logo1" src={logo} alt="logo" />
                    </th>
                </tr>
                <tr>
                    <td><h3>Time Tracking</h3></td>
                    <td><span role="img">&#10004;</span> </td>
                </tr>
                <tr>
                    <td><h3>Task States</h3></td>
                    <td><span role="img">&#10004;</span></td>
                </tr>
                <tr>
                    <td><h3>Multiple Views</h3></td>
                    <td><span role="img">&#10004;</span></td>
                </tr>
                <tr>
                    <td><h3>Task Priorities</h3></td>
                    <td><span role="img">&#10004;</span></td>
                </tr>
                <tr>
                    <td><h3>Form Customization</h3></td>
                    <td><span role="img">&#10004;</span></td>
                </tr>
                <tr>
                    <td><h3>Reports</h3></td>
                    <td><span role="img">&#10004;</span></td>
                </tr>
            </table>
       </div>
    )
}
export default ComparePage 