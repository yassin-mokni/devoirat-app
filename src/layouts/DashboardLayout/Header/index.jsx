import { Link } from 'react-router-dom';
import AVATAR from 'src/assets/images/avatar.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/profile">
        <img className="avatar" alt="user-avatar" src={AVATAR} />
      </Link>
    </div>
  );
};

export default Header;
