/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');

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
        } catch (error) {
            throw new Error(error);
        }
    };

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, [value]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        shortenUrl(value).then((response) => {
            if (response.status >= 200 && response.status <= 300) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }).then(async (res) => {
            await console.log('success');
        }).catch(() => {
            console.log('error');
        });
    }, [value]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input placeholder="Url to shorten" id="shorten" type="text" value={value} onChange={onChange} />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            {/* TODO: show below only when the url has been shortened and copied */}
            <div>
                {/* Show shortened url --- copied! */}
            </div>
        </form>
    );
};

export default ShortenUrlForm;
