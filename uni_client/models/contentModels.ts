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
    id: string;
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
    participants: Array<string>;
    clubId: Array<string>;
};

type UserProps = {
    id: string;
    userName: string;
    userEmail: string;
    eventId: Array<string>;
    bio: string;
    userType: string;
}

// type UniversityProps = {
//     id: Number;
//     name: string;
//     bio: string;
//     email: string;
//     registered: Array<Number>;
// }

export type {
    EventProps,
    EventContentProps,
    LocationProps,
    UserProps,
    // UniversityProps
};
