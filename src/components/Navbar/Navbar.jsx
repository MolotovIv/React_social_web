import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

console.log(classes);

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}> profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}>messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}>news</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;


//let classes ={
// 'nav':'Navbar_item__3MbkT',
// 'item': 'Navbar_item__3MbkT'
// 'active': 'Navbar_item__3MbkT.Navbar_active__1uioC'
// }

// let c1 = "item";
// let c2 = "active"
//item active
// let classesNew=c1 +""+c2;
// let classeNewNew= ${classes.item} ${classes.active};