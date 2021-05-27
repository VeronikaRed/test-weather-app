import { useEffect, useState } from 'react';

const { REACT_APP_API_URL, REACT_APP_WEATHER_API_KEY } = process.env;

export const LayoutContainer = ({ children }) => {
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [data, setData] = useState();
    const handleChangeSearch = e => setSearch(e.target.value);

    const handleSearchWeather = async () => {
        if (search) {
            setIsSearching(true);

            try {
                const url = `${REACT_APP_API_URL}/weather?q=${search}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`;

                const response = await fetch(url);
                const results = await response.json();

                setSearch('');
                setData(results);
                window.localStorage.setItem('location', results.id);
                setIsSearching(false);
            } catch (e) {
                console.log(e);
            }
        }
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

    if (!data) return null;

    return children({
        search,
        isSearching,
        data,
        onChangeSearch: handleChangeSearch,
        onSearchWeather: handleSearchWeather,
        onKeyDown: handleKeyDown
    });
};
