import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page2.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
// FirstPage
const FirstPage = () => {
    return (
        <>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 2 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>Советский подход: </span> первые успехи, первые неудачи
                        </h1>
                    </div>
                    <div className="grid">
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    6,7
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>мбар</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Атмосферное <br /> давление на Марсе
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                        </div>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page3'
                count='03'
                title='на борту марсохода: '
                text='Как российский нейтронный детектор нашел воду у поверхности Марса'
            />
        </>
    );
};

export default FirstPage;
