import React, { FC, ReactNode } from "react";
import { Inter, Roboto_Mono } from 'next/font/google';
import { Box, ScaleFade } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
import { inter, space_grotesk } from "../tokens/fonts";

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter();
    
    return (
        <Box display={"flex"} flexDir={"column"} bgColor={"background"} className={`${inter.variable} ${space_grotesk.variable}`}>
            <Box flexGrow={1} flexShrink={0} flexBasis={"auto"}>
                <Navbar />
                <ScaleFade key={router.route} initialScale={0.9} in={true}>
                    <Box mt={{ base: 28, xl: 36 }} px={{ base: 6, md: 12, lg: 24 }} w={"full"}>
                        {children}
                    </Box>
                </ScaleFade>
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
