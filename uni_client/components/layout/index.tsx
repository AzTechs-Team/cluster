import React, { FC, ReactNode, useEffect } from "react";
import { Inter, Roboto_Mono } from 'next/font/google';
import { Box, ScaleFade } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
import { inter, space_grotesk } from "../tokens/fonts";
import { useRecoilState } from "recoil";
import { userDetailsState } from "@/provider";

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useRecoilState(userDetailsState);


    useEffect(() => {
        const details = localStorage.getItem("user");
        if (details) {
            const d = JSON.parse(details);
            setUserDetails(d);

            if(!d.onBoarded){
                router.replace("/profile/edit");
            }

            if (d.userType === "Student" && router.asPath == "/dashboard")
                router.replace("/explore", "/explore");

            if (d.userType !== "Student" && router.asPath == "/explore")
                router.replace("/dashboard", "/dashboard");

            if (d.userType === "Student" && router.asPath == "/") router.replace("/explore", "/explore");
            else if(router.asPath == "/") router.replace("/dashboard", "/dashboard");
        }
    }, [router.asPath]);
    
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
