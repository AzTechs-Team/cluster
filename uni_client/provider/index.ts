import { EventProps, UserProps } from "@/models/contentModels";
import { atom } from "recoil";

const loggedInState = atom({
    key: "loggedIn", 
    default: false
});

const userDetailsState = atom({
    key: "userDetails", 
    default:<UserProps>{} 
})

const eventsState = atom({
    key: "events", 
    default: <Array<EventProps>>[]
});

export { loggedInState, userDetailsState, eventsState }