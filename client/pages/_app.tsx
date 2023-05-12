import "@/styles/globals.css";
import "@/styles/animations.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/components/tokens/theme";
import Layout from "@/components/layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <RecoilRoot>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RecoilRoot>
            </ChakraProvider>
        </>
    );
}
