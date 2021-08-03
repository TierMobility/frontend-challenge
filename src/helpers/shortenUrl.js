export const shortenUrl = async (url) => {
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
