import { auth } from "@/helpers/appwrite";
import { loggedInState, userDetailsState } from "@/provider";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
    const [userDetails, setUserDetails] = useRecoilState(userDetailsState);
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

    const login = async () => {
        try {
            if (validateEmail()) {
                // authenticate user

                const res = await auth(email, password);
                console.log(res);
                if (res === false) throw "Error";

                setLoggedIn(true);
                setUserDetails({
                    bio: res.bio,
                    id: res.$id,
                    eventId: res.eventId,
                    userEmail: res.userEmail,
                    userName: res.userName,
                    userType: res.userType,
                    onBoarded: res.onBoarded,
                });

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        bio: res.bio,
                        id: res.$id,
                        eventId: res.eventId,
                        userEmail: res.userEmail,
                        userName: res.userName,
                        userType: res.userType,
                        onBoarded: res.onBoarded,
                    })
                );

                router.replace("/profile", "/profile");
            }
        } catch (error) {
            toast({
                title: "Error logging in",
                status: "error",
                duration: 4000,
            });
            setLoggedIn(false);
            console.log("Error logging in", error);
        }
    };

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
                        University email
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
                <FormControl pb={4}>
                    <FormLabel textStyle={"subHeading"} fontSize={"sm"}>
                        Password
                    </FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        borderColor={"primary"}
                        bgColor={"primaryLight"}
                        placeholder="Enter password"
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
