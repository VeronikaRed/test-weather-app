import { useEffect, useState } from 'react';

const { REACT_APP_API_URL, REACT_APP_WEATHER_API_KEY } = process.env;

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [data, setData] = useState();
    const [hasError, setHasError] = useState({
        flag: false,
        errorMessage: ''
    });
    const handleChangeSearch = e => setSearch(e.target.value);

    const handleSearchWeather = async () => {
        if (search) {
            setIsSearching(true);

            try {
                const url = `${REACT_APP_API_URL}/weather?q=${search}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`;

                const response = await fetch(url);
                const results = await response.json();
                if (results.cod === 200) {
                    setSearch('');
                    setData(results);
                    window.localStorage.setItem('location', results.id);
                    setIsSearching(false);
                } else {
                    throw new Error(
                        `Status code: ${results.cod}. Reason: ${results.message}. Please reload the page and try again. `
                    );
                }
            } catch (e) {
                setHasError({ flag: true, errorMessage: e.message });
            }
        }
    };

    const handleReloadPage = () => {
        setHasError({
            flag: false,
            errorMessage: ''
        });
        setSearch('');
        setIsSearching(false);
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleSearchWeather();
        }
    };

    useEffect(() => {
        let id = localStorage.getItem('location');
        if (id) {
            const url = `${REACT_APP_API_URL}/weather?id=${id}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}&lang={lang}`;
            (async () => {
                try {
                    const response = await fetch(url);
                    const results = await response.json();
                    setData(results);
                } catch (e) {
                    console.log(e);
                }
            })();
        }

        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return children({
        search,
        isSearching,
        data,
        hasError,
        onChangeSearch: handleChangeSearch,
        onSearchWeather: handleSearchWeather,
        onKeyDown: handleKeyDown,
        onReloadPage: handleReloadPage
    });
};
