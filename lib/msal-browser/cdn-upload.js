/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const { BlobServiceClient } = require("@azure/storage-blob");
const pkg = require("./package.json");
const { getSecret } = require("../../release-scripts/getCreds");

const KEYS = [
    "MSAL-JS-CDN-SAS-EUNO",
    "MSAL-JS-CDN-SAS-USWE"
];

const FILES = [
    "msal-browser.js",
    "msal-browser.js.map",
    "msal-browser.min.js"
];

async function uploadToCdn(sasKey) {
    const sas = await getSecret(sasKey);
    const cdn = sas.split("?")[0];

    console.log("Starting uploads to CDN:", cdn);

    const blobServiceClient = new BlobServiceClient(sas);
    const containerClient = blobServiceClient.getContainerClient("");

    return Promise.all(FILES.map(async (file) => {
        const blobName = `browser/${pkg.version}/js/${file}`;
         
        console.log(cdn, blobName, "Uploading file");
    
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        const fileName = `./lib/${file}`;

        try {
            const blobExists = await blockBlobClient.exists();

            if (!blobExists) {
                await blockBlobClient.uploadFile(fileName, { 
                    blobHTTPHeaders: { 
                        blobContentType: "text/javascript"
                    }
                });
    
                console.log(cdn, blobName, "Upload complete");
            } else {
                console.warn(cdn, blobName, "File exists");
            }
        } catch (e) {
            console.error(cdn, blobName, "Upload failed");
            console.error(cdn, blobName, e.statusCode, e.details.errorCode);
        }
    }));
}

Promise.all(KEYS.map(sasKey => uploadToCdn(sasKey)))
    .then(() => {
        console.log("Uploads complete");
    })
    .finally(() => {
        process.exit(0);
    });

