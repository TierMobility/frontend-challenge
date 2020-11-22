import React, { useCallback, useState } from 'react';
import { createShortLink } from '../services/shortenService';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        createShortLink(value);
    }, []);

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
