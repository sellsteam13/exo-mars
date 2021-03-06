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
                        <p className="heading__subtitle">Смогут ли наблюдения с орбиты решить загадку марсианской жизни — и ее следов, в виде метана и кислорода?</p>
                    </div>
                    <div className="grid">
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    21/109
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>Содержание метана</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    До 21 части метана на миллиард частей атмосферы было выявлено при наблюдениях.
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p>
                                В 2004 году искусственный спутник Mars Express Европейского космического агентства обнаружил в атмосфере Красной планеты неожиданные «пятна», участки, где отмечалось наличие метана. Следует понимать исключительную важность этого газа для изучения Марса. Многие земные археи в присутствии водорода (выделяется при контакте воды и некоторых горных пород) получают энергию за счет реакции CO2 + 4 H2 -> CH4 + 2 H2O. Иными словами, метан может быть признаком жизни. Открытие было несколько неожиданным: в те годы над многими еще довлели представления о Марсе как о безводной и безжизненной пустыне.
                            </p>
                            <p className="p--light">
                                Но дальнейшая история марсианского метана внезапно стала очень запутанной. Curiosity сначала годами не мог его обнаружить, а затем, в 2019 году, выявил до 21 части метана на миллиард частей атмосферы Марса. При этом за сутки до и через сутки после этот же район наблюдали из космоса искусственные спутники четвертой планеты — и не увидели с орбиты никакого метана.
                            </p>
                        </div>
                    </div>
                    <blockquote className={cx('blockquote', styles.blockquote)}>
                        <p>
                            Это очень странное поведение для этого газа. Сам по себе метан не может распадаться за сутки — его время жизни в марсианских условиях должно составлять сотни лет.
                        </p>
                    </blockquote>
                    <div className="grid">
                        <div className="grid-aside is-empty"></div>
                        <div className="grid-content">
                            <p className="p--light">
                            Когда Роскосмос и Европейской космическое агентство готовили миссию ExoMars-2016, то ее ключевой целью поставили именно поиск следов жизни на Красной планете. Исходно миссия состояла из орбитального (Trace Gas Orbiter, TGO) и спускаемого («Скиапарелли») аппаратов, которые должны были дополнять друг друга. Однако из-за ошибок в расчетах «Скиапарелли» врезался в поверхность планеты, и ТГО оказался единственным компонентом миссии. Впрочем, не стоит драматизировать: «Скиапарелли» все равно не имел долгосрочных источников энергии, и мог проработать не более 8 суток (на аккумуляторах).
                            </p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/fifth-page/pic1.png"}
                            alt={"Посадочный модуль"}
                        />
                        <figcaption className="p picture__title">
                            Посадочный модуль «Скиапарелли» / ©Wikimedia Commons
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside is-empty"></div>
                        <div className="grid-content">
                            <p className="p--light">А вот ТГО начал работать в 2016 году и продолжает делать это до сих пор. На его борту, кроме российского нейтронного детектора ФРЕНД (FREND), брата-близнеца ХЕНД, установлен Фурье-спектрометр, специально предназначенный для поиска малейших примесей в марсианской атмосфере. Несмотря на это, за годы наблюдений никаких признаков метана он не обнаружил.</p>
                            <p className="p--light">Спутник может изучать местную газовую оболочку «на просвет», анализируя спектры солнечного света, проходящего через атмосферу Марса на закате и восходе.</p>
                        </div>
                    </div>
                    <div className="heading2 page__subtitle">То, что СПУтник не обнаружил метан означает, что в значимых количествах в атмосфере в целом этого газа здесь и не должно быть.</div>
                    <div className="grid">
                        <div className="grid-aside no-styles">
                            <div className={styles.pageMolecule}></div>
                        </div>
                        <div className="grid-content">
                            <p className="p--light">И еще об изучении атмосферы «на просвет». На борту ТГО этим занимается Atmospheric Chemistry Suite (Комплекс для изучения химии атмосферы), созданный в Институте космических исследований РАН. Комплексом его зовут не случайно: он включает три инфракрасных спектрометра, обладающих исключительно высокими чувствительностью и спектральным разрешением. К началу 2020-го года его наблюдения дали необычный результат: во время пылевых бурь на Марсе есть от 1 до 4 частей хлороводорода на миллиард (по объему). Аналогичный по задачам бельгийский прибор NOMAD на борту ТГО подтвердил его наблюдения. Это принципиально отличает ситуацию от более раннего открытия метана: тот не удавалось найти двумя разными приборами в одни сутки, а тут налицо синхронное открытие, сводящее вероятность ошибки к минимуму.</p>
                            <p>Следует подчеркнуть: открытие хлороводорода само по себе не означает, как это иногда не вполне корректно отражают в прессе, «безжизненности Марса». Да, хлороводород опасен для живых существ, но лишь в заметных концентрациях. Четыре части на миллиард к таким не относятся: в конце концов, хлороводород периодически встречается и на Земле, в районах, где частицы морской соли поднимаются в воздух.</p>
                        </div>
                    </div>
                    <div className="heading2 page__subtitle">Важность российского «хлороводородного» открытия в другом: </div>
                    <div className="grid">
                        <div className="grid-aside">
                            <p className="grid-aside__text">Российское «хлороводородное» открытие показывает, что даже газы с очень малой концентрацией (один к миллиарду) с орбиты Марса найти можно.</p>
                        </div>
                        <div className="grid-content">
                            <p className="p--light">Оно показывает, что даже газы с очень малой концентрацией (один к миллиарду) с орбиты Марса найти можно. А раз так, то необнаружение там метана больше похоже на реальность, чем более ранние результаты европейского Mars Express и американского Curiosity.</p>
                            <p className="p--light">Впрочем, с хлороводородом интригует и другое. Очевидных механизмов извлечения хлора из хлоридов на поверхности Марса и его контакта с водородосодержащими соединениями пока не просматривается. Просто поднять «сухие» соли местного грунта в воздух недостаточно: откуда-то должен взяться еще и водород. И если над земными морями его источником служит вода, то на более сухой четвертой планете ее намного меньше. Ученым только предстоит предложить полное теоретическое объяснение этому открытию. Не очень очевидно и то, куда хлороводород столь быстро исчезает с окончанием местных бурь. Для этого нужны какие-то быстро протекающие химические процессы, наличие которых пока тоже не установлено.</p>
                        </div>
                    </div>
                    <div className={styles.pageIllstr}>
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/fifth-page/illstr.png"}
                            alt={"Иллюстраци"}
                        />
                    </div>
                    <div className={cx(styles.pageIllstr, styles.pageIllstrMobile)}>
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/fifth-page/illstr@mobile.png"}
                            alt={"Иллюстраци"}
                        />
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
