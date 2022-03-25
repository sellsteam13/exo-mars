import React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as styles from "./Footer.module.scss";

export const Footer = () => {
    return <footer className={styles.footer}>
        <div className={styles.footerLogo}>
            <StaticImage
                placeholder={"none"}
                src={"../../images/content/home/intro-text.svg"}
                alt={"EXOMARS"}
            />
        </div>
        <p className={cx('p--label', styles.footerText)}>Проект по исследованию Марса © 2021</p>
        <p className={cx('p--label', styles.footerStudio)}>Design by <Link to={'/'} target={'_blank'} rel={'nofollow'} className={styles.footerStudioLink}><b>Flatstudio</b></Link></p>
    </footer>;
};
