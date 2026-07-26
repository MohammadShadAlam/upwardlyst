import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "animate.css";

import BootstrapClient from "./BootstrapClient";
import Providers from "./Providers";

export const metadata = {
    title: "Marko - Digital Marketing Agency",
    icons: {
        icon: "/assets/images/favicon.ico",
    },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
                <BootstrapClient />
            </body>
        </html>
    );
}
