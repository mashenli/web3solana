import "./navbar.scss";
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import ConnectModal from '../ConnectModal/index';
import ConnectDrawer from '../ConnectDrawer/index';
import { Dropdown, Space } from "antd";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const [showConnectModal, setConnectModal] = useState(false);
  const [showConnectDrawer, setConnectDrawer] = useState(false);
  const items = [
    {
      label: (
        <div className={`menu-item ${currentRoute === '/' ? 'active' : ''}`}>Home</div>
      ),
      key: '/',
    },
    {
      label: (
        <div className={`menu-item ${currentRoute === '/mint' ? 'active' : ''}`}>Mint</div>
      ),
      key: '/mint',
    },
    {
      label: (
        <div className={`menu-item ${currentRoute === '/story' ? 'active' : ''}`}>Story</div>
      ),
      key: '/story',
    },
    {
      label: (
        <div className={`menu-item ${currentRoute === '/about_us' ? 'active' : ''}`}>About Us</div>
      ),
      key: '/about_us'
    }
  ];
  const onMenuClick = ({ key }) => {
    navigate(key);
  };

  const toPath = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={() => toPath("/")}></div>
      <div className="navbar-menu">
        <div className={`menu-item ${currentRoute === '/' ? 'active' : ''}`} onClick={() => toPath("/")}>Home</div>
        <div className={`menu-item ${currentRoute === '/mint' ? 'active' : ''}`} onClick={() => toPath("/mint")}>Mint</div>
        <div className={`menu-item ${currentRoute === '/story' ? 'active' : ''}`} onClick={() => toPath("/story")}>Story</div>
        <div className={`menu-item ${currentRoute === '/about_us' ? 'active' : ''}`} onClick={() => toPath("/about_us")}>About Us</div>
      </div>
      <div className="navbar-right pc">
        <div className="right-item feishu"></div>
        <div className="right-item youjian"></div>
        <div className="right-item btn" onClick={() => setConnectModal(true)}></div>
      </div>
      <div className="navbar-right mobile">
        <div className="right-item btn" onClick={() => setConnectDrawer(true)}></div>
        {/* <div className="right-item menu-icon"></div> */}
        <Dropdown menu={{ items, onClick: onMenuClick }} overlayClassName="navbar-dropdown">
          <Space className="right-item menu-icon"><div></div></Space>
        </Dropdown>
      </div>
      <ConnectModal
        isShow={showConnectModal}
        onCancel={() => setConnectModal(false)}
      />
      <ConnectDrawer
        isShow={showConnectDrawer}
        onClose={() => setConnectDrawer(false)}
      />
    </div>
  );
}

export default Navbar;
