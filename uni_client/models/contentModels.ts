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
    location: any;
    shortDescription: Array<any>;
    longDescription: Array<any>;
    participants?: Array<string>;
    clubId?: Array<string>;
    $collectionId?: string;
    $createdAt?: string;
    $databaseId?: string;
    $id?: string;
    $permissions?: Array<any>;
    $updatedAt?: string;
};

type UserProps = {
    id: string;
    userName: string;
    userEmail: string;
    eventId: Array<string>;
    bio: string;
    userType: string;
    onBoarded: boolean;
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
