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
    useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { userDetailsState } from "@/provider";
import { getUserDetails, updatePassword, updateUser } from "@/helpers/appwrite";

const Edit = () => {
    const router = useRouter();
    const [user, setUser] = useRecoilState(userDetailsState);
    const [name, setName] = useState(user.userName);
    const [bio, setBio] = useState(user.bio);
    const [email, setEmail] = useState(user.userEmail);
    const [password, setPassword] = useState("");
    const toast = useToast();

    const update = async () => {
        if (!name.length || !bio.length || !email.length || (!user.onBoarded && !password.length)) {
            toast({
                title: "Enter all details",
                status: "error",
                duration: 4000,
            });
        } else {
            await updatePassword(password);
            await updateUser(user.id, name, bio, true);
            const res = await getUserDetails(user.id);
            if (res) {
                setUser({
                    bio: res.bio,
                    id: res.$id,
                    eventId: res.eventId,
                    userEmail: res.userEmail,
                    userName: res.userName,
                    userType: res.userType,
                    onBoarded: res.onBoarded,
                });

                localStorage.removeItem("user");

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
            }
        }
    };

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
                    />
                </FormControl>
                <FormControl pb={2}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter bio"
                        isReadOnly
                        isDisabled
                    />
                </FormControl>
                <FormControl pb={2}>
                    <FormLabel>Bio</FormLabel>
                    <Textarea
                        placeholder="Here is a sample placeholder"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </FormControl>
                {!user.onBoarded && (
                    <FormControl pb={2}>
                        <FormLabel>Update password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                        />
                    </FormControl>
                )}
                <Button variant={"primary"} onClick={update}>
                    {" "}
                    Update{" "}
                </Button>
            </Stack>
        </Stack>
    );
};

export default Edit;
