import { Box, Button, Flex, HStack, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { events } from "@/configs/eventsContent";
import { users } from "@/configs/userContent";
import { EventProps } from "@/models/contentModels";
import EventCard from "@/components/tokens/EventCard";
import SearchBox from "@/components/tokens/Searchbox";
import { eventsState } from "@/provider";
import { useRecoilState } from "recoil";

const PastEvents = () => {
    // const user = users[0];
    const [events, setEvents] = useRecoilState(eventsState);
    const pastEvents: Array<EventProps> = [];
    const [search, setSearch] = useState("");

    events.filter((e) => {
        if (new Date(e.date).getTime() < new Date().getTime()) {
            pastEvents.push(e);
        }
    });

    const [filteredEvents, setFilteredEvents] = useState(pastEvents);

    const searchFilterFunction = (text: string) => {
        if (text) {
            const newData = pastEvents.filter(function (item) {
                const userData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return userData.indexOf(textData) > -1;
            });
            setFilteredEvents(newData);
            setSearch(text);
        } else {
            setFilteredEvents(pastEvents);
            setSearch(text);
        }
    };

    
    // setFilteredEvents(pastEvents);

    // user.eventId.forEach((e) => {
    // const details = events.filter((ev) => ev.id === e)[0];
    // if (new Date(details.date).getTime() < new Date().getTime()) {
    //     pastEvents.push(details);
    // }
    // });

    return (
        <Flex flexDir={"column"} align={"flex-start"} mb={20}>
            <Heading mb={8} textAlign={"center"}>
                Past events
            </Heading>
            <Flex mb={4} flexDir={{ base: "column", md: "row" }} w={"full"} gap={2}>
                <Box w={{ base: "full" }}>
                    <SearchBox
                        onChange={(text) => searchFilterFunction(text.target.value)}
                        value={search}
                    />
                </Box>
                {/* <Button variant={"primary"} mb={8}>
                    Add new event
                </Button> */}
            </Flex>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={10} justify={"center"}>
                {filteredEvents.map((event, i) => (
                    <EventCard {...event} key={i} />
                ))}
            </Flex>
        </Flex>
    );
};

export default PastEvents;
