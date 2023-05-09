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

type UserProps = {
    id: Number;
    userName: string;
    userEmail: string;
    registeredEvents: Array<Number>;
    bio: string;
}

type UniversityProps = {
    id: Number;
    name: string;
    bio: string;
    email: string;
    registeredStudents: Array<Number>;
}

export type {
    EventProps,
    EventContentProps,
    LocationProps,
    UserProps,
    UniversityProps
};
