import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page6.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// SixthPage
const SixthPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    ExoMars-2022 — миссия, сочетающая и посадочную платформу, и марсоход
                </title>
                <meta
                    name="description"
                    content="Почему ни один из них не может заменить другого, и как именно они проявят себя в изучении Красной планеты?"
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 6 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>ExoMars-2022</span> — миссия, сочетающая и посадочную платформу, и марсоход
                        </h1>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page7'
                count='07'
                title='«Казачок»:'
                text='хорошо подготовленный наблюдатель'
            />
        </div>
    );
};

export default SixthPage;
