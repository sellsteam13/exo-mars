import * as React from "react";
import * as styles from "./styles/Index.module.scss";

import { Intro } from "~/sections/index/Intro/Intro.tsx";
import { Navigation } from "~/sections/index/Navigation/Navigation.tsx";

// Index
const Index = () => {
    return (
        <>
            {/* Intro section */}
            <Intro />

            {/* Navigation section */}
            <Navigation />
        </>
    );
};

export default Index;
