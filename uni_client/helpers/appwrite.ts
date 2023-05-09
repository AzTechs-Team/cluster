import { Client, Account, ID, Databases} from 'appwrite';
import React from 'react'

const appwrite = () => {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
        .setProject('6456b0de0dcdeaf88721')
    ;
  
    const databases = new Databases(client);

    const promise = databases.createDocument('6457bdb4ab615301c5a4', '6457bdbf7dec1967e4fa', ID.unique(), {userName: "qqq", userEmail: "q@q.com", onBoarded: false});

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });

    console.log(client);
}

export default appwrite