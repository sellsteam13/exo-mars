import React from "react";
import cx from "classnames";
import { Link } from "gatsby";
// import Link from "gatsby-plugin-transition-link/Link";

import * as styles from "./styles.module.scss";

// Illustrations
import illstr1 from "~/images/content/nav-illstr/item1.png";
import illstr2 from "~/images/content/nav-illstr/item2.png";
import illstr3 from "~/images/content/nav-illstr/item3.png";
import illstr4 from "~/images/content/nav-illstr/item4.png";
import illstr5 from "~/images/content/nav-illstr/item5.png";
import illstr6 from "~/images/content/nav-illstr/item6.png";
import illstr7 from "~/images/content/nav-illstr/item7.png";
import illstr8 from "~/images/content/nav-illstr/item8.png";

export const Navigation = () => {
    return (
        <section className={styles.nav}>
            <Link
                to="/page1"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>01</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"Как ответить на вопрос – "}>
                            Как ответить на вопрос –
                        </b>
                        Есть ли жизнь на Красной планете?
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr1
                        )}
                        src={illstr1}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page2"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>02</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"Советский подход: "}>Советский подход:</b>
                        первые успехи, первые неудачи
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr2
                        )}
                        src={illstr2}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page3"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>03</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"на борту марсохода:"}>
                            на борту марсохода:
                        </b>
                        Как нейтронный детектор нашел воду у
                        поверхности Марса
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr3
                        )}
                        src={illstr3}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page4"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>04</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"Exomars – "}>Exomars – </b>
                        этапы экспедиции
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr4
                        )}
                        src={illstr4}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page5"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>05</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"Первый ExoMars:"}>Первый ExoMars:</b>
                        хлороводород и другие газы
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr5
                        )}
                        src={illstr5}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page6"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>06</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"ExoMars-2022"}>ExoMars-2022</b>— миссия,
                        сочетающая и посадочную платформу, и марсоход
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr6
                        )}
                        src={illstr6}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page7"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>07</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"«Казачок»:"}>«Казачок»:</b>
                        хорошо подготовленный наблюдатель
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr7
                        )}
                        src={illstr7}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
            <Link
                to="/page8"
                className={styles.navLink}
            >
                <span className={styles.navLinkWrapper}>
                    <span className={cx("p", styles.navLinkCount)}>
                        <b>08</b>
                    </span>
                    <span className={cx("heading1", styles.navLinkText)}>
                        <b data-alt={"«Розалинд Франклин»:"}>
                            «Розалинд Франклин»:
                        </b>
                        добуриться до жизни
                    </span>
                    <img
                        className={cx(
                            styles.navLinkIllstr,
                            styles.navLinkIllstr8
                        )}
                        src={illstr8}
                        alt={"Illustration 1"}
                    />
                </span>
            </Link>
        </section>
    );
};
