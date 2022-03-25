import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page5.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// FifthPage
const FifthPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Первый ExoMars: хлороводород и другие газы
                </title>
                <meta
                    name="description"
                    content="Смогут ли наблюдения с орбиты решить загадку марсианской жизни — и ее следов, в виде метана и кислорода?"
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 5 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>Первый ExoMars:</span> хлороводород и другие газы
                        </h1>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page6'
                count='06'
                title='ExoMars-2022'
                text='— миссия, сочетающая и посадочную платформу, и марсоход'
            />
        </div>
    );
};

export default FifthPage;
