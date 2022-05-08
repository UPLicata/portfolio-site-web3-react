// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Paul Licata" />

            <div className='header__content'>
                <h1>Paul Licata</h1>
                <p>Blockchain & Cryptocurrentcy Enthusiast</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;