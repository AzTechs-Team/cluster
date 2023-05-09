import { UniversityProps, UserProps } from "@/models/contentModels";

const users: Array<UserProps> = [
    {
        id: 1,
        bio: "Bio data",
        userName: "User anme",
        userEmail: "User email",
        registeredEvents: [1,2],
    },
];


const universities: Array<UniversityProps> = [
    {
        id: 1,
        name: "Navrachana University", 
        bio: "Uni bio", 
        email: "nuv@ac.in",
        registeredStudents: [1]
    }
]

export { users, universities };
