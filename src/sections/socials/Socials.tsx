import React from "react";
import cx from "classnames";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";

export const Socials = () => {
    return (
        <div className={styles.socials}>
            <Link to={"/"} className={styles.socialsLink}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../images/content/socials/fb.svg"}
                    alt={"Social icon"}
                />
            </Link>
            <Link to={"/"} className={styles.socialsLink}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../images/content/socials/twitter.svg"}
                    alt={"Social icon"}
                />
            </Link>
            <Link to={"/"} className={styles.socialsLink}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../images/content/socials/tg.svg"}
                    alt={"Social icon"}
                />
            </Link>
            <Link to={"/"} className={styles.socialsLink}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../images/content/socials/whatsapp.svg"}
                    alt={"Social icon"}
                />
            </Link>
            <Link to={"/"} className={styles.socialsLink}>
                <StaticImage
                    placeholder={"none"}
                    src={"../../images/content/socials/share.svg"}
                    alt={"Share icon"}
                />
            </Link>
        </div>
    );
};
