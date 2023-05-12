import { UserProps } from "@/models/contentModels";
import { atom } from "recoil";

const loggedInState = atom({
    key: "loggedIn", 
    default: false
});

const userDetailsState = atom({
    key: "userDetails", 
    default:<UserProps>{} 
})

export { loggedInState, userDetailsState }