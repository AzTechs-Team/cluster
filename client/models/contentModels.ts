type EventContentProps = {
    title: string;
    description: Array<string>;
};

type LocationProps = {
    address: string;
    city: string;
    mapUrl: string;
};

type EventProps = {
    id: number;
    name: string;
    previewImage: string;
    photos: Array<string>;
    university: string;
    date: string;
    time: string;
    details: string;
    previewDetails: string;
    slug: string;
    tags: Array<string>;
    location: LocationProps;
    shortDescription: Array<EventContentProps>;
    longDescription: Array<EventContentProps>;
};

type FAQProps = {
    answer: string;
    question: string;
};

type CollegeProps = {
    name: string;
    imgUrl: string;
    link: string;
};

type AboutProps = {
    description: string;
    colleges: Array<CollegeProps>;
};


export type {
    EventProps,
    AboutProps,
    CollegeProps,
    EventContentProps,
    LocationProps,
    FAQProps
};
