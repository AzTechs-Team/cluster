import React, { FC } from "react";

import Meta from "@/components/tokens/Meta";
import { EventProps } from "@/models/contentModels";
import Event from "@/components/Event";
import {events} from '@/configs/eventsContent';
import ErrorCard from "@/components/tokens/ErrorCard";
import { getEvent } from "@/helpers/appwrite";

type Props = {
    data: EventProps;
}

const EventPage: FC<Props> = (props) => {
    return (
        <>
            <Meta />
            {props.data? <Event {...props} /> : <ErrorCard /> }
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;

    const data = await getEvent(slug);
    if(!data)
        return {
            props: {
                data: null
            }
        }

    return {
        props: {
            data: data
        },
    };
}

export default EventPage;
