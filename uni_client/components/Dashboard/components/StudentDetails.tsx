import SearchBox from "@/components/tokens/Searchbox";
import { universities, users } from "@/configs/userContent";
import { UserProps } from "@/models/contentModels";
import { Avatar, Box, Button, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const StudentDetails = () => {
    const uni = universities[0];
    const studentDetails: Array<UserProps> = [];
    const [search, setSearch] = useState("");
    const [filteredStudentDetails, setFilteredStudentDetails] = useState(studentDetails);

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

    uni.eventId.forEach((s:any) => {
        studentDetails.push(users.filter((u) => u.id == s)[0]);
    });

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
                <Button variant={"primary"} mb={8}>
                    Add student
                </Button>
            </Flex>
            <Stack gap={4}>
                {filteredStudentDetails.map((user, i) => (
                    <HStack key={i} w={"full"} bgColor={"primaryLight"} p={4} borderRadius={"lg"}>
                        <Avatar size={"md"} name={user.userName.slice(0, 1)} bgColor={"primary"} />
                        <Text>{user.userName}</Text>
                    </HStack>
                ))}
            </Stack>
        </Box>
    );
};

export default StudentDetails;
