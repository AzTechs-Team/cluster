import React, { useState } from "react";
import {
    Stack,
    HStack,
    IconButton,
    Text,
    Divider,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Edit = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Stack mb={20}>
            <HStack onClick={router.back} mt={-4} cursor={"pointer"}>
                <IconButton icon={<ArrowBackIcon />} size="sm" aria-label="back" />
                <Text cursor={"pointer"}>Back</Text>
            </HStack>
            <Divider />

            <Stack w={{ base: "full", lg: "lg" }}>
                <Heading mt={2} mb={6}>
                    Edit profile
                </Heading>
                <FormControl pb={2}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        bgColor={"primaryLight"}
                    />
                </FormControl>
                <FormControl pb={2}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter bio"
                        bgColor={"primaryLight"}
                    />
                </FormControl>
                <FormControl pb={2}>
                    <FormLabel>Bio</FormLabel>
                    <Textarea placeholder="Here is a sample placeholder" bgColor={"primaryLight"} />
                </FormControl>
                <Button variant={"primary"}> Update </Button>
            </Stack>
        </Stack>
    );
};

export default Edit;
