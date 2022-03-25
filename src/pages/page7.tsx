import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page7.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// SeventhPage
const SeventhPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    «Казачок»: хорошо подготовленный наблюдатель
                </title>
                <meta
                    name="description"
                    content="Российская посадочная платформа имеет гарантийный срок работы в год, но предполагается, что она может проработать намного больше. Это вызвано ее ключевой..."
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 7 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>«Казачок»:</span> хорошо подготовленный наблюдатель
                        </h1>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page8'
                count='08'
                title='«Розалинд Франклин»:'
                text='добуриться до жизни'
            />
        </div>
    );
};

export default SeventhPage;
