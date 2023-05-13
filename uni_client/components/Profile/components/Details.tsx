import React, { useState, useMemo } from "react";
import {
    Avatar,
    Box,
    Flex,
    HStack,
    Heading,
    IconButton,
    Stack,
    Text,
    Button,
} from "@chakra-ui/react";
import { users } from "@/configs/userContent";
import { EditIcon } from "@chakra-ui/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventHighlightCard from "@/components/tokens/EventHighlightCard";
// import { events } from "@/configs/eventsContent";
import { EventProps } from "@/models/contentModels";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { eventsState, userDetailsState } from "@/provider";

const Details = () => {
    // const user = users[0];
    const [user, setUser] = useRecoilState(userDetailsState);
    const [value, onChange] = useState(new Date());
    const [events, setEvents] = useRecoilState(eventsState);
    const [activeEvents, setActiveEvents] = useState(Array<EventProps>);
    const keyValue = useMemo(() => Math.random(), [value]);

    const registeredEventDetails: Array<EventProps> = [];
    user.eventId.forEach((element) => {
        events.forEach((e) => {
            if (e.id === element) registeredEventDetails.push(e);
        });
    });

    const eventDates: Array<string> = registeredEventDetails.map((e) =>
        new Date(e.date).toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" })
    );

    const dateChange = (value: any) => {
        onChange(value);
        let updatedData = registeredEventDetails.filter(
            (e) =>
                value.toDateString() ===
                new Date(e.date).toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" })
        );
        setActiveEvents(updatedData);

        console.log(updatedData);
    };

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

            <Flex
                flexDir={{ base: "column", xl: "row" }}
                // justify={"space-around"}
                // align={"space-between"}
                gap={{ base: 6, md: 8, xl: 12 }}
            >
                <Box mb={1} mt={8}>
                    <Calendar
                        onChange={dateChange}
                        value={value}
                        tileClassName={({ date, view }) => {
                            if (eventDates.includes(date.toDateString())) {
                                return "dateHighlight";
                            }
                        }}
                    />
                </Box>

                {!activeEvents.length ? (
                    <Flex flexDir={"column"}>
                        <Text mt={10} textStyle={"subHeading"}>
                            You don't have anything planned for today.
                        </Text>
                        <Text color={"primaryDark"}>
                            <Link href="/explore">Check out more events</Link>
                        </Text>
                    </Flex>
                ) : (
                    <Box>
                        <Text textStyle={"subHeading"}>Registered events</Text>
                        <Swiper
                            direction={"vertical"}
                            slidesPerView={1}
                            spaceBetween={20}
                            mousewheel={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{ delay: 8000 }}
                            modules={[Mousewheel, Pagination]}
                            height={276}
                            autoHeight={true}
                            key={keyValue}
                        >
                            {activeEvents.map((event, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <EventHighlightCard {...event} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Box>
                )}
            </Flex>

            <Flex w={"full"} justify={"center"} mt={8}>
                <Button variant={"primary"} size={"lg"}>
                    <Link href="/explore">Explore more events</Link>
                </Button>
            </Flex>
        </Box>
    );
};

export default Details;
