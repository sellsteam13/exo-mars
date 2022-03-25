import * as React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page2.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

// FirstPage
const FirstPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Советский подход: первые успехи, первые неудачи
                </title>
                <meta
                    name="description"
                    content="ССР первым начал изучение Марса – 10 октября 1960 года, еще до первого полета человека в космос, с Байконура взлетел «Марс 1960А», 650-килограммовая автоматическая..."
                />
            </Helmet>
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
                    <div className={cx('grid', styles.gridFirst)}>
                        <StaticImage
                            className={cx(styles.gridIllustration, styles.gridIllustration1)}
                            placeholder={"none"}
                            src={"../images/content/second-page/items/1.png"}
                            alt={"Item 1"}
                        />
                        <div className={styles.gridCount}>
                            <StaticImage
                                placeholder={"none"}
                                src={"../images/content/second-page/1960.png"}
                                alt={"Item 1"}
                            />
                        </div>
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className={cx("heading1 grid-aside-item__count", styles.gridAsideTitle)}>
                                    <span>Марс 1960А</span>
                                </div>
                                <p className="grid-aside-item__text">
                                    Масса: 650 кг <br /> РН: Молния 8K78
                                </p>
                            </div>
                        </div>
                        <div className={cx('grid-content', styles.contentFirst)}>
                            <p className="p--light">СССР первым начал изучение Марса – 10 октября 1960 года, еще до первого полета человека в космос, с Байконура взлетел «Марс 1960А», 650-килограммовая автоматическая межпланетная станция (АМС). Это была лишь заря эры космонавтики, и ракета потерпела аварию. </p>
                        </div>
                    </div>
                    <div className={cx('grid', styles.gridSecond)}>
                        <StaticImage
                            className={cx(styles.gridIllustration, styles.gridIllustration2)}
                            placeholder={"none"}
                            src={"../images/content/second-page/items/2.png"}
                            alt={"Item 2"}
                        />
                        <div className={styles.gridCount}>
                            <StaticImage
                                placeholder={"none"}
                                src={"../images/content/second-page/1962.png"}
                                alt={"Item 1"}
                            />
                        </div>
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className={cx("heading1 grid-aside-item__count", styles.gridAsideTitle)}>
                                    Марс-1
                                </div>
                                <p className="grid-aside-item__text">
                                    Масса: 893,5 кг <br /> РН: Молния T103-16
                                </p>
                            </div>
                        </div>
                        <div className={cx('grid-content', styles.contentThird)}>
                            <p className="p--light">1 ноября 1962 года был запущен «Марс-1», зонд, который уже удалось вывести на траекторию полета к Красной планете.  Увы, в 106 миллионах километрах от Земли система ориентации аппарата перестала работать, антенны не удавалось направить в нужную сторону, и связь с аппаратом прервалась. Впрочем, до этого он успел показать уровень космического излучения  в межпланетном пространстве.</p>
                        </div>
                    </div>
                    <div className={cx('grid', styles.gridThird)}>
                        <StaticImage
                            className={cx(styles.gridIllustration, styles.gridIllustration3)}
                            placeholder={"none"}
                            src={"../images/content/second-page/items/3.png"}
                            alt={"Item 3"}
                        />
                        <div className={styles.gridCount}>
                            <StaticImage
                                placeholder={"none"}
                                src={"../images/content/second-page/1971-1973.png"}
                                alt={"Item 1"}
                            />
                        </div>
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className={cx("heading1 grid-aside-item__count", styles.gridAsideTitle)}>
                                    Марс-2
                                </div>
                                <p className="grid-aside-item__text">
                                    Масса: 4625 кг <br /> РН: Протон-К 
                                </p>
                            </div>
                        </div>
                        <div className={cx('grid-content', styles.contentThird)}>
                            <p className="p--light">В 1971-1972 годах к Красной планете приблизились советские станции «Марс-2» и «Марс-3». Они были первыми «двухкомпонентными» системами для изучения чужой планеты: несли как искусственный спутник для изучения Марса с орбиты вокруг него, так и посадочный модуль с аппаратом для работы на марсианской поверхности. Затем такая схема стала классической — именно ее применяли и американские «Викинги», и многие другие миссии, вплоть до наших дней.</p>
                        </div>
                    </div>
                    <div className={cx('grid', styles.gridFourth)}>
                        <StaticImage
                            className={cx(styles.gridIllustration, styles.gridIllustration4)}
                            placeholder={"none"}
                            src={"../images/content/second-page/items/4.png"}
                            alt={"Item 4"}
                        />
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className={cx("heading1 grid-aside-item__count", styles.gridAsideTitle)}>
                                    Марс-3
                                </div>
                                <p className="grid-aside-item__text">
                                    МСпускаемый аппарат <br />
                                    Мощностью 800 ватт <br />
                                    Масса: 355 кг <br />
                                    РН: Протон-К/Блок Д
                                </p>
                            </div>
                        </div>
                        <div className={cx('grid-content', styles.contentFourth)}>
                            <p className="p--light">Однако если орбитальные компоненты «Марса-2» и «Марса-3» проработали многие месяцы, и передали ценные сведения о составе его атмосферы и многом другом, то со вторыми частями все было не так гладко. У «Марс-2» посадка прошла нештатно: посадочный аппарат разбился. «Марс-3» смог совершить мягкую посадку и даже 14,5 секунд проработал на передачу телевизионного сигнала. Однако затем он вышел из строя по до сих пор не установленной причине.</p>
                            <p className="p--light">Свою роль могла сыграть пыльная буря, случившаяся в момент посадки: ветер до 140 м/с был способен помешать действительно мягкой посадке, да и исключить коронный разряд, повредивший системы связи станции, в таких условиях довольно сложно. В итоге имевшиеся на борту обоих посадочных модулей минимарсоходы (на фото ниже) так и не смогли начать работу.</p>
                        </div>
                    </div>
                    <div className={cx('grid', styles.gridFifth)}>
                        <StaticImage
                            className={cx(styles.gridIllustration, styles.gridIllustration5)}
                            placeholder={"none"}
                            src={"../images/content/second-page/items/5.png"}
                            alt={"Item 5"}
                        />
                        <div className="grid-aside">
                            <div className="grid-aside-item">
                                <div className={cx("heading1 grid-aside-item__count", styles.gridAsideTitle)}>
                                    Проп-м
                                </div>
                                <p className="grid-aside-item__text">
                                    Масса: 355 кг <br /> РН: Протон-К/Блок Д
                                </p>
                            </div>
                        </div>
                        <div className={cx('grid-content', styles.contentFifth)}>
                            <p className="p--light">Первые попытки исследования Красной планеты, предпринятые в XX веке, выглядели обескураживающим ударом по надеждам землян. Те же советские миссии «Марс-2» и «Марс-3» отчетливо показали, что водяного пара в атмосфере там в пять тысяч раз меньше, чем на Земле.</p>
                            <p className="p--light">Эту же линию продолжили успешно работавшие на Марсе американские посадочные аппараты «Викинг». Одна из бортовых систем показала наличие в местном грунте признаком жизни, но эти результаты интерпретировали как ошибку наблюдений (сейчас этот взгляд оспаривается). Эксперименты по поиску воды в марсианском грунте были проведены с накладками, из-за чего ее точное содержание также не удалось определить (была получена лишь крайне примерная оценка в 1%).</p>
                            <p className="p--light">Все это сильно изменило взгляды на марсианские реалии. Потенциально обитаемая планета из романов фантастов той эпохи внезапно превратилась в холодную и почти безвоздушную пустыню. Следы прошлых водяных потоков с орбиты выглядели не слишком значительными и убедительными (да и разглядеть что-то с орбиты в те годы было сложнее из-за слабой аппаратуры для наблюдений). На десятки лет интерес к исследованию планеты заметно снизился.</p>
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
        </div>
    );
};

export default FirstPage;
