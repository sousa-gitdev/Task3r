import './logo.css';
import LogoImage from '../../assets/Logo.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={LogoImage} alt="Logo" className="logo-image" />
        </div>
    );
};

export default Logo;