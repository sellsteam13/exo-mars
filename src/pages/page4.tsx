import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page4.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// FourthPage
const FourthPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Exomars – этапы экспедиции
                </title>
                <meta
                    name="description"
                    content="Этапы экспедиции"
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 4 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>Exomars – </span> этапы экспедиции
                        </h1>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page5'
                count='05'
                title='Первый ExoMars:'
                text='хлороводород и другие газы'
            />
        </div>
    );
};

export default FourthPage;
