import React, { FC } from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import AnimateEntryBox from "@/components/tokens/AnimateEntryBox";
import { faqs } from "@/configs/faqContent";

const FAQs = () => {
    return (
        <Flex
            mx={{ base: -6, md: "auto" }}
            bgColor={"primaryLight"}
            borderRadius={"xl"}
            align={"center"}
            py={10}
            px={{ base: 4, lg: 24 }}
            flexDir={"column"}
            className="dots"
            mb={20}
        >
            <Box bgColor={"rgba(0,0,0,0.2)"} borderRadius={"full"} p={1} mb={8}>
                <Text
                    borderRadius={"full"}
                    textTransform={"uppercase"}
                    bgColor={"white"}
                    px={6}
                    fontWeight={700}
                >
                    embark on an adventure
                </Text>
            </Box>
            <Heading textAlign={"center"} mb={8}>
                Things you might be wondering
            </Heading>

            <AnimateEntryBox>
                <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    w={{ base: "full", md: "2xl", lg: "3xl" }}
                >
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            bgColor={"white"}
                            border={"0"}
                            my={4}
                            borderRadius={"lg"}
                            key={i}
                        >
                            <AccordionButton
                                fontWeight={"bold"}
                                _expanded={{
                                    color: "primary",
                                    borderColor: "primary",
                                    border: "1",
                                }}
                            >
                                <Box as="span" flex="1" textAlign="left">
                                    {faq.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb={4}>
                                <Text textStyle={"body"}>{faq.answer}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </AnimateEntryBox>
        </Flex>
    );
};

export default FAQs;
