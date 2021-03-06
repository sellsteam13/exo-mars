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
                    <div className="grid">
                        <div className={cx('grid-aside grid-aside-inline', styles.firstOrder)}>
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    2
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>земных года</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Планируемая продолжительность миссии
                                </p>
                            </div>
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    45
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>килограмма</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Масса полезной нагрузки
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p>Российская посадочная платформа имеет гарантийный срок работы в год, но предполагается, что она может проработать намного больше. Это вызвано ее ключевой особенностью: неподвижностью. Она не только обнуляет риски застревания, но и позволяет иметь большую площадь солнечных батарей, развернутых в разные стороны от платформы.</p>
                            <p className="p--light">После высадки марсоход «Розалинд Франклин» съедет с российской платформы по трапам, а та, получая энергию от раскинутых в стороны фотоэлементов, начнет использовать свою научную аппаратуру для сбора информации с места посадки.</p>
                            <p className="p--light">С приборным оснащением у «Казачка» все хорошо. Он несет инфракрасный Фурье-спектрометр FAST (Fourier spectrometer to study the atmosphere), спектрометр M-DLS (Multi-channel Diode-Laser Spectrometer) и газовый хроматограф-масс-спектрометр MGAP (Martian Gas-Analytic Package). Первый анализирует весь атмосферный столб над платформой, а вот остальные – два более «приземленные»: они способны точно оценить концентрации тех или иных газов именно в нижних слоях атмосферы.</p>
                        </div>
                    </div>
                    <div className="heading2 page__subtitle">Почему это важно? </div>
                    <div className="grid">
                        <div className="grid-aside is-empty"></div>
                        <div className="grid-content">
                            <p>Некоторые американские исследователи после того, как ТГО не обнаружил метан в марсианской атмосфере, заговорили о том, что этот газ может выделяться из приповерхностных источников, и поэтому его якобы и сложно зарегистрировать с орбиты.</p>
                            <p className="p--light">Сходную позицию можно услышать и по загадочным сезонным «пикам» уровня кислорода в местной атмосфере. Временами Curiosity фиксировал его концентрацию в районе 400 частей на миллион, много выше обычной марсианской — причем это было в теплое время года.</p>
                            <p className="p--light">Если M-DLS и MGAP «Казачка» подтвердят колебания уровней этих газов у марсианской поверхности — это придаст вес гипотезам о «подземных оазисах» микробной жизни. Напротив, если они ее опровергнут, это позволит окончательно закрыть вопрос с метаново-кислородными «странностями», зафиксированными более ранними марсоходами.</p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/seventh-page/pic1.png"}
                            alt={"M-DLS"}
                        />
                        <figcaption className="p picture__title">
                            M-DLS
                        </figcaption>
                    </figure>
                    <div className="grid">
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className="heading1 grid-aside-item__count">
                                    1,5
                                </div>
                                <p className="grid-aside-item__label">
                                    <b>метра</b>
                                </p>
                                <p className="grid-aside-item__text">
                                Глубина поиска воды <br /> с помощью гамма-нейтронного спектрометра АНДРОН-ЭМ
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p className="p--light">M-DLS – лазерный спектрометр, массой в 2,6 килограмм. Он состоит из пяти лазеров, дающих импульсы в определенном диапазоне. За счет анализа поглощения этих импульсов местной атмосферой прибор «понимает», какие именно поглощающие соединения он там обнаружил. MGAP имеет массу в десяток килограмм. Он состоит из многоразового термоанализатора и газового хроматографа. Так называют прибор для разделения смеси веществ на компоненты. Помимо этого, MGAP включает масс-спектрометр высокого разрешения.</p>
                            <p className="p--light">«Казачок» не забудет и про подповерхностную марсианскую воду. У него есть гамма-нейтронный спектрометр АДРОН-ЭМ (Active Detection of Radiation of Nuclei-ExoMars), массой 5,6 килограмм. Прибор — продвинутая версия ДАН. Он способен «разглядеть» воду на глубине до 1,5 метров. Сходный российский прибор АДРОН-РМ (Autonomous Detector of Radiation of Neutrons Onboard Rover at Mars) есть и на борту марсохода «Розалинд Франклин». </p>    
                        </div>
                    </div>
                    <div className="heading2 page__subtitle">После того, как планетоход отъедет от платформы, оба прибора смогут работать дополняя друг друга.</div>
                    <div className="grid">
                        <div className="grid-aside no-styles">
                            <div className="grid-aside-item">
                                <StaticImage
                                    placeholder={"none"}
                                    className="picture__img"
                                    src={"../images/content/seventh-page/pic2.png"}
                                    alt={"Illustration"}
                                />
                                <p className="grid-aside-item__label is-gradient">
                                    <b>АДРОН-ЭМ</b>
                                </p>
                                <p className="grid-aside-item__text">
                                    Масса около 1.7 кг <br /> Потребление 5 Вт
                                </p>
                            </div>
                        </div>
                        <div className="grid-content">
                            <p className="p--light">Фиксируя изменения потока нейтронов по мере удаления «Розалинд Франклин» от «Казачка», можно будет дать ответ на очень важный вопрос: как именно распределена вода в приповерхностном грунте. Одиночный прибор, даже такой продвинутый, как ДАН у Curiosity, не позволяет отличить один «толстый» водосодержащий слой в марсианском реголите от нескольких слоев потоньше.</p>
                            <p className="p--light">Когда планетоход удалится от «Казачка» на большое расстояние, АДРОН-ЭМ будет работать уже в одиночку — отслеживая уровень радиации на поверхности. Это весьма важно в свете возможных пилотируемых полетов на Марс. Curiosity уже фиксировал уровень радиации, но он подвижен, а будущая марсианская база будет неподвижна. Важно понять, как на протяжении года колеблется космическая радиация именно в одной точке, и тут АДРОН-РМ будет первым, кто сможет дать детальную картину.</p>
                            <p className="p--light">Чтобы понять, насколько потенциально обитаемы подповерхностные слои четвертой планеты, недостаточно одного обнаружения там воды. Те же вырабатывающие метан бактерии на Земле активны только при температуре выше нуля. Насколько теплы содержащие воду слои марсианского грунта — вопрос, на который до сих пор было сложно дать точный ответ.</p>    
                        </div>
                    </div>
                    <div className="heading2 page__subtitle">Поэтому на борту «Казачка» есть пассивный радиометр PAT-M, весом в 0,6 килограмм. </div>
                    <div className="grid">
                        <div className="grid-aside is-empty"></div>
                        <div className={cx('grid-content', styles.pageCircles)}>
                            <p className="p--light">Он принимает микроволны с частотой от 6 до 20 гигагерц. По ним можно будет судить о температуре на трех уровнях глубины в местном грунте — до метра вниз. Естественно, что если в точке посадки найдут воду, где температура периодически достигает нуля градусов, перспективы местной жизни будут выглядеть совсем иначе, чем если в этом слое вечно царит -20.</p>
                            <p className="p--light">Разумеется, этим список возможностей «Казачка» не исчерпывается. У него есть набор из шести камер TSPP, комплекс SEM (1,5 килограмма), фиксирующий «марсотрясения», комплекс METEO-M (3,5 килограмма), фиксирующий давление, влажность, запыленность и падающее солнечное излучение. Магнитометр MAIGRET (1,5 килограмма), с чешским волновым анализатором WAM (Wave Analyser Module), выяснит и то, насколько сильно меняется здесь локальное магнитное поле. Этот комплекс попробует прояснит и трагическую судьбу «Марса-3» — он способен выявить электрические разряды во время пылевых бурь, один из которых мог погубить советский посадочный аппарат.</p>
                            <p className="p--light">Кроме российских комплексов, на борту «Казачка» есть и два европейских прибора. Шведский HABIT (Habitability, Brine Irradiation and Temperature package) содержит соли, улавливающие водяной пар из атмосферы. Если они справятся с этим хорошо, в будущих миссиях подобным образом можно будет собирать воду. Бельгийский прибор LaRa (Lander Radioscience experiment) сможет улавливать радиосигнал от крупных наземных антенн и тут же возвращать его обратно — радиосеанс на 350 миллионов километр. Отслеживая изменения в частоте возвращенного радиосигнала, ученые с высокой точностью измерят легкие изменения наклона оси вращения Марса. А они напрямую прямо зависят от диаметра жидкого ядра планеты — до сих пор неизвестного точно.</p>
                        </div>
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
