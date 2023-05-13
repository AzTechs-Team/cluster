import React from "react";
import { Avatar, Box, Flex, HStack, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { users } from "@/configs/userContent";
import { EditIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Details = () => {
    const user = users[0];

    return (
        <Box mb={20}>
            <Box bgColor={"primaryLight"} p={6} borderRadius={"lg"}>
                <Flex
                    borderRadius={"lg"}
                    w={"full"}
                    flexDir={{ base: "column-reverse", md: "row" }}
                    mb={6}
                    justify={"space-between"}
                    align={{ base: "flex-start", md: "center" }}
                >
                    <HStack align={"center"} gap={2}>
                        <Avatar size={"lg"} name={user.userName.slice(0, 1)} bgColor={"primary"} />
                        <Stack>
                            <Text mb={"-1rem"}>Welcome</Text>
                            <Heading>{user.userName}</Heading>
                        </Stack>
                    </HStack>
                    <Link href="/profile/edit">
                        <IconButton
                            icon={<EditIcon />}
                            size="sm"
                            aria-label="back"
                            alignSelf={{ base: "flex-end", md: "center" }}
                        />
                    </Link>
                </Flex>
                <Text px={2}>{user.bio}</Text>
            </Box>
        </Box>
    );
};

export default Details;
