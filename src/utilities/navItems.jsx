import { useNavigate, useLocation } from "react-router-dom";

const NavItems = ({ containerClass, t }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeClass = location.pathname;
    const activeClassName = route => activeClass === route ? 'is-active' : 'underline-a';

    const navigationList = [
        {route: '/', name: 'home.home'},
        {route: '/about', name: 'home.about'},
        {route: '/resume', name: 'home.resume'},
        {route: '/contact', name: 'home.contact'},
    ];

    return (
        <div className={containerClass}>
            {navigationList.map(item => {
                return (
                    <div    
                        key={item.route} 
                        onClick={() => navigate(item.route)} 
                        className={`nav-item ${activeClassName(item.route)}`}
                    >
                        {t(`${item.name}`)}
                    </div>
                )
            })}
        </div>
    )
}

export default NavItems;