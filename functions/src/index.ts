import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as algoliasearch from 'algoliasearch';
const algoliasearch = require("algoliasearch");
const env = functions.config()
admin.initializeApp();

const client = algoliasearch(env.algolia.appid ,env.algolia.apikey);
const index = client.initIndex('robotcone');

exports.UpdateProduct = 
functions.firestore.document("product/{productID}").onUpdate(change => {
    const data = change.after.data();
    const objectID = change.after.id;

    return index.saveObject({
        objectID,
        data
    });
});

exports.CreateProduct = 
functions.firestore.document("product/{productID}").onCreate((snapshot , context) => {
    const data = snapshot.data();
    const objectID = snapshot.id;

    return index.saveObject({
        objectID,
        data
    });
});
