import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { navigate } from "gatsby"

import { ScrollTrigger } from "gsap/ScrollTrigger";

import cx from "classnames";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Footer } from "~/components/Footer/Footer"

import * as styles from "./Redirect.module.scss";

export const Redirect = ({ ...rest }) => {

    gsap.registerPlugin(ScrollTrigger);
    const boxRef = useRef<HTMLDivElement>();
    const [progress, setProgress] = useState("0%");


    useEffect(() => {
        const ST = ScrollTrigger.create({
            trigger: boxRef.current,
            start: "bottom bottom",
            pin: true,
            end: '+=500px',
            onUpdate: (self) => {
                let tmpProgress = self.progress * 100;
                setProgress(tmpProgress + "%");
                if (tmpProgress > 99) {
                    navigate(rest.to)
                }
            },
        });

        const updateTrigger = () => {
            if (window.pageYOffset < 100) {
                ST.update()
                console.log(1)
            }
        }

        window.addEventListener('scroll', updateTrigger)

        return () => {
            window.removeEventListener('scroll', updateTrigger)
            ST.kill(false)
        }
    }, []);

    return (
        <div className={styles.redirect} ref={boxRef}>
            <AniLink
                paintDrip
                color="black"
                to={rest.to}
                className={styles.redirectLink}
            >
                <div
                    className={styles.redirectLinkProgress}
                    style={{ width: progress }}
                ></div>
                <span className={styles.redirectLinkWrapper}>
                    <span className={cx("p", styles.redirectLinkCount)}>
                        <b>{rest.count}</b>
                    </span>
                    <span className={cx("heading1", styles.redirectLinkText)}>
                        <b data-alt={rest.title}>{rest.title}</b>
                        {rest.text}
                    </span>
                </span>
            </AniLink>
            <Footer/>
        </div>
    );

};
