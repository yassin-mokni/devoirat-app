import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/store/slices/auth';
import LOGO from 'src/assets/images/logo/Lockup-Color.svg';
import { ReactComponent as HomeICO } from 'src/assets/images/icons/Home.svg';
import { ReactComponent as GraduationCapICO } from 'src/assets/images/icons/GraduationCap.svg';
import { ReactComponent as HeartICO } from 'src/assets/images/icons/Heart.svg';
import { ReactComponent as BackInTimeICO } from 'src/assets/images/icons/BackInTime.svg';
import { ReactComponent as UserICO } from 'src/assets/images/icons/User.svg';
import { ReactComponent as LogOutICO } from 'src/assets/images/icons/LogOut.svg';
import AVATAR from 'src/assets/images/avatar.png';

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
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="sidebar">
      <div>
        <img className="logo" alt="Logo of our website" src={LOGO} />
        <div className="user-infos">
          <Link to="/profile">
            <img className="avatar" alt="user-avatar" src={AVATAR} />
          </Link>
          <Link to="/profile">
            <span className="name">{`${user?.firstName} ${user?.lastName}`}</span>
          </Link>
          <span className="role">Admin</span>
        </div>
        <nav>
          <SidebarItem icon={<HomeICO />} to="/">
            Accueil
          </SidebarItem>
          <SidebarItem icon={<GraduationCapICO />} to="/division">
            Matières
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
