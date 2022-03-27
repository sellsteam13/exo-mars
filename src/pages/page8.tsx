import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page8.module.scss";

import { Footer } from "~/components/Footer/Footer";
import { Helmet } from "react-helmet";
import { Socials } from "~/sections/socials/Socials";

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
                    <div className="grid">
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    7,5
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>см</b>
                                </p>
                                <p className="grid-aside-item__text">
                                Глубина сверление поверхности марса <br /> у Curiosity
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p>У европейского марсохода есть и уникальный прибор, делающие его по научному потенциалу чрезвычайно сильным исследователем Красной планеты. Все дело в том, что до него бурение — а точнее сказать, сверление — поверхности Марса осуществлялось марсоходами на глубину не более 7,5 сантиметров (все тем же Curiosity).</p>
                            <p className="p--light">Был еще специализированный бур InSight у NASA, но его создатели попытались уйти от сложностей создания настоящего бура и использовали вместо него безопорное подпрыгивающее устройство. Оно наткнулось на твердый грунт, и глубже первых сорока сантиметров так и не ушло.</p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/eighth-page/pic1.png"}
                            alt={"Район посадки"}
                        />
                        <figcaption className="p picture__title">
                            Предполагаемый район посадки «Казачка» и «Розалинд Франклин» / ©Европейское космическое агентство 
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside is-empty"></div>
                        <div className="grid-content">
                            <p className="p--light">В итоге подповерхностный Марс остается настоящей terra incognita. Как мы уже упоминали, на Земле исследования самых сухих частей Атакамы не позволяли выявить ничего живого на глубине менее метра. Оттуда слишком легко испаряется вода — а без воды нет жизни.</p>
                            <p className="p--light">На Марсе ситуация еще острее. Близко к поверхности там слишком холодно и слишком велики скачки температур, а вот от метра и ниже ситуация может быть иной. Поэтому здесь полноценное исследование подземных очагов жизни возможно только и исключительно при помощи полноценного бурения на глубину от метра.</p>
                            <p className="p--light">«Розалинд Франклин» в этом плане оснастили лучше предшественников: у нее есть двухметровый раскладной бур, который разрабатывали для неоднократного использования. Это означает, что когда спектрометр АДРОН-РМ на борту марсохода найдет грунт, в котором будет определенное содержание воды, то можно будет забуриться туда — а интегрированный в бур инфракрасный спектрометр Ma-MISS (Mars Multispectral Imager for Subsurface Studies) попутно выяснит состав стенок скважины.</p>   
                        </div>
                    </div>
                    <div className={cx('grid', styles.pageGrid)}>
                        <div className={styles.pageYear}>
                            <StaticImage
                                placeholder={"none"}
                                className="picture__img"
                                src={"../images/content/eighth-page/2020.png"}
                                alt={"2020"}
                            />
                        </div>
                        <div className={styles.pageIllstr}>
                            <StaticImage
                                placeholder={"none"}
                                className="picture__img"
                                src={"../images/content/eighth-page/illstr.png"}
                                alt={"Illustration"}
                            />
                        </div>
                        <div className={cx('grid-aside no-styles', styles.pageGridAside)}>
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                Розалинд Франклин
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>Спускаемый аппарат</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Масса:	310 кг <br /> Мощность солнечной <br /> батареи: 1200 Вт <br /> РК: Протон и Протон-М
                                </p>
                            </div>
                        </div>
                        <div className="grid-content is-empty"></div>
                    </div>
                    <div className="grid">
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    ISEM
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>ИК-спектрометр</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Для минералогической оценки объектов на поверхности
                                </p>
                            </div>
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    Wisdom
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>Радиолокатор</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Для выявления структуры грунта под марсоходом
                                </p>
                            </div>
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    ADRON <br /> -RM
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>Нейтронный спектрометр</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Для поиска подповерхностной воды и гидратированных материалов и выявления наилучших мест для взятия образцов
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p className="p--light">Но кроме этого бур сможет извлечь вверх 8 образцов грунта диаметром в сантиметр и высотой около 3 сантиметров. Спектрометр видимого и инфракрасного диапазона MicrOmega вместе с рамановским спектрометром RLS (Raman Laser Spectrometer) должен определить состав анализируемых образцов и даже выявить в них органические пигменты (если они там есть).</p>
                            <p className="p--light">Кроме этого, «Розалинд Франклин» сможет изучать и то, что лежит на поверхности. Российский инфракрасный спектрометр ISEM (Infrared Spectrometer for ExoMars) позволит оценить состав камней и объектов на поверхности, радиолокатор WISDOM (Water Ice and Subsurface Deposit Observation On Mars) отследит структуру грунта под марсоходом, а гамма-нейтронный спектрометр АДРОН-РМ позволит не просто искать воду, но и находить лучшие места для забора подземных образцов. Большую роль может сыграть анализатор органических молекул МОМА (Mars Organic Molecule Analyser) — он специально предназначен для поиска биомаркеров, следов жизни.</p>
                            <p className="p--light">Разместить такое количество приборов на одной компактной и подвижной платформе было очень сложно. Многим вещам не осталось ни места, ни массы. У «Розалинд Франклин» нет радиоизотопного источника электроэнергии на российском плутонии-238, как, например, у Curiosity — только солнечные батареи. Есть, конечно, радиоизотопные подогреватели (чтобы не допустить переохлаждения приборов), но они много меньше по массе, и не могут вырабатывать электричество, откуда и нужда в солнечных батареях. Поэтому у него ночью не так много электроэнергии для обеспечения работы приборов. В случае серьезной пылевой бури ему придется «впадать в спячку», включать режим экономии энергии, как некогда американскому «Оппортьюнити». Впрочем, то же самое относится и к российской посадочной платформе «Казачок» </p>
                            <p>Следует по праву назвать «Розалинд Франклин» самым «биологически подготовленным» изо всех планетоходов, когда-либо сделанных людьми. Он способен бурить на глубину — важнейшая черта для поиска жизни в марсианских условиях. И, кроме этого, его бортовые приборы специально «заточены» под поиск биомаркеров, следов жизни.</p>
                            <p className="p--light">Эволюция роботов, исследующих Марс — от «простых» марсоходов типа «Соджорнер» до сложных миссий «Казачка» и «Розалинд Франклин» — результат не просто технического прогресса, а изменения взглядов земных ученых на Марс в последние двадцать лет. Успехи в поиске там воды и ее прошлых следов заставили совершенно иначе взглянуть на считавшуюся изученной планету. Кто знает: быть может именно эта эволюция позволит человечеству уже в 2020-х напасть на следы местной жизни. И свою роль здесь сыграет и российско-европейская миссия ExoMars-2022.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Socials/>
            <Footer/>
        </div>
    );
};

export default EighthPage;
