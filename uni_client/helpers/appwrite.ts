import { Client, Account, ID, Databases, Query, Functions } from "appwrite";

const init = () => {
    const client = new Client();

    client
        .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
        .setProject("6456b0de0dcdeaf88721");
    return client;
};

const auth = async (email: string, password: string) => {
    try {
        const client = init();
        const account = new Account(client);

        await account.createEmailSession(email, password);
        return getUserDetails((await account.get()).$id);
    } catch (error) {
        return false;
    }
};

const getUserDetails = async (id: string) => {
    try {
        const client = init();
        const databases = await new Databases(client);
        let data = await databases.getDocument(
            "6457bdb4ab615301c5a4",
            "6457bdbf7dec1967e4fa",
            id
            // (
            //     await account.get()
            // ).$id
        );
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getEventsData = async () => {
    const client = init();
    const databases = new Databases(client);

    const data = await databases.listDocuments("6457bdb4ab615301c5a4", "6457c8bda9310dc39a42");
    return data;
};
const getEvent = async (slug: string) => {
    const client = init();
    const databases = new Databases(client);

    const data = await databases.listDocuments("6457bdb4ab615301c5a4", "6457c8bda9310dc39a42", [
        Query.equal("slug", slug),
    ]);
    return data.documents[0];
};

const updatePassword = async (password: string) => {
    const client = init();
    const account = new Account(client);
    console.log(client);

    await account.updatePassword(password, "cluster@nuv");
};

const updateUser = async (id: string, name: string, bio: string, onBoarded: boolean = true) => {
    const client = init();
    const databases = new Databases(client);

    await databases.updateDocument("6457bdb4ab615301c5a4", "6457bdbf7dec1967e4fa", id, {
        userName: name,
        bio: bio,
        onBoarded: onBoarded,
    });
};

const getAllUsers = async () => {
    const client = init();
    const databases = new Databases(client);

    const data = await databases.listDocuments("6457bdb4ab615301c5a4", "6457bdbf7dec1967e4fa", [
        Query.equal("userType", "Student")
    ]);
    return data;
};

export { auth, getUserDetails, getEventsData, getEvent, updatePassword, updateUser, getAllUsers };
