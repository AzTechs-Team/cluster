import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Home = () => {
    const [email, setEmail] = useState('');
    const toast = useToast();
    const router = useRouter();

    const validateEmail = () => {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email.length < 0 || !email.match(emailRegex)) {
                toast({
                    title: "Enter valid email",
                    status: "error",
                    duration: 4000,
                });
                return false;
            }
            return true;
    };

    const login = () => {
        try {
            if(validateEmail()){
                // authenticate user
                router.replace("/explore", "/explore");
            }
        } catch (error) {
            console.log("Error logging in", error);
        }
    }

    return (
        <Flex
            mx={{ base: -6, md: "auto" }}
            bgColor={"primary"}
            borderRadius={"xl"}
            align={"center"}
            py={10}
            px={{ base: 4, lg: 24 }}
            flexDir={"column"}
            className="dots"
            mb={20}
            boxShadow={"dark-lg"}
        >
            <Heading mb={8}>Start exploring!</Heading>
            <Box w={{ base: "full", lg: "md" }}>
                <FormControl pb={2}>
                    <FormLabel textStyle={"subHeading"} fontSize={"sm"}>
                        Login with email
                    </FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        borderColor={"primary"}
                        bgColor={"primaryLight"}
                        placeholder="Enter college email"
                    />
                </FormControl>
                <Button variant={"secondary"} w={"full"} onClick={login}>
                    Login
                </Button>
            </Box>
        </Flex>
    );
};

export default Home;
