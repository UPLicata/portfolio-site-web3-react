// Import Assets
import payments from '../assets/payments.png';
import wallets from '../assets/wallets.png';
import metaverse from '../assets/metaverse.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Payments</h3>
                    <img src={payments} alt="Uniswap Swap Page" />
                    <p>Fulling automating payment transaction flow via APIs to manage vault accounts along with internal and external wallets, and utilizing webhooks to receive push notifications on worflows.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/UPLicata" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Wallets</h3>
                    <img src={wallets} alt="Wallets Landing Page" />
                    <p>Integrating wallet SDKs such as wallet connect with web applications. 
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/UPLicata" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Metaverse</h3>
                    <img src={metaverse} alt="Metaverse Landing Page" />
                    <p>Leveraging various SDK and APIs for NFT management to begin the Web3 journey into corporation. Integrating NFTs with web applications supporting company and client initiatives, including creation of drop-links, and middleware services for NFT management.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/UPLicata" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;