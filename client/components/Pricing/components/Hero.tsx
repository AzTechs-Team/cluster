import { createContact } from "@/helpers/appwrite";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Hero = () => {
    const [name, setName] = useState("");
    const [uniName, setUniName] = useState("");
    const [email, setEmail] = useState("");
    const toast = useToast();

    const connect = async() => {
        try {
            if(!name.length || !uniName.length || !email.length){
                toast({
                    title: "Enter all details",
                    status: "error",
                    duration: 4000,
                });
            }else{
                await createContact({name:name, uniName: uniName, email:email});
                toast({
                    title: "Thanks for reaching out! We will get back to you soon!!",
                    status: "success",
                    duration: 4000,
                });
                setName('');
                setEmail('');
                setUniName('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box mb={20}>
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
                <Box
                    w={"fit-content"}
                    bgColor={"rgba(0,0,0,0.2)"}
                    borderRadius={"full"}
                    p={1}
                    mb={8}
                >
                    <Text
                        borderRadius={"full"}
                        textTransform={"uppercase"}
                        bgColor={"primaryLight"}
                        px={6}
                        fontWeight={700}
                    >
                        embark on an adventure
                    </Text>
                </Box>

                <Box w={{ base: "full", lg: "lg" }}>
                    <Heading>Get started today</Heading>
                    <Text textStyle={"body"} mb={4}>
                        You are one step away from hassle-free development cycle
                    </Text>

                    <Input
                        mb={4}
                        type="text"
                        bgColor={"white"}
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        mb={4}
                        type="text"
                        bgColor={"white"}
                        placeholder="Enter university name"
                        value={uniName}
                        onChange={(e) => setUniName(e.target.value)}
                    />
                    <Input
                        mb={4}
                        type="email"
                        bgColor={"white"}
                        placeholder="Enter university email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button variant={"secondary"} w={"full"} onClick={connect}>
                        Submit
                    </Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Hero;
