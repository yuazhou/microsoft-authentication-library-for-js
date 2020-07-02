import { LogLevel, StringUtils, AccountEntity, CacheManager, IdTokenEntity, AccessTokenEntity, RefreshTokenEntity, AppMetadataEntity, ClientAuthError, CacheSchemaType, CredentialEntity, CredentialType, AuthorizationCodeClient, RefreshTokenClient, SilentFlowClient, Constants as Constants$1, AuthorityFactory, Logger, TrustedAuthority, DeviceCodeClient } from '@azure/msal-common';
export { AuthError, AuthErrorMessage, AuthenticationResult, LogLevel, PromptValue, ResponseMode } from '@azure/msal-common';
import axios from 'axios';
import debug from 'debug';
import { v4 } from 'uuid';
import crypto from 'crypto';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * http methods
 */
var HttpMethod;

(function (HttpMethod) {
  HttpMethod["GET"] = "get";
  HttpMethod["POST"] = "post";
})(HttpMethod || (HttpMethod = {}));
/**
 * Constant used for PKCE
 */


var RANDOM_OCTET_SIZE = 32;
/**
 * Constants used in PKCE
 */

var Hash = {
  SHA256: 'sha256'
};
/**
 * Constants for encoding schemes
 */

var CharSet = {
  CV_CHARSET: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
};
/**
 * Constants for headers
 */

