import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/slices/auth';
import LOGO from 'src/assets/images/logo/Lockup-Color.svg';
import { ReactComponent as HomeICO } from 'src/assets/images/icons/Home.svg';
import { ReactComponent as GraduationCapICO } from 'src/assets/images/icons/GraduationCap.svg';
import { ReactComponent as HeartICO } from 'src/assets/images/icons/Heart.svg';
import { ReactComponent as BackInTimeICO } from 'src/assets/images/icons/BackInTime.svg';
import { ReactComponent as UserICO } from 'src/assets/images/icons/User.svg';
import { ReactComponent as LogOutICO } from 'src/assets/images/icons/LogOut.svg';

const SidebarItemButton = ({ icon, children, ...rest }) => {
  return (
    <button className="nav-item-button" {...rest}>
      {icon || null}
      {children}
    </button>
  );
};

const SidebarItem = ({ icon, children, ...rest }) => {
  return (
    <NavLink className="nav-item" {...rest}>
      {icon || null}
      {children}
    </NavLink>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <div>
        <img className="logo" alt="Logo of our website" src={LOGO} />
        <nav>
          <SidebarItem icon={<HomeICO />} to="/">
            Accueil
          </SidebarItem>
          <SidebarItem icon={<GraduationCapICO />} to="/division">
            Matières
          </SidebarItem>
          <SidebarItem
            icon={<HeartICO className="heart-color" />}
            to="/favorites"
          >
            Liste de favoris
          </SidebarItem>
          <SidebarItem icon={<BackInTimeICO />} to="/historical">
            Historique
          </SidebarItem>
          <SidebarItem icon={<UserICO />} to="/profile">
            Mon profil
          </SidebarItem>
          <SidebarItemButton
            icon={<LogOutICO />}
            onClick={() => dispatch(logout())}
          >
            Se déconnecter
          </SidebarItemButton>
        </nav>
        <span className="pub"></span>
      </div>
      <footer>
        <p className="title">Devoirat.net</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ marginBottom: 24 }}>
          contact@devoirat.net <br />
          +216 000 000 <br />
          75 Place de la Madeleine, Nabeul, Tunisie, 0000.
        </p>
        <p>Copyright © Devoirat.net 2021 - Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
