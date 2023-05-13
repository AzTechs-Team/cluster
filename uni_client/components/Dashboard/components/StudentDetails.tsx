import SearchBox from "@/components/tokens/Searchbox";
import { universities, users } from "@/configs/userContent";
import { getAllUsers } from "@/helpers/appwrite";
import { UserProps } from "@/models/contentModels";
import { allUserDetailsState } from "@/provider";
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Stack,
    Text,
    useDisclosure,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    FormLabel,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

const StudentDetails = () => {
    // const uni = universities[0];
    // const studentDetails: Array<UserProps> = [];
    const [search, setSearch] = useState("");
    const [studentDetails, setStudentDetails] = useState<Array<UserProps>>([]);
    const [filteredStudentDetails, setFilteredStudentDetails] = useState<Array<UserProps>>([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState("");
    const toast = useToast();

    useEffect(() => {
        async function fetch() {
            let response = await getAllUsers();
            const e: Array<UserProps> = [];
            response.documents.forEach((i: any) =>
                e.push({
                    bio: i.bio,
                    eventId: i.eventId,
                    id: i.$id,
                    onBoarded: i.onBoarded,
                    userEmail: i.userEmail,
                    userName: i.userName,
                    userType: i.userType,
                })
            );
            setStudentDetails(e);
            setFilteredStudentDetails(e);
            console.log(e);
        }

        fetch();
    }, []);

    const searchFilterFunction = (text: string) => {
        if (text) {
            const newData = studentDetails.filter(function (item) {
                const userData = item.userName ? item.userEmail.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return userData.indexOf(textData) > -1;
            });
            setFilteredStudentDetails(newData);
            setSearch(text);
        } else {
            setFilteredStudentDetails(studentDetails);
            setSearch(text);
        }
    };

    const addData = async () => {
        if (!data.length) {
            toast({
                title: "Enter all details",
                status: "error",
                duration: 4000,
            });
        } else {
            // func to add users
            try {
                const res = await axios.post(
                    "https://cloud.appwrite.io/v1/functions/64599c9913234a3eb5f8/executions",
                    {
                        data: JSON.stringify({ emails: data.split(",") }),
                        async: true,
                    },
                    {
                        headers: {
                            "X-Appwrite-Project": "6456b0de0dcdeaf88721",
                        },
                    }
                );
                setData("");
                console.log(res);

                toast({
                    title: "Added students",
                    status: "success",
                    duration: 4000,
                });
            } catch (error) {
                console.log(error);
            } finally {
                onClose();
            }
        }
    };

    // .eventId.forEach((s:any) => {
    //     studentDetails.push(users.filter((u) => u.id == s)[0]);
    // });

    return (
        <Box mb={20}>
            <Heading mb={10}>Student Details</Heading>
            <Flex mb={4} flexDir={{ base: "column", md: "row" }} w={"full"} gap={2}>
                <Box w={{ base: "full" }}>
                    <SearchBox
                        onChange={(text) => searchFilterFunction(text.target.value)}
                        value={search}
                    />
                </Box>
                <Button variant={"primary"} mb={8} onClick={onOpen}>
                    Add student
                </Button>
            </Flex>
            <Stack gap={4}>
                {filteredStudentDetails.map((user, i) => (
                    <HStack key={i} w={"full"} bgColor={"primaryLight"} p={4} borderRadius={"lg"}>
                        <Avatar size={"md"} name={user.userName.slice(0, 1)} bgColor={"primary"} />
                        <Text>{user.onBoarded ? user.userName : user.userEmail}</Text>
                    </HStack>
                ))}
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add students</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormLabel>Enter student details</FormLabel>
                        <Textarea
                            rows={10}
                            placeholder="Enter strigified user details"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button variant={"ghost"} mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addData}>
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default StudentDetails;
