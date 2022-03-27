import React, { useEffect, useRef } from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles/page4.module.scss";

import { Redirect } from "~/components/Redirect/Redirect.tsx";
import { Helmet } from "react-helmet";

import textImg from "~/images/content/fourth-page/text.png";
import illstrImg from "~/images/content/fourth-page/Illstr.png";
import item1 from '~/images/content/fourth-page/item1.png';
import item2 from '~/images/content/fourth-page/item2.png';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

function getImgUrl(imageName: string) {
    return `/frames/out${imageName}.png`
}

function preloadCacheFrames() {
    const images: HTMLImageElement[] = []
    for (let i = 1; i < 216; i++) {
      const index = i
      const src = getImgUrl(`${index}`)
      const img = new Image()
      img.src = src
      images.push(img)
    }
    return images
}


// FourthPage
const FourthPage = () => {

    gsap.registerPlugin(ScrollTrigger);

    const scrollerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<HTMLDivElement>(null)
    const animationContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {

        // Get images
        const images = preloadCacheFrames()

        // Frames
        let scene = {frame: 60}
        let beginScene = {frame: 1}

        // Horizontal scrolling
        const anim1 = gsap.to(scrollerRef.current, {
            x: () => -(scrollerRef.current.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: scrollerRef.current,
                invalidateOnRefresh: true,
                pin: true,
                start: "top top",
                scrub: 1,
                end: () => "+=" + scrollerRef.current.offsetWidth,
            },
        });

        // Sequence animation
        const anim2 = gsap.to(scene, {
            frame: 216,
            snap: 'frame',
            onUpdate: render,
            scrollTrigger: {
                trigger: animationContainer.current,
                invalidateOnRefresh: true,
                start: "top top",
                scrub: 1,
                end: 'bottom bottom',
            },
        });

        // On-load animation
        const anim3 = gsap.to(beginScene, {
            frame: 60,
            snap: 'frame',
            onUpdate: renderFirst,
            duration: 2
        });

        // Preload images
        images[scene.frame].onload = () => {
            requestAnimationFrame(render)
        }
      
        // Rendering sequence animation
        function render() {
            const image = images[scene.frame]
            if (!animationRef.current || !image) {
              return
            }
            animationRef.current.style.background = `url(${image.src}) no-repeat center / cover`
        }

        // Rendering onLoad animation
        function renderFirst() {
            const image = images[beginScene.frame]
            if (!animationRef.current || !image) {
              return
            }
            animationRef.current.style.background = `url(${image.src}) no-repeat center / cover`
        }

        return () => {

            anim1.kill()
            anim2.kill()
            anim3.kill()

        }
    }, []);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Exomars – этапы экспедиции</title>
                <meta name="description" content="Этапы экспедиции" />
            </Helmet>
            <section className={cx("content", styles.page)}>
                <div className={cx('content-wrapper limiter', styles.heading)}>
                    <div className="heading">
                        <p className="heading-top" data-aos={'fade-down'}>
                            Раздел 4 <span>Время чтения: 2-4 мин.</span>
                        </p>
                        <h1 className="heading__title" data-aos={'zoom-in'}>
                            <span>Exomars – </span> этапы экспедиции
                        </h1>
                    </div>
                </div>
                <div className={styles.animation} ref={animationContainer}>
                    <div className={styles.animationFixedTexts}>
                        <div className="limiter">
                            <div className={styles.animationTexts}>
                                    <div className="grid-aside-item" data-aos={'fade-down'} data-aos-delay={'0'}>
                                        <div className="heading1 grid-aside-item__count">
                                            400
                                        </div>
                                        <p className="grid-aside-item__label">
                                            <b>млн км</b>
                                        </p>
                                        <p className="grid-aside-item__text">Максимальная дистанция между Землей и Марсом</p>
                                    </div>
                                    <div className="grid-aside-item" data-aos={'fade-down'} data-aos-delay={'200'}>
                                        <div className="heading1 grid-aside-item__count">
                                            569
                                        </div>
                                        <p className="grid-aside-item__label">
                                            <b>млн км</b>
                                        </p>
                                        <p className="grid-aside-item__text">Общая дистанция путешествия</p>
                                    </div>
                                    <div className="grid-aside-item" data-aos={'fade-down'} data-aos-delay={'400'}>
                                        <div className="heading1 grid-aside-item__count">
                                            9
                                        </div>
                                        <p className="grid-aside-item__label">
                                            <b>месяцев</b>
                                        </p>
                                        <p className="grid-aside-item__text">Время путешествия</p>
                                    </div>
                                    <div className="grid-aside-item" data-aos={'fade-down'} data-aos-delay={'600'}>
                                        <div className="heading1 grid-aside-item__count">
                                            3-22
                                        </div>
                                        <p className="grid-aside-item__label">
                                            <b>митут</b>
                                        </p>
                                        <p className="grid-aside-item__text">Задержка радиосигнала между Землей и Марсом</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.animationWrapper}>
                        <div className={styles.animationSequence}>
                            <div className={styles.animationSequenceInner} ref={animationRef}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.scroller} ref={scrollerRef}>
                    <div className={styles.scrollerWrapper}>
                        <div className={styles.scrollerText}>
                            <img src={textImg} alt="Text" />
                        </div>
                        <div className={styles.scrollerIllstr}>
                            <img src={illstrImg} alt="Illstr" />
                        </div>
                    </div>
                </div>
                <div className="content-wrapper limiter">
                    <div className={styles.items}>
                        <div className={styles.itemsBlock}>
                            <p className={cx('p--label', styles.itemsBlockTitle)}>
                                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0V8.00141C10.6667 8.00335 21.3333 8.00403 32 8.00346V0H0Z" fill="white"/>
                                    <path d="M0 16.0067C10.6666 16.007 21.3333 16.0073 32 16.0076V8.00345C21.3333 8.00354 10.6667 8.00286 0 8.0014V16.0067Z" fill="#4A89DC"/>
                                    <path d="M0 16.0067V24H32V16.0076C21.3333 16.0072 10.6666 16.0069 0 16.0067Z" fill="#ED5565"/>
                                </svg>
                                <b>Казачок (платформа)</b>
                            </p>
                            <p className={cx('p--light', styles.itemsBlockDescr)}>
                                > 800 кг 45 кг — научные приборы <br /> Изучение атмосферы и недр Марса
                            </p>
                            <img className={styles.itemsBlockIllstr1} src={item1} alt="" />
                        </div>
                        <div className={styles.itemsBlock}>
                            <p className={cx('p--label', styles.itemsBlockTitle)}>
                                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="24" rx="2" fill="#003399"/>
                                    <path d="M16 2.5L16.3368 3.53647H17.4266L16.5449 4.17705L16.8817 5.21353L16 4.57295L15.1183 5.21353L15.4551 4.17705L14.5734 3.53647H15.6632L16 2.5Z" fill="#E1BD00"/>
                                    <path d="M16 18.5L16.3368 19.5365H17.4266L16.5449 20.1771L16.8817 21.2135L16 20.5729L15.1183 21.2135L15.4551 20.1771L14.5734 19.5365H15.6632L16 18.5Z" fill="#E1BD00"/>
                                    <path d="M12 3.5L12.3368 4.53647H13.4266L12.5449 5.17705L12.8817 6.21353L12 5.57295L11.1183 6.21353L11.4551 5.17705L10.5734 4.53647H11.6632L12 3.5Z" fill="#E1BD00"/>
                                    <path d="M20 17.5L20.3368 18.5365H21.4266L20.5449 19.1771L20.8817 20.2135L20 19.5729L19.1183 20.2135L19.4551 19.1771L18.5734 18.5365H19.6632L20 17.5Z" fill="#E1BD00"/>
                                    <path d="M9 6.5L9.33677 7.53647H10.4266L9.54491 8.17705L9.88168 9.21353L9 8.57295L8.11832 9.21353L8.45509 8.17705L7.57342 7.53647H8.66323L9 6.5Z" fill="#E1BD00"/>
                                    <path d="M23 14.5L23.3368 15.5365H24.4266L23.5449 16.1771L23.8817 17.2135L23 16.5729L22.1183 17.2135L22.4551 16.1771L21.5734 15.5365H22.6632L23 14.5Z" fill="#E1BD00"/>
                                    <path d="M8 10.5L8.33677 11.5365H9.42658L8.54491 12.1771L8.88168 13.2135L8 12.5729L7.11832 13.2135L7.45509 12.1771L6.57342 11.5365H7.66323L8 10.5Z" fill="#E1BD00"/>
                                    <path d="M24 10.5L24.3368 11.5365H25.4266L24.5449 12.1771L24.8817 13.2135L24 12.5729L23.1183 13.2135L23.4551 12.1771L22.5734 11.5365H23.6632L24 10.5Z" fill="#E1BD00"/>
                                    <path d="M9 14.5L9.33677 15.5365H10.4266L9.54491 16.1771L9.88168 17.2135L9 16.5729L8.11832 17.2135L8.45509 16.1771L7.57342 15.5365H8.66323L9 14.5Z" fill="#E1BD00"/>
                                    <path d="M23 6.5L23.3368 7.53647H24.4266L23.5449 8.17705L23.8817 9.21353L23 8.57295L22.1183 9.21353L22.4551 8.17705L21.5734 7.53647H22.6632L23 6.5Z" fill="#E1BD00"/>
                                    <path d="M12 17.5L12.3368 18.5365H13.4266L12.5449 19.1771L12.8817 20.2135L12 19.5729L11.1183 20.2135L11.4551 19.1771L10.5734 18.5365H11.6632L12 17.5Z" fill="#E1BD00"/>
                                    <path d="M20 3.5L20.3368 4.53647H21.4266L20.5449 5.17705L20.8817 6.21353L20 5.57295L19.1183 6.21353L19.4551 5.17705L18.5734 4.53647H19.6632L20 3.5Z" fill="#E1BD00"/>
                                </svg>
                                <b>Розалинд франклин (марсоход)</b>
                            </p>
                            <p className={cx('p--light', styles.itemsBlockDescr)}>
                                310 кг 27 кг — научные приборы <br /> Поиск биологических маркеров на поверхности <br /> и в грунте Четвертой планеты, для чегоу аппарата есть первый в истории изучения Марса двухметровый бур
                            </p>
                            <img className={styles.itemsBlockIllstr2} src={item2} alt="" />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">
                                ДАН не просто стал первым долго работающим
                                российским научным прибором на поверхности
                                Марса. Он еще и продолжил «нейтронную революцию»
                                в поисках местной воды. Пока Curiosity едет, он
                                работает в пассивном режиме, лишь улавливая
                                нейтроны естественного фона. На остановках,
                                однако, он излучает нейтроны. Всего прибор
                                провел более 5000 сеансов пассивной регистрации
                                нейтронов и более тысячи сеансов активного
                                изучения грунта планеты.
                            </p>
                            <p className="p--light">
                                Результаты впечатляют: хотя Curiosity работает в
                                очень низких широтах, где никто не ожидал
                                сохранности водного льда, ДАН нашел в местном
                                грунте по 1-2% воды по массе, и а в отдельных
                                точках — и до 5%. Это означает, что и в теплых
                                зонах Красной планеты под поверхностью может
                                быть вода — и условия для существования
                                микроорганизмов.
                            </p>
                        </div>
                    </div>
                    <blockquote className={cx("blockquote", styles.blockquote)}>
                        <p>
                            В 2015 году NASA удостоило российских физиков из
                            Института космических исследований и Института
                            геохимии и аналитической химии РАН{" "}
                            <span>наградой Group Achievement Award</span>.
                        </p>
                    </blockquote>
                    <div className="grid">
                        <div className="grid-aside"></div>
                        <div className="grid-content">
                            <p className="p--light">
                                Фактически, «нейтронно-водная революция»
                                изменила все видение перспектив изучения Красной
                                планеты: оно существенно сместилось в сторону
                                поиска там следов жизни.
                            </p>
                        </div>
                    </div>
                    <figure className="picture">
                        <StaticImage
                            placeholder={"none"}
                            className="picture__img"
                            src={"../images/content/fourth-page/pic1.png"}
                            alt={"ДАН"}
                        />
                        <figcaption className="p picture__title">
                            ДАН на борту Кьюриосити
                        </figcaption>
                    </figure>
                </div>
            </section>
            <Redirect
                to="/page5"
                count="05"
                title="Первый ExoMars:"
                text="хлороводород и другие газы"
            />
        </div>
    );
};

export default FourthPage;
