import { Button, Flex, FormControl, FormLabel, Heading, Input, Text, useToast } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Unsubscribe = () => {
    const router = useRouter();
    const toast = useToast();
    const [email, setEmail] = useState("");

    const handleUnsubscribe = async () => {
        try {
            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (email.length > 0 && email.match(emailRegex)) {
                if(!router.query.token) {
                    toast({
                        title: 'Could not find valid unsubscribe token! Please try again from the link in email',
                        status: 'error',
                        duration: 4000
                    });
                    return;
                }
                
                const data = { email: email, jwt: router.query.token }
                const res = await fetch("/api/unsubscribe-to-newletter", {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                if (res.status !== 200) throw "Unsubscribe error"

                router.replace("/", "/");
            } else{
                toast({
                    title: 'Please enter valid email',
                    status: 'error',
                    duration: 4000
                })
            }
        } catch (error) {
            console.log(error);
            toast({
                title: 'Something went wrong! Please try again',
                status: 'error',
                duration: 4000
            })
        }
    }

    return (
        <Flex flexDir={"column"} align={"center"} mb={20}>
            <Heading textAlign={"center"} fontSize={"lg"} mb={4}>We are sorry to see you go!</Heading>
            {/* <Text textAlign={"center"} mb={4}>Are you sure you want to unsubscribe?</Text> */}
            <FormControl isRequired py={6} maxWidth={"xl"}>
                <FormLabel textStyle={"subHeading"} fontSize={"sm"}>
                    Please confirm your email to unsubscribe
                </FormLabel>
                <Input type="email"  bgColor={"white"} value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Flex flexDir={{ base: "column", md: "row" }} gap={2}>
                <Button px={8} variant="primary" onClick={handleUnsubscribe}>
                    Unsubscribe
                </Button>
                <Button variant="secondary">
                    <Link href={"/"}>
                        Cancel
                    </Link>
                </Button>
            </Flex>
        </Flex>
    )
}



export default Unsubscribe