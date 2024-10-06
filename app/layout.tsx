import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "../styles/mainLayout.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/[...nextauth]";
import LoginBtn from "@/pages/LoginBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trip-Flutter",
  description: "여행의 즐거움, 트리플러터",
};

export default async function RootLayout({ children,}: Readonly<{  children: React.ReactNode;}>) {
    await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i" />
        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={style.body}>
        <Header />
        <LoginBtn />
        <div className={style.childrenContainer}>{children}</div>


        <Footer />
        
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.waypoints.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/aos.js"></script>
        <script src="js/jquery.animateNumber.min.js"></script>
        <script src="js/scrollax.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false">
        </script>
        <script src="js/google-map.js"></script>
        <script src="js/main.js"></script>
      </body>
    </html>
  );
}
