import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page8.module.scss";

import { Footer } from "~/components/Footer/Footer";
import { Helmet } from "react-helmet";

// EighthPage
const EighthPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    «Розалинд Франклин»: добуриться до жизни
                </title>
                <meta
                    name="description"
                    content="У европейского марсохода есть и уникальный прибор, делающие его по научному потенциалу чрезвычайно сильным исследователем Красной планеты. Все дело в том, что до него бурение — а точнее..."
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 8 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>«Розалинд Франклин»:</span> добуриться до жизни
                        </h1>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default EighthPage;
