import iFetch from 'isomorphic-fetch';

/*
const baseGetConfig = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
        Accept: 'application/json',
    },
};
*/

const basePostConfig = {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        Accept: 'application/json',
        Cookie: document.cookie,
        'Content-Type': 'application/json',
    },
};

if (!window.fetch) {
    window.fetch = iFetch;
}
/**
  * @private
  * @name getFetch
  * @description Initiates a GET fetch request using default options
  * @param  {string}  url The URL to GET
  * @return {Promise}     A fetch Promise

const getFetch = (url) => fetch(url, baseGetConfig);
*/

/**
  * @private
  * @name postFetch
  * @description Initiates a POST fetch request using default options
  * @param  {string} url  The URL to POST to
  * @param  {object} body The POST body to send
  * @return {Promise}     A fetch Promise
  */
const postFetch = (url, body) => fetch(url, {
    ...basePostConfig,
    body: JSON.stringify(body),
});

/**
 * default for handling api responses
 * @param  {object} response
 * @return {object} response.json()
 */
const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};

const handleError = (error) => { throw new Error(error);};

//Room: 'Seth Test'
const hipChatPostURL = 'https://sans.hipchat.com/v2/room/4620591/notification?auth_token=ghrTQ597YcHIq8PSBvLsyxzZmCzLFjH9jMX0G63Q';

export const postHipChat = (payload) =>
    postFetch(hipChatPostURL, payload)
        .then(handleResponse)
        .catch(handleError);