var Constants = {
  MSAL_SKU: 'msal.js.node'
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements the API for network requests.
 */

var HttpClient = /*#__PURE__*/function () {
  function HttpClient() {
    axios.defaults.validateStatus = function () {
      return true;
    };
  }
  /**
   * Http Get request
   * @param url
   * @param options
   */


  var _proto = HttpClient.prototype;

  _proto.sendGetRequestAsync = function sendGetRequestAsync(url, options) {
    try {
      var request = {
        method: HttpMethod.GET,
        url: url,
        headers: options && options.headers
      };
      return Promise.resolve(axios(request)).then(function (response) {
        return {
          headers: response.headers,
          body: response.data,
          status: response.status
        };
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Http Post request
   * @param url
   * @param options
   */
  ;

  _proto.sendPostRequestAsync = function sendPostRequestAsync(url, options) {
    try {
      var request = {
        method: HttpMethod.POST,
        url: url,
        data: options && options.body || '',
        headers: options && options.headers
      };
      return Promise.resolve(axios(request)).then(function (response) {
        return {
          headers: response.headers,
          body: response.data,
          status: response.status
        };
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return HttpClient;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var NetworkUtils = /*#__PURE__*/function () {
  function NetworkUtils() {}

  /**
   * Returns best compatible network client object.
   */
  NetworkUtils.getNetworkClient = function getNetworkClient() {
    return new HttpClient();
  };

  return NetworkUtils;
}();

var DEFAULT_AUTH_OPTIONS = {
  clientId: '',
  authority: '',
  knownAuthorities: [],
  cloudDiscoveryMetadata: ""
};
var DEFAULT_CACHE_OPTIONS = {};
var DEFAULT_LOGGER_OPTIONS = {
  loggerCallback: function loggerCallback(level, message, containsPii) {
    debug("msal:" + LogLevel[level] + (containsPii ? '-Pii' : ''))(message);
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info
};
var DEFAULT_SYSTEM_OPTIONS = {
  loggerOptions: DEFAULT_LOGGER_OPTIONS,
  networkClient: /*#__PURE__*/NetworkUtils.getNetworkClient()
};
/**
 * Sets the default options when not explicitly configured from app developer
 *
 * @param auth
 * @param cache
 * @param system
 *
 * @returns Configuration
 */

function buildAppConfiguration(_ref) {
  var auth = _ref.auth,
      cache = _ref.cache,
      system = _ref.system;
  return {
    auth: _extends({}, DEFAULT_AUTH_OPTIONS, {}, auth),
    cache: _extends({}, DEFAULT_CACHE_OPTIONS, {}, cache),
    system: _extends({}, DEFAULT_SYSTEM_OPTIONS, {}, system)
  };
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var GuidGenerator = /*#__PURE__*/function () {
  function GuidGenerator() {}

  /**
   *
   * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or pseudo-random numbers.
   * uuidv4 generates guids from cryprtographically-string random
   */
  GuidGenerator.generateGuid = function generateGuid() {
    return v4();
  }
  /**
   * verifies if a string is  GUID
   * @param guid
   */
  ;

  GuidGenerator.isGuid = function isGuid(guid) {
    var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regexGuid.test(guid);
  };

  return GuidGenerator;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var EncodingUtils = /*#__PURE__*/function () {
  function EncodingUtils() {}

  /**
   * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
   * 'base64': Base64 encoding.
   *
   * @param str text
   */
  EncodingUtils.base64Encode = function base64Encode(str) {
    return Buffer.from(str, 'utf8').toString('base64');
  }
  /**
   * encode a URL
   * @param str
   */
  ;

  EncodingUtils.base64EncodeUrl = function base64EncodeUrl(str) {
    return EncodingUtils.base64Encode(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
  /**
   * 'utf8': Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
   * 'base64': Base64 encoding.
   *
   * @param base64Str Base64 encoded text
   */
  ;

  EncodingUtils.base64Decode = function base64Decode(base64Str) {
    return Buffer.from(base64Str, 'base64').toString('utf8');
  }
  /**
   * @param base64Str Base64 encoded Url
   */
  ;

  EncodingUtils.base64DecodeUrl = function base64DecodeUrl(base64Str) {
    var str = base64Str.replace(/-/g, '+').replace(/_/g, '/');

    while (str.length % 4) {
      str += '=';
    }

    return EncodingUtils.base64Decode(str);
  };

  return EncodingUtils;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * https://tools.ietf.org/html/rfc7636#page-8
 */

var PkceGenerator = /*#__PURE__*/function () {
  function PkceGenerator() {}

  var _proto = PkceGenerator.prototype;

  /**
   * generates the codeVerfier and the challenge from the codeVerfier
   * reference: https://tools.ietf.org/html/rfc7636#section-4.1 and https://tools.ietf.org/html/rfc7636#section-4.2
   */
  _proto.generatePkceCodes = function generatePkceCodes() {
    try {
      var _this2 = this;

      var verifier = _this2.generateCodeVerifier();

      var challenge = _this2.generateCodeChallengeFromVerifier(verifier);

      return Promise.resolve({
        verifier: verifier,
        challenge: challenge
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * generates the codeVerfier; reference: https://tools.ietf.org/html/rfc7636#section-4.1
   */
  ;

  _proto.generateCodeVerifier = function generateCodeVerifier() {
    var buffer = crypto.randomBytes(RANDOM_OCTET_SIZE);
    var verifier = this.bufferToCVString(buffer);
    return EncodingUtils.base64EncodeUrl(verifier);
  }
  /**
   * generate the challenge from the codeVerfier; reference: https://tools.ietf.org/html/rfc7636#section-4.2
   * @param codeVerifier
   */
  ;

  _proto.generateCodeChallengeFromVerifier = function generateCodeChallengeFromVerifier(codeVerifier) {
    return EncodingUtils.base64EncodeUrl(this.sha256(codeVerifier).toString('ascii'));
  }
  /**
   * generate 'SHA256' hash
   * @param buffer
   */
  ;

  _proto.sha256 = function sha256(buffer) {
    return crypto.createHash(Hash.SHA256).update(buffer).digest();
  }
  /**
   * Accepted characters; reference: https://tools.ietf.org/html/rfc7636#section-4.1
   * @param buffer
   */
  ;

  _proto.bufferToCVString = function bufferToCVString(buffer) {
    var charArr = [];

    for (var i = 0; i < buffer.byteLength; i += 1) {
      var index = buffer[i] % CharSet.CV_CHARSET.length;
      charArr.push(CharSet.CV_CHARSET[index]);
    }

    return charArr.join('');
  };

  return PkceGenerator;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements MSAL node's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
 * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
 */

var CryptoProvider = /*#__PURE__*/function () {
  function CryptoProvider() {
    // Browser crypto needs to be validated first before any other classes can be set.
    this.pkceGenerator = new PkceGenerator();
  }
  /**
   * Creates a new random GUID - used to populate state and nonce.
   * @returns string (GUID)
   */


  var _proto = CryptoProvider.prototype;

  _proto.createNewGuid = function createNewGuid() {
    return GuidGenerator.generateGuid();
  }
  /**
   * Encodes input string to base64.
   * @param input
   */
  ;

  _proto.base64Encode = function base64Encode(input) {
    return EncodingUtils.base64Encode(input);
  }
  /**
   * Decodes input string from base64.
   * @param input
   */
  ;

  _proto.base64Decode = function base64Decode(input) {
    return EncodingUtils.base64Decode(input);
  }
  /**
   * Generates PKCE codes used in Authorization Code Flow.
   */
  ;

  _proto.generatePkceCodes = function generatePkceCodes() {
    return this.pkceGenerator.generatePkceCodes();
  };

  return CryptoProvider;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class deserializes cache entities read from the file into in memory object types defined internally
 */

var Deserializer = /*#__PURE__*/function () {
  function Deserializer() {}

  /**
   * Parse the JSON blob in memory and deserialize the content
   * @param cachedJson
   */
  Deserializer.deserializeJSONBlob = function deserializeJSONBlob(jsonFile) {
    var deserializedCache = StringUtils.isEmpty(jsonFile) ? {} : JSON.parse(jsonFile);
    return deserializedCache;
  }
  /**
   * Deserializes accounts to AccountEntity objects
   * @param accounts
   */
  ;

  Deserializer.deserializeAccounts = function deserializeAccounts(accounts) {
    var accountObjects = {};

    if (accounts) {
      Object.keys(accounts).map(function (key) {
        var serializedAcc = accounts[key];
        var mappedAcc = {
          homeAccountId: serializedAcc.home_account_id,
          environment: serializedAcc.environment,
          realm: serializedAcc.realm,
          localAccountId: serializedAcc.local_account_id,
          username: serializedAcc.username,
          authorityType: serializedAcc.authority_type,
          name: serializedAcc.name,
          clientInfo: serializedAcc.client_info,
          lastModificationTime: serializedAcc.last_modification_time,
          lastModificationApp: serializedAcc.last_modification_app
        };
        var account = new AccountEntity();
        CacheManager.toObject(account, mappedAcc);
        accountObjects[key] = account;
      });
    }

    return accountObjects;
  }
  /**
   * Deserializes id tokens to IdTokenEntity objects
   * @param idTokens
   */
  ;

  Deserializer.deserializeIdTokens = function deserializeIdTokens(idTokens) {
    var idObjects = {};

    if (idTokens) {
      Object.keys(idTokens).map(function (key) {
        var serializedIdT = idTokens[key];
        var mappedIdT = {
          homeAccountId: serializedIdT.home_account_id,
          environment: serializedIdT.environment,
          credentialType: serializedIdT.credential_type,
          clientId: serializedIdT.client_id,
          secret: serializedIdT.secret,
          realm: serializedIdT.realm
        };
        var idToken = new IdTokenEntity();
        CacheManager.toObject(idToken, mappedIdT);
        idObjects[key] = idToken;
      });
    }

    return idObjects;
  }
  /**
   * Deserializes access tokens to AccessTokenEntity objects
   * @param accessTokens
   */
  ;

  Deserializer.deserializeAccessTokens = function deserializeAccessTokens(accessTokens) {
    var atObjects = {};

    if (accessTokens) {
      Object.keys(accessTokens).map(function (key) {
        var serializedAT = accessTokens[key];
        var mappedAT = {
          homeAccountId: serializedAT.home_account_id,
          environment: serializedAT.environment,
          credentialType: serializedAT.credential_type,
          clientId: serializedAT.client_id,
          secret: serializedAT.secret,
          realm: serializedAT.realm,
          target: serializedAT.target,
          cachedAt: serializedAT.cached_at,
          expiresOn: serializedAT.expires_on,
          extendedExpiresOn: serializedAT.extended_expires_on,
          refreshOn: serializedAT.refresh_on,
          keyId: serializedAT.key_id,
          tokenType: serializedAT.token_type
        };
        var accessToken = new AccessTokenEntity();
        CacheManager.toObject(accessToken, mappedAT);
        atObjects[key] = accessToken;
      });
    }

    return atObjects;
  }
  /**
   * Deserializes refresh tokens to RefreshTokenEntity objects
   * @param refreshTokens
   */
  ;

  Deserializer.deserializeRefreshTokens = function deserializeRefreshTokens(refreshTokens) {
    var rtObjects = {};

    if (refreshTokens) {
      Object.keys(refreshTokens).map(function (key) {
        var serializedRT = refreshTokens[key];
        var mappedRT = {
          homeAccountId: serializedRT.home_account_id,
          environment: serializedRT.environment,
          credentialType: serializedRT.credential_type,
          clientId: serializedRT.client_id,
          secret: serializedRT.secret,
          familyId: serializedRT.family_id,
          target: serializedRT.target,
          realm: serializedRT.realm
        };
        var refreshToken = new RefreshTokenEntity();
        CacheManager.toObject(refreshToken, mappedRT);
        rtObjects[key] = refreshToken;
      });
    }

    return rtObjects;
  }
  /**
   * Deserializes appMetadata to AppMetaData objects
   * @param appMetadata
   */
  ;

  Deserializer.deserializeAppMetadata = function deserializeAppMetadata(appMetadata) {
    var appMetadataObjects = {};

    if (appMetadata) {
      Object.keys(appMetadata).map(function (key) {
        var serializedAmdt = appMetadata[key];
        var mappedAmd = {
          clientId: serializedAmdt.client_id,
          environment: serializedAmdt.environment,
          familyId: serializedAmdt.family_id
        };
        var amd = new AppMetadataEntity();
        CacheManager.toObject(amd, mappedAmd);
        appMetadataObjects[key] = amd;
      });
    }

    return appMetadataObjects;
  }
  /**
   * Deserialize an inMemory Cache
   * @param jsonCache
   */
  ;

  Deserializer.deserializeAllCache = function deserializeAllCache(jsonCache) {
    return {
      accounts: jsonCache.Account ? this.deserializeAccounts(jsonCache.Account) : {},
      idTokens: jsonCache.IdToken ? this.deserializeIdTokens(jsonCache.IdToken) : {},
      accessTokens: jsonCache.AccessToken ? this.deserializeAccessTokens(jsonCache.AccessToken) : {},
      refreshTokens: jsonCache.RefreshToken ? this.deserializeRefreshTokens(jsonCache.RefreshToken) : {},
      appMetadata: jsonCache.AppMetadata ? this.deserializeAppMetadata(jsonCache.AppMetadata) : {}
    };
  };

  return Deserializer;
}();

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Serializer = /*#__PURE__*/function () {
  function Serializer() {}

  /**
   * serialize the JSON blob
   * @param data
   */
  Serializer.serializeJSONBlob = function serializeJSONBlob(data) {
    return JSON.stringify(data);
  }
  /**
   * Serialize Accounts
   * @param accCache
   */
  ;

  Serializer.serializeAccounts = function serializeAccounts(accCache) {
    var accounts = {};
    Object.keys(accCache).map(function (key) {
      var accountEntity = accCache[key];
      accounts[key] = {
        home_account_id: accountEntity.homeAccountId,
        environment: accountEntity.environment,
        realm: accountEntity.realm,
        local_account_id: accountEntity.localAccountId,
        username: accountEntity.username,
        authority_type: accountEntity.authorityType,
        name: accountEntity.name,
        client_info: accountEntity.clientInfo,
        last_modification_time: accountEntity.lastModificationTime,
        last_modification_app: accountEntity.lastModificationApp
      };
    });
    return accounts;
  }
  /**
   * Serialize IdTokens
   * @param idTCache
   */
  ;

  Serializer.serializeIdTokens = function serializeIdTokens(idTCache) {
    var idTokens = {};
    Object.keys(idTCache).map(function (key) {
      var idTEntity = idTCache[key];
      idTokens[key] = {
        home_account_id: idTEntity.homeAccountId,
        environment: idTEntity.environment,
        credential_type: idTEntity.credentialType,
        client_id: idTEntity.clientId,
        secret: idTEntity.secret,
        realm: idTEntity.realm
      };
    });
    return idTokens;
  }
  /**
   * Serializes AccessTokens
   * @param atCache
   */
  ;

  Serializer.serializeAccessTokens = function serializeAccessTokens(atCache) {
    var accessTokens = {};
    Object.keys(atCache).map(function (key) {
      var atEntity = atCache[key];
      accessTokens[key] = {
        home_account_id: atEntity.homeAccountId,
        environment: atEntity.environment,
        credential_type: atEntity.credentialType,
        client_id: atEntity.clientId,
        secret: atEntity.secret,
        realm: atEntity.realm,
        target: atEntity.target,
        cached_at: atEntity.cachedAt,
        expires_on: atEntity.expiresOn,
        extended_expires_on: atEntity.extendedExpiresOn,
        refresh_on: atEntity.refreshOn,
        key_id: atEntity.keyId,
        token_type: atEntity.tokenType
      };
    });
    return accessTokens;
  }
  /**
   * Serialize refreshTokens
   * @param rtCache
   */
  ;

  Serializer.serializeRefreshTokens = function serializeRefreshTokens(rtCache) {
    var refreshTokens = {};
    Object.keys(rtCache).map(function (key) {
      var rtEntity = rtCache[key];
      refreshTokens[key] = {
        home_account_id: rtEntity.homeAccountId,
        environment: rtEntity.environment,
        credential_type: rtEntity.credentialType,
        client_id: rtEntity.clientId,
        secret: rtEntity.secret,
        family_id: rtEntity.familyId,
        target: rtEntity.target,
        realm: rtEntity.realm
      };
    });
    return refreshTokens;
  }
  /**
   * Serialize amdtCache
   * @param amdtCache
   */
  ;

  Serializer.serializeAppMetadata = function serializeAppMetadata(amdtCache) {
    var appMetadata = {};
    Object.keys(amdtCache).map(function (key) {
      var amdtEntity = amdtCache[key];
      appMetadata[key] = {
        client_id: amdtEntity.clientId,
        environment: amdtEntity.environment,
        family_id: amdtEntity.familyId
      };
    });
    return appMetadata;
  }
  /**
   * Serialize the cache
   * @param jsonContent
   */
  ;

  Serializer.serializeAllCache = function serializeAllCache(inMemCache) {
    return {
      Account: this.serializeAccounts(inMemCache.accounts),
      IdToken: this.serializeIdTokens(inMemCache.idTokens),
      AccessToken: this.serializeAccessTokens(inMemCache.accessTokens),
      RefreshToken: this.serializeRefreshTokens(inMemCache.refreshTokens),
      AppMetadata: this.serializeAppMetadata(inMemCache.appMetadata)
    };
  };

  return Serializer;
}();

/**
 * This class implements Storage for node, reading cache from user specified storage location or an  extension library
 */

var Storage = /*#__PURE__*/function (_CacheManager) {
  _inheritsLoose(Storage, _CacheManager);

  function Storage(logger) {
    var _this;

    _this = _CacheManager.call(this) || this;
    _this.inMemoryCache = {
      accounts: {},
      accessTokens: {},
      refreshTokens: {},
      appMetadata: {},
      idTokens: {}
    };
    _this.changeEmitters = [];
    _this.logger = logger;
    return _this;
  }

  var _proto = Storage.prototype;

  _proto.registerChangeEmitter = function registerChangeEmitter(func) {
    this.changeEmitters.push(func);
  };

  _proto.emitChange = function emitChange() {
    this.changeEmitters.forEach(function (func) {
      return func.call(null);
    });
  }
  /**
   * gets the current in memory cache for the client
   */
  ;

  _proto.getCache = function getCache() {
    this.logger.verbose("Getting in-memory cache");
    return this.inMemoryCache;
  }
  /**
   * sets the current in memory cache for the client
   * @param inMemoryCache
   */
  ;

  _proto.setCache = function setCache(inMemoryCache) {
    this.logger.verbose("Setting in-memory cache");
    this.inMemoryCache = inMemoryCache;
    this.emitChange();
  }
  /**
   * Set Item in memory
   * @param key
   * @param value
   * @param type
   * @param inMemory
   */
  ;

  _proto.setItem = function setItem(key, value, type) {
    this.logger.verbose("setItem called for item type: " + type);
    this.logger.verbosePii("Item key: " + key); // read inMemoryCache

    var cache = this.getCache(); // save the cacheItem

    switch (type) {
      case CacheSchemaType.ACCOUNT:
        {
          cache.accounts[key] = value;
          break;
        }

      case CacheSchemaType.CREDENTIAL:
        {
          var credentialType = CredentialEntity.getCredentialType(key);

          switch (credentialType) {
            case CredentialType.ID_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ID_TOKEN);
                cache.idTokens[key] = value;
                break;
              }

            case CredentialType.ACCESS_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ACCESS_TOKEN);
                cache.accessTokens[key] = value;
                break;
              }

            case CredentialType.REFRESH_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.REFRESH_TOKEN);
                cache.refreshTokens[key] = value;
                break;
              }
          }

          break;
        }

      case CacheSchemaType.APP_META_DATA:
        {
          cache.appMetadata[key] = value;
          break;
        }

      default:
        {
          throw ClientAuthError.createInvalidCacheTypeError();
        }
    } // update inMemoryCache


    this.setCache(cache);
    this.emitChange();
  }
  /**
   * Gets cache item with given key.
   * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
   * @param key
   * @param type
   * @param inMemory
   */
  ;

  _proto.getItem = function getItem(key, type) {
    this.logger.verbose("getItem called for item type: " + type);
    this.logger.verbosePii("Item key: " + key); // read inMemoryCache

    var cache = this.getCache(); // save the cacheItem

    switch (type) {
      case CacheSchemaType.ACCOUNT:
        {
          return cache.accounts[key] || null;
        }

      case CacheSchemaType.CREDENTIAL:
        {
          var credentialType = CredentialEntity.getCredentialType(key);
          var credential = null;

          switch (credentialType) {
            case CredentialType.ID_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ID_TOKEN);
                credential = cache.idTokens[key] || null;
                break;
              }

            case CredentialType.ACCESS_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ACCESS_TOKEN);
                credential = cache.accessTokens[key] || null;
                break;
              }

            case CredentialType.REFRESH_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.REFRESH_TOKEN);
                credential = cache.refreshTokens[key] || null;
                break;
              }
          }

          return credential;
        }

      case CacheSchemaType.APP_META_DATA:
        {
          return cache.appMetadata[key] || null;
        }

      default:
        {
          throw ClientAuthError.createInvalidCacheTypeError();
        }
    }
  }
  /**
   * Removes the cache item from memory with the given key.
   * @param key
   * @param type
   * @param inMemory
   */
  ;

  _proto.removeItem = function removeItem(key, type) {
    this.logger.verbose("removeItem called for item type: " + type);
    this.logger.verbosePii("Item key: " + key); // read inMemoryCache

    var cache = this.getCache();
    var result = false; // save the cacheItem

    switch (type) {
      case CacheSchemaType.ACCOUNT:
        {
          if (!!cache.accounts[key]) {
            delete cache.accounts[key];
            result = true;
          }

          break;
        }

      case CacheSchemaType.CREDENTIAL:
        {
          var credentialType = CredentialEntity.getCredentialType(key);

          switch (credentialType) {
            case CredentialType.ID_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ID_TOKEN);

                if (!!cache.idTokens[key]) {
                  delete cache.idTokens[key];
                  result = true;
                }

                break;
              }

            case CredentialType.ACCESS_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.ACCESS_TOKEN);

                if (!!cache.accessTokens[key]) {
                  delete cache.accessTokens[key];
                  result = true;
                }

                break;
              }

            case CredentialType.REFRESH_TOKEN:
              {
                this.logger.verbose("Credential type: " + CredentialType.REFRESH_TOKEN);

                if (!!cache.refreshTokens[key]) {
                  delete cache.refreshTokens[key];
                  result = true;
                }

                break;
              }
          }

          break;
        }

      case CacheSchemaType.APP_META_DATA:
        {
          if (!!cache.appMetadata[key]) {
            delete cache.appMetadata[key];
            result = true;
          }

          break;
        }

      default:
        {
          throw ClientAuthError.createInvalidCacheTypeError();
        }
    } // write to the cache after removal


    if (result) {
      this.setCache(cache);
      this.emitChange();
    }

    return result;
  }
  /**
   * Checks whether key is in cache.
   * @param key
   * TODO: implement after the lookup implementation
   */
  ;

  _proto.containsKey = function containsKey(key) {
    return key ? true : false;
  }
  /**
   * Gets all keys in window.
   */
  ;

  _proto.getKeys = function getKeys() {
    this.logger.verbose("Retrieving all cache keys"); // read inMemoryCache

    var cache = this.getCache();
    return [].concat(Object.keys(cache.accounts), Object.keys(cache.idTokens), Object.keys(cache.accessTokens), Object.keys(cache.refreshTokens), Object.keys(cache.appMetadata));
  }
  /**
   * Clears all cache entries created by MSAL (except tokens).
   */
  ;

  _proto.clear = function clear() {
    var _this2 = this;

    this.logger.verbose("Clearing cache entries created by MSAL"); // read inMemoryCache

    var cacheKeys = this.getKeys(); // delete each element

    cacheKeys.forEach(function (key) {
      _this2.removeItem(key);
    });
    this.emitChange();
  }
  /**
   * Initialize in memory cache from an exisiting cache vault
   * @param cache
   */
  ;

  Storage.generateInMemoryCache = function generateInMemoryCache(cache) {
    return Deserializer.deserializeAllCache(Deserializer.deserializeJSONBlob(cache));
  }
  /**
   * retrieves the final JSON
   * @param inMemoryCache
   */
  ;

  Storage.generateJsonCache = function generateJsonCache(inMemoryCache) {
    return Serializer.serializeAllCache(inMemoryCache);
  };

  return Storage;
}(CacheManager);

var version = "0.1.0";

var defaultSerializedCache = {
  Account: {},
  IdToken: {},
  AccessToken: {},
  RefreshToken: {},
  AppMetadata: {}
};
/**
 * In-memory token cache manager
 */

var TokenCache = /*#__PURE__*/function () {
  function TokenCache(storage, logger, cachePlugin) {
    this.hasChanged = false;
    this.storage = storage;
    this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this));

    if (cachePlugin) {
      this.persistence = cachePlugin;
    }

    this.logger = logger;
  }
  /**
   * Set to true if cache state has changed since last time serialized() or writeToPersistence was called
   */


  var _proto = TokenCache.prototype;

  _proto.cacheHasChanged = function cacheHasChanged() {
    return this.hasChanged;
  }
  /**
   * Serializes in memory cache to JSON
   */
  ;

  _proto.serialize = function serialize() {
    this.logger.verbose("Serializing in-memory cache");
    var finalState = Serializer.serializeAllCache(this.storage.getCache()); // if cacheSnapshot not null or empty, merge

    if (!StringUtils.isEmpty(this.cacheSnapshot)) {
      this.logger.verbose("Reading cache snapshot from disk");
      finalState = this.mergeState(JSON.parse(this.cacheSnapshot), finalState);
    } else {
      this.logger.verbose("No cache snapshot to merge");
    }

    this.hasChanged = false;
    return JSON.stringify(finalState);
  }
  /**
   * Deserializes JSON to in-memory cache. JSON should be in MSAL cache schema format
   * @param cache
   */
  ;

  _proto.deserialize = function deserialize(cache) {
    this.logger.verbose("Deserializing JSON to in-memory cache");
    this.cacheSnapshot = cache;

    if (!StringUtils.isEmpty(this.cacheSnapshot)) {
      this.logger.verbose("Reading cache snapshot from disk");
      var deserializedCache = Deserializer.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
      this.storage.setCache(deserializedCache);
    } else {
      this.logger.verbose("No cache snapshot to deserialize");
    }
  }
  /**
   * Serializes cache into JSON and calls ICachePlugin.writeToStorage. ICachePlugin must be set on ClientApplication
   */
  ;

  _proto.writeToPersistence = function writeToPersistence() {
    try {
      var _this2 = this;

      _this2.logger.verbose("Writing to persistent cache");

      return Promise.resolve(function () {
        if (_this2.persistence) {
          _this2.logger.verbose("cachePlugin (persistent cache) not set by the user");

          var cache = Serializer.serializeAllCache(_this2.storage.getCache());

          var getMergedState = function getMergedState(stateFromDisk) {
            if (!StringUtils.isEmpty(stateFromDisk)) {
              _this2.logger.verbose("Reading state from disk");

              _this2.cacheSnapshot = stateFromDisk;
              cache = _this2.mergeState(JSON.parse(stateFromDisk), cache);
            } else {
              _this2.logger.verbose("No state from disk");
            }

            return JSON.stringify(cache);
          };

          return Promise.resolve(_this2.persistence.writeToStorage(getMergedState)).then(function () {
            _this2.hasChanged = false;
          });
        } else {
          throw ClientAuthError.createCachePluginError();
        }
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Calls ICachePlugin.readFromStorage and deserializes JSON to in-memory cache.
   * ICachePlugin must be set on ClientApplication.
   */
  ;

  _proto.readFromPersistence = function readFromPersistence() {
    try {
      var _this4 = this;

      _this4.logger.verbose("Reading from persistent cache");

      return Promise.resolve(function () {
        if (_this4.persistence) {
          _this4.logger.verbose("cachePlugin (persistent cache) not set by the user");

          return Promise.resolve(_this4.persistence.readFromStorage()).then(function (_this3$persistence$re) {
            _this4.cacheSnapshot = _this3$persistence$re;

            if (!StringUtils.isEmpty(_this4.cacheSnapshot)) {
              _this4.logger.verbose("Reading cache snapshot from disk");

              var cache = _this4.overlayDefaults(JSON.parse(_this4.cacheSnapshot));

              _this4.logger.verbose("Deserializing JSON");

              var deserializedCache = Deserializer.deserializeAllCache(cache);

              _this4.storage.setCache(deserializedCache);
            } else {
              _this4.logger.verbose("No cache snapshot to overlay and deserialize");
            }
          });
        } else {
          throw ClientAuthError.createCachePluginError();
        }
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * API that retrieves all accounts currently in cache to the user
   */
  ;

  _proto.getAllAccounts = function getAllAccounts() {
    this.logger.verbose("getAllAccounts called");
    return this.storage.getAllAccounts();
  }
  /**
   * API to remove a specific account and the relevant data from cache
   * @param account
   */
  ;

  _proto.removeAccount = function removeAccount(account) {
    this.logger.verbose("removeAccount called");
    this.storage.removeAccount(AccountEntity.generateAccountCacheKey(account));
  }
  /**
   * Called when the cache has changed state.
   */
  ;

  _proto.handleChangeEvent = function handleChangeEvent() {
    this.hasChanged = true;
  }
  /**
   * Merge in memory cache with the cache snapshot.
   * @param oldState
   * @param currentState
   */
  ;

  _proto.mergeState = function mergeState(oldState, currentState) {
    this.logger.verbose("Merging in-memory cache with cache snapshot");
    var stateAfterRemoval = this.mergeRemovals(oldState, currentState);
    return this.mergeUpdates(stateAfterRemoval, currentState);
  }
  /**
   * Deep update of oldState based on newState values
   * @param oldState
   * @param newState
   */
  ;

  _proto.mergeUpdates = function mergeUpdates(oldState, newState) {
    var _this5 = this;

    Object.keys(newState).forEach(function (newKey) {
      var newValue = newState[newKey]; // if oldState does not contain value but newValue does, add it

      if (!oldState.hasOwnProperty(newKey)) {
        if (newValue !== null) {
          oldState[newKey] = newValue;
        }
      } else {
        // both oldState and newState contain the key, do deep update
        var newValueNotNull = newValue !== null;
        var newValueIsObject = typeof newValue === 'object';
        var newValueIsNotArray = !Array.isArray(newValue);

        if (newValueNotNull && newValueIsObject && newValueIsNotArray) {
          _this5.mergeUpdates(oldState[newKey], newValue);
        } else {
          oldState[newKey] = newValue;
        }
      }
    });
    return oldState;
  }
  /**
   * Removes entities in oldState that the were removed from newState. If there are any unknown values in root of
   * oldState that are not recognized, they are left untouched.
   * @param oldState
   * @param newState
   */
  ;

  _proto.mergeRemovals = function mergeRemovals(oldState, newState) {
    this.logger.verbose("Remove updated entries in cache");
    var accounts = oldState.Account != null ? this.mergeRemovalsDict(oldState.Account, newState.Account) : oldState.Account;
    var accessTokens = oldState.AccessToken != null ? this.mergeRemovalsDict(oldState.AccessToken, newState.AccessToken) : oldState.AccessToken;
    var refreshTokens = oldState.RefreshToken != null ? this.mergeRemovalsDict(oldState.RefreshToken, newState.RefreshToken) : oldState.RefreshToken;
    var idTokens = oldState.IdToken != null ? this.mergeRemovalsDict(oldState.IdToken, newState.IdToken) : oldState.IdToken;
    var appMetadata = oldState.AppMetadata != null ? this.mergeRemovalsDict(oldState.AppMetadata, newState.AppMetadata) : oldState.AppMetadata;
    return _extends({
      Account: accounts,
      AccessToken: accessTokens,
      RefreshToken: refreshTokens,
      IdToken: idTokens,
      AppMetadata: appMetadata
    }, oldState);
  };

  _proto.mergeRemovalsDict = function mergeRemovalsDict(oldState, newState) {
    var finalState = _extends({}, oldState);

    Object.keys(oldState).forEach(function (oldKey) {
      if (!newState || !newState.hasOwnProperty(oldKey)) {
        delete finalState[oldKey];
      }
    });
    return finalState;
  };

  _proto.overlayDefaults = function overlayDefaults(passedInCache) {
    this.logger.verbose("Overlaying input cache with the default cache");
    return {
      Account: _extends({}, defaultSerializedCache.Account, {}, passedInCache.Account),
      IdToken: _extends({}, defaultSerializedCache.IdToken, {}, passedInCache.IdToken),
      AccessToken: _extends({}, defaultSerializedCache.AccessToken, {}, passedInCache.AccessToken),
      RefreshToken: _extends({}, defaultSerializedCache.RefreshToken, {}, passedInCache.RefreshToken),
      AppMetadata: _extends({}, defaultSerializedCache.AppMetadata, {}, passedInCache.AppMetadata)
    };
  };

  return TokenCache;
}();

var ClientApplication = /*#__PURE__*/function () {
  /**
   * Constructor for the ClientApplication
   * @param {@link (Configuration:type)} configuration object for the MSAL ClientApplication instance
   */
  function ClientApplication(configuration) {
    var _this$config$cache;

    this.config = buildAppConfiguration(configuration);
    this.logger = new Logger(this.config.system.loggerOptions);
    this.storage = new Storage(this.logger);
    this.tokenCache = new TokenCache(this.storage, this.logger, (_this$config$cache = this.config.cache) === null || _this$config$cache === void 0 ? void 0 : _this$config$cache.cachePlugin);
    this.cryptoProvider = new CryptoProvider();
    TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.auth.knownAuthorities, this.config.auth.cloudDiscoveryMetadata);
  }
  /**
   * Creates the URL of the authorization request letting the user input credentials and consent to the
   * application. The URL target the /authorize endpoint of the authority configured in the
   * application object.
   *
   * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
   * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
   * acquireToken(AuthorizationCodeRequest)
   * @param request
   */


  var _proto = ClientApplication.prototype;

  _proto.getAuthCodeUrl = function getAuthCodeUrl(request) {
    try {
      var _this2 = this;

      _this2.logger.info("getAuthCodeUrl called");

      return Promise.resolve(_this2.buildOauthClientConfiguration(request.authority)).then(function (authClientConfig) {
        _this2.logger.verbose("Auth client config generated");

        var authorizationCodeClient = new AuthorizationCodeClient(authClientConfig);
        return authorizationCodeClient.getAuthCodeUrl(_this2.initializeRequestScopes(request));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Acquires a token by exchanging the Authorization Code received from the first step of OAuth2.0
   * Authorization Code flow.
   *
   * getAuthCodeUrl(AuthorizationCodeUrlRequest) can be used to create the URL for the first step of OAuth2.0
   * Authorization Code flow. Ensure that values for redirectUri and scopes in AuthorizationCodeUrlRequest and
   * AuthorizationCodeRequest are the same.
   *
   * @param request
   */
  ;

  _proto.acquireTokenByCode = function acquireTokenByCode(request) {
    try {
      var _this4 = this;

      _this4.logger.info("acquireTokenByCode called");

      return Promise.resolve(_this4.buildOauthClientConfiguration(request.authority)).then(function (authClientConfig) {
        _this4.logger.verbose("Auth client config generated");

        var authorizationCodeClient = new AuthorizationCodeClient(authClientConfig);
        return authorizationCodeClient.acquireToken(_this4.initializeRequestScopes(request));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Acquires a token by exchanging the refresh token provided for a new set of tokens.
   *
   * This API is provided only for scenarios where you would like to migrate from ADAL to MSAL. Instead, it is
   * recommended that you use acquireTokenSilent() for silent scenarios. When using acquireTokenSilent, MSAL will
   * handle the caching and refreshing of tokens automatically.
   * @param request
   */
  ;

  _proto.acquireTokenByRefreshToken = function acquireTokenByRefreshToken(request) {
    try {
      var _this6 = this;

      _this6.logger.info("acquireTokenByRefreshToken called");

      return Promise.resolve(_this6.buildOauthClientConfiguration(request.authority)).then(function (refreshTokenClientConfig) {
        _this6.logger.verbose("Auth client config generated");

        var refreshTokenClient = new RefreshTokenClient(refreshTokenClientConfig);
        return refreshTokenClient.acquireToken(_this6.initializeRequestScopes(request));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Acquires a token silently when a user specifies the account the token is requested for.
   *
   * This API expects the user to provide an account object and looks into the cache to retrieve the token if present.
   * There is also an optional "forceRefresh" boolean the user can send, to bypass the cache for access_token and id_token
   * In case the refresh_token is expired or not found, an error is thrown
   * and the guidance is for the user to call any interactive token acquisition API (eg: acquireTokenByCode())
   * @param request
   */
  ;

  _proto.acquireTokenSilent = function acquireTokenSilent(request) {
    try {
      var _this8 = this;

      return Promise.resolve(_this8.buildOauthClientConfiguration(request.authority)).then(function (silentFlowClientConfig) {
        var silentFlowClient = new SilentFlowClient(silentFlowClientConfig);
        return silentFlowClient.acquireToken(_this8.initializeRequestScopes(request));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getCacheManager = function getCacheManager() {
    this.logger.info("getCacheManager called");
    return this.tokenCache;
  };

  _proto.buildOauthClientConfiguration = function buildOauthClientConfiguration(authority) {
    try {
      var _this10 = this;

      _this10.logger.verbose("buildOauthClientConfiguration called"); // using null assertion operator as we ensure that all config values have default values in buildConfiguration()


      var _this9$config$auth$cl2 = _this10.config.auth.clientId;
      return Promise.resolve(_this10.createAuthority(authority)).then(function (_this9$createAuthorit) {
        return {
          authOptions: {
            clientId: _this9$config$auth$cl2,
            authority: _this9$createAuthorit,
            knownAuthorities: _this10.config.auth.knownAuthorities,
            cloudDiscoveryMetadata: _this10.config.auth.cloudDiscoveryMetadata
          },
          loggerOptions: {
            loggerCallback: _this10.config.system.loggerOptions.loggerCallback,
            piiLoggingEnabled: _this10.config.system.loggerOptions.piiLoggingEnabled
          },
          cryptoInterface: _this10.cryptoProvider,
          networkInterface: _this10.config.system.networkClient,
          storageInterface: _this10.storage,
          libraryInfo: {
            sku: Constants.MSAL_SKU,
            version: version,
            cpu: process.arch || '',
            os: process.platform || ''
          }
        };
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /**
   * Generates a request with the default scopes.
   * @param authRequest
   */
  ;

  _proto.initializeRequestScopes = function initializeRequestScopes(authRequest) {
    this.logger.verbose("initializeRequestScopes called");
    return _extends({}, authRequest, {
      scopes: [].concat(authRequest && authRequest.scopes || [], [Constants$1.OPENID_SCOPE, Constants$1.PROFILE_SCOPE, Constants$1.OFFLINE_ACCESS_SCOPE])
    });
  }
  /**
   * Create authority instance. If authority not passed in request, default to authority set on the application
   * object. If no authority set in application object, then default to common authority.
   * @param authorityString
   */
  ;

  _proto.createAuthority = function createAuthority(authorityString) {
    try {
      var _this12 = this;

      _this12.logger.verbose("createAuthority called");

      var authority;

      if (authorityString) {
        _this12.logger.verbose("Authority passed in, creating authority instance");

        authority = AuthorityFactory.createInstance(authorityString, _this12.config.system.networkClient);
      } else {
        _this12.logger.verbose("No authority passed in request, defaulting to authority set on application object");

        authority = _this12.authority;
      }

      if (authority.discoveryComplete()) {
        return Promise.resolve(authority);
      }

      return Promise.resolve(_catch(function () {
        return Promise.resolve(authority.resolveEndpointsAsync()).then(function () {
          return authority;
        });
      }, function (error) {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError(error);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _createClass(ClientApplication, [{
    key: "authority",
    get: function get() {
      if (this._authority) {
        return this._authority;
      }

      this.logger.verbose("No authority set on application object. Defaulting to common authority");
      this._authority = AuthorityFactory.createInstance(this.config.auth.authority || Constants$1.DEFAULT_AUTHORITY, this.config.system.networkClient);
      return this._authority;
    }
  }]);

  return ClientApplication;
}();

/**
 * Class to be used to acquire tokens for public client applications (desktop, mobile). Public client applications
 * are not trusted to safely store application secrets, and therefore can only request tokens in the name of an user.
 */

var PublicClientApplication = /*#__PURE__*/function (_ClientApplication) {
  _inheritsLoose(PublicClientApplication, _ClientApplication);

  /**
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. ou can obtain one by registering your application with our Application registration portal
   * - authority: the authority URL for your application.
   *
   * AAD authorities are of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * Azure B2C authorities are of the form https://{instance}/{tenant}/{policy}. Each policy is considered
   * it's own authority. You will have to set the all of the knownAuthorities at the time of the client application
   * construction
   *
   * ADFS authorities are of the form https://{instance}/adfs
   *
   * @param {@link (Configuration:type)} configuration object for the MSAL PublicClientApplication instance
   */
  function PublicClientApplication(configuration) {
    return _ClientApplication.call(this, configuration) || this;
  }
  /**
   * Acquires token from the authority using OAuth2.0 device code flow.
   * Flow is designed for devices that do not have access to a browser or have input constraints.
   * The authorization server issues DeviceCode object with a verification code, an end-user code
   * and the end-user verification URI. DeviceCode object is provided through callback, end-user should be
   * instructed to use another device to navigate to the verification URI to input credentials.
   * Since the client cannot receive incoming requests, it polls the authorization server repeatedly
   * until the end-user completes input of credentials.
   */


  var _proto = PublicClientApplication.prototype;

  _proto.acquireTokenByDeviceCode = function acquireTokenByDeviceCode(request) {
    try {
      var _this2 = this;

      _this2.logger.info("acquireTokenByDeviceCode called");

      return Promise.resolve(_this2.buildOauthClientConfiguration(request.authority)).then(function (deviceCodeConfig) {
        _this2.logger.verbose("Auth client config generated");

        var deviceCodeClient = new DeviceCodeClient(deviceCodeConfig);
        return deviceCodeClient.acquireToken(_this2.initializeRequestScopes(request));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return PublicClientApplication;
}(ClientApplication);

var ConfidentialClientApplication = function ConfidentialClientApplication() {};

export { ConfidentialClientApplication, CryptoProvider, PublicClientApplication, Storage, TokenCache, buildAppConfiguration };
//# sourceMappingURL=msal-node.esm.js.map
