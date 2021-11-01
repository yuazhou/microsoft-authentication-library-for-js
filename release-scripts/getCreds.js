/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

/*
 * DefaultAzureCredential expects the following three environment variables:
 * * AZURE_TENANT_ID: The tenant ID in Azure Active Directory
 * * AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
 * * AZURE_CLIENT_SECRET: The client secret for the registered application
 */
const credential = new DefaultAzureCredential();

// Build the URL to reach your key vault
const url = "https://adaltestinfo.vault.azure.net";

// Lastly, create our secrets client and connect to the service
const client = new SecretClient(url, credential);

async function getCurrentSecretVersion(secretName) {
    for await (const secretProperties of client.listPropertiesOfSecretVersions(secretName)) {
        if (!secretProperties.enabled) {
            continue;
        }

        if (secretProperties.notBefore > new Date()) {
            continue;
        }
        
        if (secretProperties.expiresOn < new Date()) {
            continue;
        }
        return secretProperties.version;
    }
}

export async function getSecret(secretName) {
    const version = await getCurrentSecretVersion(secretName);
    return await client.getSecret(secretName, { version: version });
}
