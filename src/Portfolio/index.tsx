import React, { useEffect } from 'react';
import style from './index.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [
        { id: 1, src: "./picss2.png", tag: "Bridal", size: "large" },
        { id: 2, src: "./picss4.png", tag: "Party Look", size: "small" },
        { id: 3, src: "./picss9.png", tag: "Engagement", size: "small" },
        { id: 4, src: "./picss.png", tag: "Editorial", size: "medium" },
        
    ];

    const navigate=useNavigate();


    return (
        <section className={style.portSection}>
            <div className={style.portHeader} data-aos="fade-down">
                <span className={style.portSubtitle}>Our Masterpieces</span>
                <h2 className={style.portTitle}>Real Brides, <span>Real Glow</span></h2>
                <div className={style.underline}></div>
            </div>
            <div className={style.portGrid}>
                {images.map((img, index) => (
                    <div 
                        key={img.id} 
                        className={`${style.portItem} ${style[img.size]}`}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div className={style.imageWrapper}>
                            <img src={img.src} alt={img.tag} />
                            <div className={style.portOverlay}>
                                <div className={style.overlayContent}>
                                    <span className={style.tagLabel}>{img.tag}</span>
                                    <button className={style.viewBtn}>View Look</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className={style.portFooter} data-aos="zoom-in">
                <button className={style.loadMore} onClick={()=>navigate("/Gallery")}>View Full Gallery</button>
            </div>
        </section>
    );
};

export default Portfolio;