import { Client, Databases, ID, Query } from "appwrite";

const init = () => {
    const client = new Client();

    client
        .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
        .setProject("6456b0de0dcdeaf88721");
    return client;
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

const createContact = async(data:any) => {
    const client = init();
    const databases = new Databases(client);

    const res = await databases.createDocument("645f0ef977e21c3f7c29","645f0f2b72fa544d8e33", ID.unique(), data);
    return res;
}

export { getEventsData, getEvent, createContact };
