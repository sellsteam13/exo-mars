import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { navigate } from "gatsby"
import { Link } from "gatsby";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import cx from "classnames";
import { Footer } from "~/components/Footer/Footer"

import * as styles from "./Redirect.module.scss";

export const Redirect = ({ ...rest }) => {

    gsap.registerPlugin(ScrollTrigger);
    const boxRef = useRef<HTMLDivElement>();
    const [progress, setProgress] = useState("0%");
    const [canRedirect, setCanRedirect] = useState(false);


    useEffect(() => {
        const ST = ScrollTrigger.create({
            trigger: boxRef.current,
            start: "bottom bottom",
            pin: true,
            end: '+=500px',
            onUpdate: (self) => {
                let tmpProgress = self.progress * 100;
                setProgress(tmpProgress + "%");
                if (tmpProgress > 99 && canRedirect) {
                    navigate(rest.to)
                }
            },
        });

        const updateTrigger = () => {
            
            if (!canRedirect) {
                setTimeout(() => {
                    setCanRedirect(true)
                    ScrollTrigger.refresh()
                    ScrollTrigger.update()
                }, 100)
            }
        }

        window.addEventListener('scroll', updateTrigger)

        return () => {
            window.removeEventListener('scroll', updateTrigger)
            ST.kill(false)
        }
    }, [canRedirect]);

    return (
        <div className={styles.redirect} ref={boxRef}>
            <Link
                to={rest.to}
                className={styles.redirectLink}
            >
                <span
                    className={styles.redirectLinkProgress}
                    style={{ width: progress }}
                ></span>
                <span className={styles.redirectLinkWrapper}>
                    <span className={cx("p", styles.redirectLinkCount)}>
                        <b>{rest.count}</b>
                    </span>
                    <span className={cx("heading1", styles.redirectLinkText)}>
                        <b data-alt={rest.title}>{rest.title}</b>
                        {rest.text}
                    </span>
                </span>
            </Link>
            <Footer/>
        </div>
    );

};
