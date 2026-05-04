import style from './index.module.scss';

const Footer = () => {
    return (
        <footer className={style.ftSection}>
            <div className={style.ftContainer}>
                <div className={style.ftBrand}>
                    <h2 className={style.ftLogo}>Dream Glow</h2>
                    <p>Professional Bridal & Party Makeover Services based in Tirunelveli. We believe every bride deserves to glow on her special day.</p>
                    <div className={style.ftSocials}>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">WhatsApp</a>
                    </div>
                </div>

                <div className={style.ftLinks}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Book Appointment</a></li>
                    </ul>
                </div>

                <div className={style.ftContact}>
                    <h3>Get In Touch</h3>
                    <p>📍 Tirunelveli, Tamil Nadu, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ hello@dreamglow.com</p>
                </div>
            </div>

            <div className={style.ftBottom}>
                <p>&copy; {new Date().getFullYear()} Dream Glow Makeover. All Rights Reserved.</p>
                <p>Designed with ✨ for the Modern Bride</p>
            </div>
        </footer>
    );
};

export default Footer;