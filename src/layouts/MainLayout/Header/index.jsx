import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className="header">
      <Link to="/auth">
        <Button className="de-button primary rounded">Se connecter</Button>
      </Link>
    </div>
  );
};

export default Header;
