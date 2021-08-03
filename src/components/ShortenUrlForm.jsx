/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';
import { shortenUrl } from '../helpers/shortenUrl';
import { regexForUrl } from '../helpers/regexForUrl';
import { copyToClipboard } from '../helpers/copyToClipboard';
import { Message } from './Message';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [shortUrl, setShortUrl] = useState(null);
    const [validationMsg, setValidationMsg] = useState(false);
    const [error, setError] = useState(false);

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
                <input placeholder="Url to shorten" id="shorten" data-testid="shorten-input" type="text" value={value} onChange={onChange} />
            </label>
            <input type="submit" data-testid="button-submit" value="Shorten and copy URL" />
            {shortUrl &&
                (
                    <Message>
                        {`Congrats! Your short link is ready and copied in clipboard! ${shortUrl}`}
                    </Message>
                )}
            {validationMsg &&
                (
                    <Message>
                        This URL is not valid
                    </Message>
                )}
            {error &&
                (
                    <Message>
                        Oops, something went wrong. Please, try again
                    </Message>
                )}
        </form>
    );
};

export default ShortenUrlForm;
