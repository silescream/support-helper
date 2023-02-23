import './Sidebar.scss';

export const Sidebar = () => {
    return (
        <div className ="sidebar">
        <ul className="sidebar__list">
            <li className="sidebar__item">Redraw</li>
            <li className="sidebar__item">Keposit</li>
            <li className="sidebar__item">Focuse</li>
            <li className="sidebar__item">PPC Lerification</li>
            <li className="sidebar__item">Describe</li>
            <li className="sidebar__item">Return</li>
        </ul>
    </div>
    );
}