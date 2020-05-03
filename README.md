# robot-aglioolio
Text search with Algolia

## Installation
Make sure that npm and Node are installed

install Firebase CLI with npm:
```sh 
npm install -g firebase-tools
```

install algoliasearch for text search lib:
```sh
npm install algoliasearch --save
```

## Setup
1.  Initialize Firebase SDK for Cloud Function:
    - Run firebase login, loging to your firebase account
    - Run firebase init function, with this command, you will be prompted to create a new project or use existing project, npm dependencies management will be offered, and what language options you can choose
2.  Initialize Admin SDK with admin.initializeApp()
3.  Store environment data into firebase for algolia run
```sh
firebase functions:config:set algolia.key="THE API KEY" algolia.name="THE CLIENT name"
```

## Cloud Function 
After all setup is done, time to add some lines of code. in order to use Firebase SDK modules, import
the module into index.ts

## Algolia
After all setup is done, import algoliasearch into index.ts. To use envorinment variables in firebase, use 
e.g function.config().algolia.key. Use algolia saveObject() as a promise to terminate the cloud function  
