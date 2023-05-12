import EventCard from "@/components/tokens/EventCard";
import SearchBox from "@/components/tokens/Searchbox";
import { events } from "@/configs/eventsContent";
import { eventsState } from "@/provider";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const EventsGrid = () => {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useRecoilState(eventsState);
    const [filteredEvents, setFilteredEvents] = useState(events);

    const searchFilterFunction = (text: string) => {
        if (text) {
            const newData = events.filter(function (item) {
                const userData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return userData.indexOf(textData) > -1;
            });
            setFilteredEvents(newData);
            setSearch(text);
        } else {
            setFilteredEvents(events);
            setSearch(text);
        }
    };

    return (
        <Box mb={20}>
            <Heading mb={8} textAlign={"center"}>
                More upcoming events
            </Heading>
            <Flex w={{ base: "full" }} mb={6} justifyContent={"center"}>
                <Box w={{base: "full", md: "lg" }}>
                    <SearchBox
                        onChange={(text) => searchFilterFunction(text.target.value)}
                        value={search}
                    />
                </Box>
            </Flex>
            <Flex flexDir={"row"} flexWrap={"wrap"} gap={10} justify={"center"}>
                {events.map((event, i) => (
                    <EventCard {...event} key={i} />
                ))}
            </Flex>
        </Box>
    );
};

export default EventsGrid;
