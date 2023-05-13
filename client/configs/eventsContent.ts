import { EventProps } from "@/models/contentModels";

const events: Array<EventProps> = [
    {
        id: "1",
        date: "7/5/2023",
        time: "10:00 pm",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum nec, condimentum eu ligula. Quisque fermentum lacinia arcu, vel mattis ligula porta vitae. In eu fringilla tortor. Sed et ligula velit. Donec vitae ultricies sem. Suspendisse a gravida ante. Donec blandit est at vulputate lobortis. Donec non bibendum est. Quisque nec semper tellus, in dictum augue. Nulla mi augue, gravida eget placerat laoreet, faucibus tristique urna. ",
        location: {
            address: "afldkjdlfajlkdfj alkdfjalds",
            city: "Vadodara",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331662387!2d73.0906843572777!3d22.322240636834845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1683479347621!5m2!1sen!2sin",
        },
        name: "Event name",
        photos: ["/assets/images/explore/event_photo.png"],
        previewImage: "/assets/images/explore/event_photo.png",
        previewDetails:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum",
        slug: "event-name",
        tags: ["Offline", "Technology", "Talks"],
        university: "Navrachana university",
        shortDescription: [
            {
                title: "title",
                description: ["description"],
            },
        ],
        longDescription: [
            {
                title: "title",
                description: ["description 1", "description 2"],
            },
        ],
    },
    {
        id: "2",
        date: "7/5/2023",
        time: "10:00 pm",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum nec, condimentum eu ligula. Quisque fermentum lacinia arcu, vel mattis ligula porta vitae. In eu fringilla tortor. Sed et ligula velit. Donec vitae ultricies sem. Suspendisse a gravida ante. Donec blandit est at vulputate lobortis. Donec non bibendum est. Quisque nec semper tellus, in dictum augue. Nulla mi augue, gravida eget placerat laoreet, faucibus tristique urna. ",
        location: {
            address: "afldkjdlfajlkdfj alkdfjalds",
            city: "Vadodara",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331662387!2d73.0906843572777!3d22.322240636834845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1683479347621!5m2!1sen!2sin",
        },
        name: "Event name 2",
        photos: ["/assets/images/explore/event_photo.png"],
        previewImage: "/assets/images/explore/event_photo.png",
        previewDetails:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum",
        slug: "event-name-2",
        tags: ["Offline", "Technology", "Talks"],
        university: "Navrachana university",
        shortDescription: [
            {
                title: "title",
                description: ["description"],
            },
        ],
        longDescription: [
            {
                title: "title",
                description: ["description 1", "description 2"],
            },
        ],
    },
];

const highlightEvents: Array<EventProps> = [
    {
        id: "1",
        date: "7/5/2023",
        time: "10:00 pm",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum nec, condimentum eu ligula. Quisque fermentum lacinia arcu, vel mattis ligula porta vitae. In eu fringilla tortor. Sed et ligula velit. Donec vitae ultricies sem. Suspendisse a gravida ante. Donec blandit est at vulputate lobortis. Donec non bibendum est. Quisque nec semper tellus, in dictum augue. Nulla mi augue, gravida eget placerat laoreet, faucibus tristique urna. ",
        location: {
            address: "afldkjdlfajlkdfj alkdfjalds",
            city: "Vadodara",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331662387!2d73.0906843572777!3d22.322240636834845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1683479347621!5m2!1sen!2sin",
        },
        name: "Event name",
        photos: ["/assets/images/explore/event_photo.png"],
        previewImage: "/assets/images/explore/event_photo.png",
        previewDetails:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum",
        slug: "event-name",
        tags: ["Offline", "Technology", "Talks"],
        university: "Navrachana university",
        shortDescription: [
            {
                title: "title",
                description: ["description"],
            },
        ],
        longDescription: [
            {
                title: "title",
                description: ["description 1", "description 2"],
            },
        ],
    },
    {
        id: "2",
        date: "7/5/2023",
        time: "10:00 pm",
        details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum nec, condimentum eu ligula. Quisque fermentum lacinia arcu, vel mattis ligula porta vitae. In eu fringilla tortor. Sed et ligula velit. Donec vitae ultricies sem. Suspendisse a gravida ante. Donec blandit est at vulputate lobortis. Donec non bibendum est. Quisque nec semper tellus, in dictum augue. Nulla mi augue, gravida eget placerat laoreet, faucibus tristique urna. ",
        location: {
            address: "afldkjdlfajlkdfj alkdfjalds",
            city: "Vadodara",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331662387!2d73.0906843572777!3d22.322240636834845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1683479347621!5m2!1sen!2sin",
        },
        name: "Event name 2",
        photos: ["/assets/images/explore/event_photo.png"],
        previewImage: "/assets/images/explore/event_photo.png",
        previewDetails:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem ex, vestibulum sed enim ac, consequat feugiat ante. Etiam velit lorem, efficitur vitae vestibulum",
        slug: "event-name-2",
        tags: ["Offline", "Technology", "Talks"],
        university: "Navrachana university",
        shortDescription: [
            {
                title: "title",
                description: ["description"],
            },
        ],
        longDescription: [
            {
                title: "title",
                description: ["description 1", "description 2"],
            },
        ],
    },
];


export {events, highlightEvents};