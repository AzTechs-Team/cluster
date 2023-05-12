import { EventProps } from "@/models/contentModels";
import { Models } from "appwrite";
import { atom } from "recoil";

const eventsState = atom({
    key: "events", 
    default: <Array<EventProps>>[]
});

export { eventsState }