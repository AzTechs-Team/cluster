import React, { FC } from "react";

import Meta from "@/components/tokens/Meta";
import { EventProps } from "@/models/contentModels";
import Event from "@/components/Event";
import {events} from '@/configs/eventsContent';
import ErrorCard from "@/components/tokens/ErrorCard";

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

    const data = events.filter((e) => e.slug == slug);

    if(!data.length)
        return {
            props: {
                data: null
            }
        }

    return {
        props: {
            data: data[0]
        },
    };
}

export default EventPage;
