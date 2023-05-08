import { Client, Account, ID} from 'appwrite';
import React from 'react'

const appwrite = () => {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
        .setProject('6456b0de0dcdeaf88721')
    ;
  
    const account = new Account(client);
    account.create(
        ID.unique(),
        'newUser@q.com',
        'password',
        'QQQQQQQQQQQQQQQQQQQQQQQQQQQQ'
    ).then(response => {
        console.log(response);
    }, error => {
        console.log(error);
    });

    console.log(client);
}

export default appwrite