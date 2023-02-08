import { useNavigate, useLocation } from "react-router-dom";

const NavItems = ({ containerClass, t }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const activeClass = location.pathname;
    const activeClassName = route => activeClass === route ? 'is-active' : 'underline-a';

    const navigationList = [
        {route: '/DmitriyKulikovskiyResume', name: 'home.home'},
        {route: '/DmitriyKulikovskiyResume/about', name: 'home.about'},
        {route: '/DmitriyKulikovskiyResume/resume', name: 'home.resume'},
        {route: '/DmitriyKulikovskiyResume/contact', name: 'home.contact'},
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