import React from "react";
import cx from "classnames";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useScrollBlock } from "~/hooks/useScrollBlock";

import * as styles from "./Header.module.scss";
import { Footer } from "~/components/Footer/Footer";

// Illustrations
import illstr1 from "~/images/content/nav-illstr/item1.png";
import illstr2 from "~/images/content/nav-illstr/item2.png";
import illstr3 from "~/images/content/nav-illstr/item3.png";
import illstr4 from "~/images/content/nav-illstr/item4.png";
import illstr5 from "~/images/content/nav-illstr/item5.png";
import illstr6 from "~/images/content/nav-illstr/item6.png";
import illstr7 from "~/images/content/nav-illstr/item7.png";
import illstr8 from "~/images/content/nav-illstr/item8.png";

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();

    function toggleMenu() {
        setMenuState(!menuState);
        if (menuState) {
            allowScroll();
        } else {
            blockScroll();
        }
    }

    return (
        <div>
            <header className={styles.header}>
                <Link to="/" className={styles.headerLogo}>
                    <StaticImage
                        placeholder={"none"}
                        src={"../../images/nakedScience-logo.png"}
                        alt={"Naked Science Logotype"}
                    />
                </Link>
                <button
                    onClick={toggleMenu}
                    aria-label={"Menu"}
                    title={"Menu"}
                    className={cx("btn", styles.headerBurger, menuState ? styles.headerBurgerActive : '')}
                ></button>
                <div className={styles.headerSocials}>
                    <Link
                        to={"/"}
                        rel={"nofollow"}
                        target={"_blank"}
                        className={cx(
                            styles.headerSocialsLink,
                            styles.headerSocialsLinkVk
                        )}
                    >
                        <svg
                            viewBox="0 0 24 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.0313 18.8416C12.0313 18.8416 12.4103 18.7994 12.6045 18.5905C12.7822 18.3992 12.776 18.0381 12.776 18.0381C12.776 18.0381 12.7524 16.3519 13.534 16.1029C14.3043 15.8581 15.2934 17.7336 16.3431 18.4547C17.1361 19 17.738 18.8807 17.738 18.8807L20.543 18.8416C20.543 18.8416 22.0097 18.751 21.3144 17.5957C21.2568 17.5011 20.9087 16.7408 19.2293 15.1791C17.4699 13.5444 17.7061 13.8088 19.824 10.9806C21.1141 9.25844 21.6297 8.20703 21.4684 7.75745C21.3154 7.32742 20.3663 7.44161 20.3663 7.44161L17.209 7.46116C17.209 7.46116 16.9748 7.42927 16.8012 7.53317C16.6318 7.63502 16.5219 7.87267 16.5219 7.87267C16.5219 7.87267 16.0227 9.20495 15.3561 10.3387C13.95 12.7296 13.3881 12.8561 13.1581 12.708C12.623 12.3613 12.7565 11.317 12.7565 10.5753C12.7565 8.25744 13.1077 7.29141 12.0734 7.04141C11.7304 6.95808 11.4777 6.90356 10.5995 6.8943C9.4728 6.88298 8.51964 6.89841 7.97938 7.16281C7.61989 7.33873 7.34257 7.73173 7.51205 7.75436C7.72055 7.78214 8.19302 7.88193 8.44364 8.22349C8.76718 8.66484 8.75588 9.65453 8.75588 9.65453C8.75588 9.65453 8.94179 12.3829 8.32141 12.7213C7.89619 12.9538 7.31279 12.4796 6.05869 10.3099C5.41674 9.19877 4.93195 7.97041 4.93195 7.97041C4.93195 7.97041 4.83848 7.74099 4.67106 7.61753C4.46872 7.46836 4.18626 7.42206 4.18626 7.42206L1.18607 7.44161C1.18607 7.44161 0.735172 7.45396 0.569807 7.65045C0.42293 7.82432 0.558509 8.18542 0.558509 8.18542C0.558509 8.18542 2.90751 13.6904 5.56773 16.4651C8.00712 19.0082 10.7762 18.8416 10.7762 18.8416H12.0313Z" />
                        </svg>
                    </Link>
                    <Link
                        to={"/"}
                        rel={"nofollow"}
                        target={"_blank"}
                        className={cx(
                            styles.headerSocialsLink,
                            styles.headerSocialsLinkTg
                        )}
                    >
                        <svg
                            viewBox="0 0 24 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.29684 15.051L9.29661 15.0509L9.29687 15.0506L9.29688 15.0505L9.29693 15.0506L16.0127 8.85712C16.3075 8.58978 15.9483 8.45942 15.5571 8.7019L7.26848 14.0458L3.68826 12.9038C2.91509 12.6619 2.90954 12.119 3.86185 11.7286L17.8131 6.23103C18.4503 5.9354 19.0653 6.38743 18.8221 7.38408L16.4462 18.8259C16.2803 19.639 15.7996 19.8334 15.1335 19.4578L11.5143 16.7252L9.77459 18.454C9.76911 18.4594 9.76365 18.4649 9.75822 18.4703C9.56365 18.6639 9.40267 18.824 9.05041 18.824L9.29684 15.051Z" />
                        </svg>
                    </Link>
                    <Link
                        to={"/"}
                        rel={"nofollow"}
                        target={"_blank"}
                        className={cx(
                            styles.headerSocialsLink,
                            styles.headerSocialsLinkTwitter
                        )}
                    >
                        <svg
                            viewBox="0 0 24 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12.7704 9.8507L12.8051 10.413L12.227 10.3441C10.1229 10.0802 8.28476 9.18514 6.72404 7.68189L5.96102 6.93599L5.76448 7.48681C5.34829 8.71466 5.61419 10.0114 6.48126 10.8835C6.94369 11.3654 6.83965 11.4343 6.04194 11.1474C5.76448 11.0556 5.5217 10.9868 5.49858 11.0212C5.41766 11.1015 5.69512 12.1458 5.91477 12.5589C6.21536 13.1326 6.82808 13.6949 7.49862 14.0277L8.0651 14.2916L7.39457 14.3031C6.74716 14.3031 6.72404 14.3146 6.7934 14.5556C7.02462 15.3014 7.93793 16.0932 8.95529 16.4375L9.67206 16.6785L9.04777 17.0457C8.1229 17.5735 7.03618 17.8719 5.94946 17.8948C5.42922 17.9063 5.00146 17.9522 5.00146 17.9866C5.00146 18.1014 6.41189 18.744 7.23272 18.9965C9.69518 19.7424 12.6201 19.4211 14.8167 18.1473C16.3774 17.2408 17.9381 15.4391 18.6664 13.6949C19.0595 12.7654 19.4526 11.0671 19.4526 10.2523C19.4526 9.72448 19.4873 9.65563 20.1347 9.02449C20.5162 8.65728 20.8746 8.25565 20.9439 8.14089C21.0595 7.92286 21.048 7.92287 20.4584 8.11794C19.4757 8.4622 19.337 8.4163 19.8225 7.89991C20.1809 7.53271 20.6087 6.86714 20.6087 6.67206C20.6087 6.63764 20.4352 6.69501 20.2387 6.79829C20.0306 6.91304 19.5682 7.08517 19.2214 7.18845L18.5971 7.38353L18.0306 7.00485C17.7184 6.79829 17.2791 6.56879 17.0479 6.49994C16.4583 6.33928 15.5566 6.36223 15.0247 6.54584C13.5796 7.06222 12.6663 8.39335 12.7704 9.8507Z" />
                        </svg>
                    </Link>
                    <Link
                        to={"/"}
                        rel={"nofollow"}
                        target={"_blank"}
                        className={cx(
                            styles.headerSocialsLink,
                            styles.headerSocialsLinkFb
                        )}
                    >
                        <svg
                            viewBox="0 0 24 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M13.3968 21.8886V13.6926H16.1618L16.5728 10.4836H13.3968V8.43956C13.3968 7.51356 13.6548 6.87956 14.9838 6.87956H16.6678V4.01856C15.8484 3.93076 15.0248 3.88836 14.2008 3.89156C11.7568 3.89156 10.0788 5.38356 10.0788 8.12256V10.4776H7.33179V13.6866H10.0848V21.8886H13.3968Z" />
                        </svg>
                    </Link>
                </div>
            </header>
            <div className={cx(styles.menu, menuState ? styles.menuVisible : '')}>
                <div className={styles.menuWrapper}>
                    <Link onClick={toggleMenu} to="/page1" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>01</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"?????? ???????????????? ???? ???????????? ??? "}>
                                    ?????? ???????????????? ???? ???????????? ???
                                </b>
                                ???????? ???? ?????????? ???? ?????????????? ???????????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr1
                                )}
                                src={illstr1}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page2" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>02</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"?????????????????? ????????????: "}>
                                    ?????????????????? ????????????:
                                </b>
                                ???????????? ????????????, ???????????? ??????????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr2
                                )}
                                src={illstr2}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page3" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>03</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"???? ?????????? ??????????????????:"}>
                                    ???? ?????????? ??????????????????:
                                </b>
                                ?????? ???????????????????? ???????????????? ?????????? ???????? <br /> ?? ??????????????????????
                                ??????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr3
                                )}
                                src={illstr3}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page4" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>04</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"Exomars ??? "}>Exomars ??? </b>
                                ?????????? ????????????????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr4
                                )}
                                src={illstr4}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page5" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>05</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"???????????? ExoMars:"}>
                                    ???????????? ExoMars:
                                </b>
                                ???????????????????????? ?? ???????????? ????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr5
                                )}
                                src={illstr5}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page6" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>06</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"ExoMars-2022"}>ExoMars-2022</b>???
                                ????????????, ???????????????????? ?? ???????????????????? <br /> ??????????????????, ??
                                ????????????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr6
                                )}
                                src={illstr6}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page7" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>07</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"??????????????????:"}>??????????????????:</b>
                                ???????????? ???????????????????????????? ??????????????????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr7
                                )}
                                src={illstr7}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Link onClick={toggleMenu} to="/page8" className={styles.menuLink}>
                        <span className={styles.menuLinkWrapper}>
                            <span className={cx("p p--label", styles.menuLinkCount)}>
                                <b>08</b>
                            </span>
                            <span
                                className={cx("heading3", styles.menuLinkText)}
                            >
                                <b data-alt={"?????????????????? ??????????????????:"}>
                                    ?????????????????? ??????????????????:
                                </b>
                                ???????????????????? ???? ??????????
                            </span>
                            <img
                                className={cx(
                                    styles.menuLinkIllstr,
                                    styles.menuLinkIllstr8
                                )}
                                src={illstr8}
                                alt={"Illustration 1"}
                            />
                        </span>
                    </Link>
                    <Footer />
                </div>
            </div>
        </div>
    );
};
