/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';

const regexForUrl =
new RegExp(/^((http(s?)):\/\/)[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/);
const copyToClipboard = async copyText => navigator.clipboard.writeText(copyText);

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [shortUrl, setShortUrl] = useState(null);
    const [validationMsg, setValidationMsg] = useState(false);
    const [error, setError] = useState(false);

    const shortenUrl = async (url) => {
        const headers = {
            Authorization: `Bearer ${process.env.REACT_APP_BITLY_AUTORIZATION_TOKEN}`,
            'Content-Type': 'application/json',
        };
        try {
            return fetch('https://api-ssl.bitly.com/v4/shorten', {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    long_url: url,
                    domain: 'bit.ly',
                }),
            });
        } catch (err) {
            throw new Error(err);
        }
    };

    const onChange = useCallback((e) => {
        setValue(e.target.value);
        setValidationMsg(false);
        setError(false);
    }, [value]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        setShortUrl(null);
        if (!regexForUrl.test(value)) {
            setValidationMsg(true);
            return;
        }
        shortenUrl(value).then((response) => {
            if (response.status >= 200 && response.status <= 300) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }).then(async (res) => {
            await copyToClipboard(res.link);
            setShortUrl(res.link);
        }).catch(() => {
            setError(true);
        });
    }, [value]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input placeholder="Url to shorten" id="shorten" type="text" value={value} onChange={onChange} />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            {shortUrl &&
                (
                    <div>
                        {`Congrats! Your short link is ready and copied in clipboard! ${shortUrl}`}
                    </div>
                )}
            {validationMsg &&
                (
                    <div>
                        This URL is not valid
                    </div>
                )}
            {error &&
                (
                    <div>
                        Oops, something went wrong. Please, try again
                    </div>
                )}
        </form>
    );
};

export default ShortenUrlForm;
