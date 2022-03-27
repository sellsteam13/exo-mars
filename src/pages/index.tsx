import * as React from "react";

import { Intro } from "~/sections/index/Intro/Intro.tsx";
import { Navigation } from "~/sections/index/Navigation/Navigation.tsx";
import { Footer } from "~/components/Footer/Footer";
import { Helmet } from "react-helmet";

import * as styles from './styles/index.module.scss';

// Index
const Index = () => {
    return (
        <div className={styles.page}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EXOMars - 2021
                </title>
                <meta
                    name="description"
                    content="Как ответить на вопрос – Есть ли жизнь на Красной планете? Советский подход: первые успехи, первые..."
                />
            </Helmet>

            {/* Intro section */}
            <Intro />

            {/* Navigation section */}
            <Navigation />

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Index;
