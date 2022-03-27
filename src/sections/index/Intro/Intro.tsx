import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import cx from 'classnames';

import * as styles from "./styles.module.scss";
import illustration from "~/images/content/home/intro-illustration.png";
import illustrationMobile from "~/images/content/home/intro-illustration@mobile.png";

export const Intro = () => {
    return (
        <section className={styles.intro}>
            <h2 className={styles.introSubtitle}>2021</h2>
            <h1 className={styles.introTitle}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../../images/content/home/intro-text.svg"}
                    alt={"EXOMARS"}
                />
                <span className={styles.introTitleText}>EXOMARS</span>
            </h1>
            <img
                className={styles.introIllustration}
                src={illustration}
                alt={"Intro illustration"}
            />
            <img
                className={cx(styles.introIllustration, styles.introIllustrationMobile)}
                src={illustrationMobile}
                alt={"Intro illustration mobile"}
            />
        </section>
    );
};
