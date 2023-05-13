import React, { useEffect } from "react";
import Highlights from "./components/Highlights";
import EventsGrid from "./components/EventsGrid";
import CTASection from "../Home/components/CTASection";
import { getEventsData } from "@/helpers/appwrite";
import { useRecoilState } from "recoil";
import { eventsState } from "@/provider";
import { EventProps } from "@/models/contentModels";

const Explore = () => {
    const [event, setEvents] = useRecoilState(eventsState);

    useEffect(() => {
        async function fetch() {
            let response = await getEventsData();
            const e: Array<EventProps> = [];
            response.documents.forEach((i) =>
                e.push({
                    date: i.date,
                    details: i.details,
                    id: i.$id,
                    location: i.location,
                    longDescription: i.longDescription,
                    name: i.name,
                    photos: i.photos,
                    previewDetails: i.previewDetails,
                    previewImage: i.previewImage,
                    shortDescription: i.shortDescription,
                    slug: i.slug,
                    tags: i.tags,
                    time: i.time,
                    university: i.university,
                })
            );
            setEvents(e);
            console.log(response.documents);
        }

        fetch();
    }, []);

    return (
        <>
            <Highlights />
            <EventsGrid />
            <CTASection />
        </>
    );
};

export default Explore;
