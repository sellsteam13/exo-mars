import * as React from "react";

// Fonts
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

// Global styles
import "~/styles/global.scss";

// Components and sections
import { Header } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";

// Index
export default function Layout({ children }) {
    return (
        <div className="wrapper">
            {/* Header */}
            <Header />

            {/* Content */}
            <main className="main">
                {children}
            </main>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

