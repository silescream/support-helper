import './Header.scss'
import customer from '../../assets/customer.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
            <div className = "header__user">
                <img className ="header__icon" src={customer} alt="" />
                <span className="header__email">silescream@gingerbread.com</span> 
            </div>
            <a className="header__logout" href="#">Logout</a>
            </div>
            <hr className="header__line"/>
        </div>
    );
}