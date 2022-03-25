import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page1.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// FirstPage
const FirstPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Как ответить на вопрос - Есть ли жизнь на Красной планете?
                </title>
                <meta
                    name="description"
                    content="
                        В Солнечной системе есть зона обитаемости (зона,
                        где на поверхности может быть жидкая вода) — и
                        кроме Земли, туда, как ни странно, входит и
                        Марс. Если бы последний был размером с нашу...
                    "
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 1 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>Как ответить на вопрос - </span> Есть ли жизнь
                            на Красной планете?
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
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    1000
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>мбар</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Атмосферное <br /> давление на Земле
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p>
                                В Солнечной системе есть зона обитаемости (зона,
                                где на поверхности может быть жидкая вода) — и
                                кроме Земли, туда, как ни странно, входит и
                                Марс. Если бы последний был размером с нашу
                                планету и имел бы такую же атмосферу, это была
                                бы холодная копия нашей планеты, и мы легко бы
                                выяснили, есть ли там жизнь.
                            </p>
                            <p className="p--light">
                                Однако на практике Марс в десять раз легче
                                Земли, а его атмосфера сегодня — в 150 раз
                                разреженней нашей. Тут важно слово сегодня: судя
                                по следам рек, озер и морей на поверхности
                                четвертой планеты, раньше ее атмосфера могла
                                быть заметно плотнее. Но сегодня там то, что
                                есть. А это означает, что обнаружение следов
                                прошлой или нынешней жизни здесь крайне
                                затруднено.
                            </p>
                        </div>
                    </div>
                    <div className={styles.spacer}></div>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">
                                Из-за низкого атмосферного давления
                                микроорганизмы и их следы могли сохраниться
                                только под поверхностью. Если они и есть
                                сегодня, то следы их жизнедеятельности (метан,
                                кислород) будут составлять крайне малую долю
                                местной атмосферы, и могут то появляться (в
                                теплый сезон), то исчезать (в холодный).
                            </p>
                            <p className="p--light">
                                Из исследований сходных мест на Земле (пустыня
                                Атакама) известно, что даже там колонии микробов
                                под почвой есть не везде, и чтобы найти хоть
                                кого-то, надо изучить немало разных точек
                                поверхности
                            </p>
                        </div>
                    </div>
                    <blockquote className={cx('blockquote', styles.blockquote)}>
                        <p>
                            Все это значит, что действительно важные вопросы
                            исследования Марса очень трудно разрешимы с
                            технической точки зрения. Нужны высокочувствительные
                            приборы, которые смогли бы охватить как можно
                            большую площадь.
                        </p>
                    </blockquote>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/first-page/picture1.png"}
                            alt={"Планетоход"}
                        />
                        <figcaption className="p picture__title">
                            Планетоход «Розалинд Франклин» / ©Европейское
                            космическое агентство{" "}
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">
                                При этом доставить все это на поверхность
                                четвертой планеты предельно сложно. Чтобы
                                садиться на планеты типа Земли, можно
                                использовать парашюты — в плотной атмосфере они
                                гасят скорость. На небольших небесных телах,
                                типа Луны, газовой оболочки нет, но там и сила
                                тяжести в шесть раз меньше: легче тормозить
                                посадочными ракетными двигателями.
                            </p>
                            <p className="p--light">
                                Марс находится точно посередине: атмосфера в 150
                                раз менее плотна, чем наша, поэтому парашюты
                                должны быть просто гигантскими. Сила тяжести в
                                0,38G делает посадку на двигателях довольно
                                энергоемкой.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Redirect
                to="/page2"
                count="02"
                title="Советский подход:"
                text="первые успехи, первые неудачи"
            />
        </div>
    );
};

export default FirstPage;
