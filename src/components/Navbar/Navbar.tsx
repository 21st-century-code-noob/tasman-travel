import logoImage from 'assets/images/logo.png';
import { NavbarItems } from './NavbarItems';
import Button from '@material-ui/core/Button';
import './Navbar.scss'
import { useState } from 'react';

const [menuExpanded, setMenuExpanded] = useState(false);

const Navbar = () => {1
    return (
        <div className="navbar-container">
                <img src={logoImage} alt="Tasman Logo" className="navbar-logo" />
            <div className="menu-icon">

            </div>
            <ul className="navbar-menu">
                {NavbarItems.map((item, index) => {
                    return (
                        <li className="navbar-menu-item" key = {index}>
                            <Button className={item.cName}>
                                {item.title}
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Navbar;