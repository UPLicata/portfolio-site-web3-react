// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Paul Licata" />

            <div className='header__content'>
                <h1>Paul Licata</h1>
                <p>Blockchain & Cryptocurrency Enthusiast</p>
                <a href="mailto:paul@licata.com?subject=Mail from Portfolio Website" className="button">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
