import React, { useEffect } from "react";
import Details from "./components/Details";
import PastEvents from "./components/PastEvents";
import { useRecoilState } from "recoil";
import { eventsState } from "@/provider";
import { getEventsData } from "@/helpers/appwrite";
import { EventProps } from "@/models/contentModels";

const Profile = () => {
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
            <Details />
            <PastEvents />
        </>
    );
};

export default Profile;
