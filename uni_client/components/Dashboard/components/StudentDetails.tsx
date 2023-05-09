import { universities, users } from "@/configs/userContent";
import { UserProps } from "@/models/contentModels";
import { Avatar, Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const StudentDetails = () => {
    const uni = universities[0];
    const studentDetails:Array<UserProps> = [];

    uni.registeredStudents.forEach((s) => {
        studentDetails.push(users.filter((u) => u.id == s)[0]);
    });

    return (
        <Box mb={20}>
            <Heading mb={10}>Student Details</Heading>
            <Stack gap={4}>
                {studentDetails.map((user, i) => (
                    <HStack key={i} w={"full"} bgColor={"primaryLight"}>
                        <Avatar size={"md"} name={user.userName.slice(0, 1)} bgColor={"primary"} />
                        <Text>{user.userName}</Text>
                    </HStack>
                ))}
            </Stack>
        </Box>
    );
};

export default StudentDetails;
