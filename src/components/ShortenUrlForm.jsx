import React, { useCallback, useRef, useState } from 'react';
import { createShortLink } from '../services/shortenService';
import { validateURL } from '../helpers/url';
import { statuses } from '../constants/statuses';

const ShortenUrlForm = () => {
    const inputRef = useRef(null);
    const [status, setStatus] = useState('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if (!inputRef.current) {
            return;
        }

        const { value } = inputRef.current;

        const isUrlValid = validateURL(value);

        if (isUrlValid) {
            setStatus('');
            createShortLink(value);

            // here is possible to set status from bit.ly response or our custom one
        } else {
            setStatus(statuses.invalidLink);
        }
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input
                    ref={inputRef}
                    placeholder="Url to shorten"
                    id="shorten"
                    type="text"
                />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            {status && <div>{status}</div>}
        </form>
    );
};

export default ShortenUrlForm;
