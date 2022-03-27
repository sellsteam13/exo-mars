import * as React from "react";

// Fonts
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

// AOS animation
import AOS from 'aos'
import 'aos/dist/aos.css'

// Global styles
import "~/styles/global.scss";

// Components and sections
import { Header } from "~/components/Header/Header";

// Index
export default function Layout({ children }) {

    React.useEffect(() => {
        // AOS initting
        AOS.init({
          startEvent: 'DOMContentLoaded',
          duration: 1000,
          once: true,
          offset: window.innerHeight > 767 ? window.innerHeight * 0.2 : 100,
        })
    
        AOS.refresh()
    
      }, [])

    return (
        <div className="wrapper">
            {/* Header */}
            <Header />

            {/* Content */}
            <main className="main">
                {children}
            </main>
        </div>
    );
};

