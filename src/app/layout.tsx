import '@styles/globals.css';
import {PropsWithChildren} from "react";

const RootLayout = ({children}: PropsWithChildren) => {
    return (
        <html lang={"en"}>
            <head>
                <title>tomheaton/nextjs-template</title>
                <meta name="description" content="Generated from tomheaton/nextjs-template"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
