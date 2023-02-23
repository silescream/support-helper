import './Dashboard.scss'
import supportlogo from "../../assets/support.png"
import overview from "../../assets/overview.svg";
import templates from "../../assets/templates.svg";
import contacts from "../../assets/contacts.svg";

export const Dashboard = () => {
    return (
        <div className ="dashboard"> 
        <div className="dashboard__header">
            <img className= "dashboard__logo" src={supportlogo} alt="" />
            <span className ="dashboard__title"> Support Helper </span>
        </div>
        <ul className="dashboard__list">
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={overview} alt="" /> 
                <a className ="dashboard__link" href="#">Overview</a>
            </li>
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={templates} alt="" />
                <a className ="dashboard__link" href="#">Templates</a>
            </li>
            <li className= "dashboard__item"> 
                <img className= "dashboard__icon" src={contacts} alt="" />
                <a className ="dashboard__link" href ="#">Contacts</a>
            </li>
        </ul>
        </div>
    );
}