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

export type { EventProps, AboutProps, CollegeProps, EventContentProps, LocationProps, FAQProps };
