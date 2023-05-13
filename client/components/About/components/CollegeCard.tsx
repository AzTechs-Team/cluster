import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Box, Flex, Text } from "@chakra-ui/react";
import { CollegeProps } from "@/models/contentModels";

const CollegeCard: FC<CollegeProps> = ({ name, imgUrl, link }) => {
    return (
        <Link legacyBehavior href={link}>
            <a target={"_blank"} rel="noopener noreferrer">
                <Flex
                    flexDir={"row"}
                    w={"full"}
                    borderRadius={"lg"}
                    bgColor={"white"}
                    _hover={{ boxShadow: "lg" }}
                    py={2}
                    px={4}
                    justify={"flex-start"}
                    align={"center"}
                    gap={6}
                >
                    {/* <Box
            w={16}
            h={16}
            pos={"relative"}
            overflow={"hidden"}
            borderRadius={"full"}
          >
            <Image src={imgUrl} fill alt="testimonials" style={{ objectFit: "contain" }}/>
          </Box> */}
                    <Text
                        textStyle={"subHeading"}
                        flexGrow={1}
                        textTransform={"uppercase"}
                        fontSize={{ base: "md" }}
                    >
                        {name}
                    </Text>
                    <Box w={3} h={3} pos={"relative"}>
                        <Image
                            src="/assets/icons/angled_arrow.svg"
                            fill
                            alt="testimonials"
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                </Flex>
            </a>
        </Link>
    );
};

export default CollegeCard;
