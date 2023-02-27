import { NavLink } from "react-router-dom";
import './Dashboard.scss'
import logo from "../../assets/logo.svg"
import overview from "../../assets/overview.svg";
import templates from "../../assets/templates.svg";
import contacts from "../../assets/contacts.svg";

export const Dashboard = () => {
    return (
        <div className ="dashboard"> 
        <div className="dashboard__header">
            <img className= "dashboard__logo" src={logo} alt="" />
            <h2 className ="dashboard__title"> Support <br /> Helper </h2>
        </div>
        <h3 className="dashboard__list-title">Categories</h3>
        <ul className="dashboard__list">
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={overview} alt="" /> 
                <NavLink className ="dashboard__link" to='/overview'>Overview</NavLink>
            </li>
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={templates} alt="" />
                <NavLink className ="dashboard__link" to='/templates'>Templates</NavLink>
            </li>
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={contacts} alt="" />
                <NavLink className ="dashboard__link" to='contacts'>Contacts</NavLink>
            </li>
        </ul>
        </div>
    );
}