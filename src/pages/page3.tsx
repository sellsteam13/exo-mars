import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page3.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// ThirdPage
const ThirdPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    На борту марсохода: Как российский нейтронный детектор нашел воду у поверхности Марса
                </title>
                <meta
                    name="description"
                    content="Однако к 2000-м годам ситуация начала меняться. Американская миссия «Марс Одиссей» доставила на орбиту Марса принципиально новый и никогда до того не применявшийся в изучении чужих..."
                />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className="content-wrapper limiter">
                    <div className="heading">
                        <p className="heading-top">
                            Раздел 3 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title">
                            <span>на борту марсохода:</span> Как российский нейтронный детектор нашел воду у поверхности Марса
                        </h1>
                    </div>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p>Однако к 2000-м годам ситуация начала меняться. Американская миссия «Марс Одиссей» доставила на орбиту Марса принципиально новый и никогда до того не применявшийся в изучении чужих планет прибор HEND (High Energy Neutron Detector, детектор нейтронов высоких энергий).</p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/third-page/pic1.png"}
                            alt={"Орбитальный аппарат"}
                        />
                        <figcaption className="p picture__title">
                            Орбитальный аппарат «Марс Одиссей»
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">Это довольно компактный прибор, разработанный в Институте космических исследований РАН и несущий приемник нейтронного излучения. Он регистрировал нейтроны с энергиями от 0,4 электронвольт до 15 мегаэлектронвольт. Нейтроны эти идут от поверхности Марса, и по соотношению в этом потоке нейтронов разных энергий можно понять, какие нейтроны марсианская поверхность поглощает лучше, а какие — хуже. Разные химические элементы поглощают и отражают нейтроны по разному — а значит, HEND мог выяснить состав самых верхних слоев планеты.</p>
                        </div>
                    </div>
                    <div className={cx('grid', styles.gridIllstr)}>
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    HEND
                                </div>
                                <p className="p--label grid-aside-item__text">
                                    Мощность в 5,7 ватт  <br /> Масса: 3695 г
                                </p>
                            </div>
                        </div>
                        <div className="grid-content"></div>
                        <div className={styles.pageIllstr}>
                            <StaticImage
                                placeholder={"none"}
                                className="picture__img"
                                src={"../images/content/third-page/illstr.png"}
                                alt={"Схема"}
                            />
                        </div>
                        <div className={cx('heading2', styles.pageSubtitle)}>HEND совершил революцию, определив состав верхних слоев планеты.</div>
                    </div>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">Дело в том, что при столкновении с атомом водорода нейтроны теряют до половины своей энергии, то есть, найти лед или водосодержащие минералы таким прибором вполне реально — а вот альтернативные методы с такой же надежностью сделать это не могут. В итоге была составлена первая карта подповерхностной воды на Марсе.</p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/third-page/pic2.png"}
                            alt={"Карта"}
                        />
                        <figcaption className="p picture__title">
                        Карты нейтронного излучения Марса по данным прибора ХЕНД в пределах от 60° северной до 60° южной широты; Цветовая шкала соответствует оценкам массовой доли воды в грунте Марса 
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">
                            Хотя ХЕНД и сегодня — спустя двадцать лет! — успешно работает на орбите Марса, американская сторона решила, что нейтронное «окно» в гидросферу Красной планеты стоит расширить. Поэтому NASA интегрировало в свой следующий марсоход Curiosity еще более продвинутый российский прибор ДАН (Dynamic Albedo of Neutrons, динамическое альбедо нейтронов). В отличие от ХЕНД, ДАН имеет не только пассивный режим работы («прослушивание» естественного нейтронного фона), но и импульсный генератор нейтронов для активного режима поиска воды.
                            </p>
                            <p className="p--light">
                            Генератор выдает по десятку миллионов нейтронов за каждый импульс, и отслеживая изменение их скоростей после частичного отражения от грунта, можно получить более детальное представление о том, сколько же воды под той или иной точкой местной поверхности.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Redirect
                to='/page4'
                count='04'
                title='Exomars – '
                text='этапы экспедиции'
            />
        </div>
    );
};

export default ThirdPage;
