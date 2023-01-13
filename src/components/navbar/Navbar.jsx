import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="assets/logo.png" alt="" className="navLogo"/>
            </div>
            <ul className="navLists">
                <li className="navList"> Campeones </li>
                <li className="navList"> Objetos </li>
                <li className="navList"> Runas </li>
            </ul>
            <div className="navIcons">
                <div className="navSearch">
                    <SearchIcon className="navSearchIcon"/>
                    <input placeholder="Buscar" className="navSearchInput"/>
                </div>
                <FavoriteIcon className="navIcon" />
                <div className="navCart">
                    <ShoppingCartIcon className="navIcon" />
                    <label className="navCartLabel"> 2 </label>
                </div>
            </div>
        </div>
    )
}