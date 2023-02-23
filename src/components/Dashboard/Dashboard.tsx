import './Dashboard.scss'
import supportlogo from "../../assets/support.png"

export const Dashboard = () => {
    return (
        <div className ="dashboard"> 
        <div className="dashboard__header">
            <img className= "dashboard__logo" src={supportlogo} alt="" />
            <span className ="dashboard__title"> Support Helper </span>
        </div>
        
        </div>
    );
}