import { Client, Account, ID} from 'appwrite';
import React from 'react'

const appwrite = () => {
    const client = new Client();

    client
        .setEndpoint('')
        .setProject('')
    ;

    console.log(client);
}

export default appwrite