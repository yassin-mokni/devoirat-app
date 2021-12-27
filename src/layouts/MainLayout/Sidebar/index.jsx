import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Collapse, Button } from '@mui/material';
import LOGO from 'src/assets/images/logo/Lockup-Color.svg';
import { ReactComponent as ChevronDownICO } from 'src/assets/images/icons/ChevronDown.svg';
import { ReactComponent as FolderICO } from 'src/assets/images/icons/Folder.svg';

const PRIMARY_KEYS = [
  'primary-1st',
  'primary-2nd',
  'primary-3rd',
  'primary-4th',
  'primary-5th',
  'primary-6th'
];

const BASIC_KEYS = ['basic-1st', 'basic-2nd', null];

const SECONDARY_KEYS = [
  'secondary-1st',
  'secondary-2nd',
  'secondary-3rd',
  'secondary-4th'
];

const SidebarItemLink = ({ children, icon, active, ...rest }) => {
  return (
    <Link
      className={active === true ? 'nav-item-link active' : 'nav-item-link'}
      {...rest}
    >
      {icon || null}
      {children}
    </Link>
  );
};

const SidebarItem = ({ children, label, icon, isOpen, ...rest }) => {
  const [open, setOpen] = useState(isOpen || false);
  return (
    <>
      <div
        className={open === true ? 'nav-item open' : 'nav-item'}
        onClick={() => setOpen((prev) => !prev)}
        {...rest}
      >
        {label || null}
        {icon || null}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children || null}
      </Collapse>
    </>
  );
};

const Sidebar = () => {
  let [searchParams] = useSearchParams();
  return (
    <div className="sidebar">
      <div>
        <img className="logo" alt="Logo of our website" src={LOGO} />
        <nav>
          <SidebarItem
            label="Primaire"
            icon={<ChevronDownICO className="chevron-ico" />}
            isOpen={PRIMARY_KEYS.includes(searchParams.get('class'))}
          >
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-1st"
              active={searchParams.get('class') === 'primary-1st'}
            >
              1ère année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-2nd"
              active={searchParams.get('class') === 'primary-2nd'}
            >
              2ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-3rd"
              active={searchParams.get('class') === 'primary-3rd'}
            >
              3ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-4th"
              active={searchParams.get('class') === 'primary-4ht'}
            >
              4ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-5th"
              active={searchParams.get('class') === 'primary-5th'}
            >
              5ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=primary-6th"
              active={searchParams.get('class') === 'primary-6th'}
            >
              6ème année
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem
            label="De Base"
            icon={<ChevronDownICO className="chevron-ico" />}
            isOpen={BASIC_KEYS.includes(searchParams.get('class'))}
          >
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=basic-1st"
              active={searchParams.get('class') === 'basic-1st'}
            >
              7ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=basic-2nd"
              active={searchParams.get('class') === 'basic-2nd'}
            >
              8ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/"
              active={searchParams.get('class') == null}
            >
              9ème année
            </SidebarItemLink>
          </SidebarItem>
          <SidebarItem
            label="Secondaire"
            icon={<ChevronDownICO className="chevron-ico" />}
            isOpen={SECONDARY_KEYS.includes(searchParams.get('class'))}
          >
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=secondary-1st"
              active={searchParams.get('class') === 'secondary-1st'}
            >
              1ère année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=secondary-2nd"
              active={searchParams.get('class') === 'secondary-2nd'}
            >
              2ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=secondary-3rd"
              active={searchParams.get('class') === 'secondary-3rd'}
            >
              2ème année
            </SidebarItemLink>
            <SidebarItemLink
              icon={<FolderICO />}
              to="/?class=secondary-6th"
              active={searchParams.get('class') === 'secondary-6th'}
            >
              4ème année
            </SidebarItemLink>
          </SidebarItem>
        </nav>
        <Button className="de-button primary rounded">Créer un compte</Button>
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
