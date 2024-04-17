import './index.scss';
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const toPath = (path) => {
        navigate(path);
    };

    const onGo = (path) => {};

    return (
        <div className="footer">
            <div className='footer-bg'></div>
            <div className="footer-menu">
                <div className="footer-menu-item" onClick={() => toPath("/")}>
                    Home
                </div>
                <div className="footer-menu-item" onClick={() => toPath("/mint")}>
                    Mint
                </div>
                <div className="footer-menu-item" onClick={() => toPath("/story")}>
                    Story
                </div>
                <div className="footer-menu-item" onClick={() => toPath("/about_us")}>
                    About Us
                </div>
            </div>
            <div className="footer-icons">
                <div className="footer-icons-item" onClick={() => onGo('')}></div>
                <div className="footer-icons-item" onClick={() => onGo('')}></div>
                <div className="footer-icons-item" onClick={() => onGo('')}></div>
                <div className="footer-icons-item" onClick={() => onGo('')}></div>
                <div className="footer-icons-item" onClick={() => onGo('')}></div>
            </div>
            <div className="footer-copyright">@2024 Whale Protocol All Rights Reserved</div>
        </div>
    )
};