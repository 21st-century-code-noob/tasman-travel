import { useState } from 'react';
import { NavbarItems } from './NavbarItems';

import './Navbar.scss'

import logoImage from 'assets/images/logo.png';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';


const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuIconClick = () => {
        setMenuClicked(!menuClicked);
        console.log(menuClicked);
    }

    return (
        <div className="navbar-container">
            <img src={logoImage} className="navbar-logo" alt="Tasman Logo" />
            <div className="background"/>
            <div className="navbar-menu-icon" onClick={handleMenuIconClick}>
                {menuClicked ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </div>
            <ul className= { menuClicked ? 'navbar-menu active' : 'navbar-menu'}>
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