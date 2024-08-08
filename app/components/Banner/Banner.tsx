import React from 'react';
import Link from 'next/link';
import styles from './Banner.module.css';

interface BannerProps {
  backgroundImage: string;
  title: string;
  breadcrumb: { name: string; link: string }[];
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, title, breadcrumb }) => {
  return (
    <section className={styles.heroWrap} style={{ backgroundImage: `url(${backgroundImage})` }}
        data-stellar-background-ratio="0.5">
        <div className={styles.overlay}></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-start">
                <div className="ftco-animate">
                    <h1 className={styles.title}>{title}</h1>
                    <p>
                        {breadcrumb.map((item, index) => (
                        <span key={index} className="mr-2">
                            <Link href={item.link}>
                            {item.name} <i className="ion-ios-arrow-forward"></i>
                            </Link>
                        </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;
