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

export { auth, getUserDetails};
