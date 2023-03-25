import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
const Asyncsearch = (props) => {
    const [search, setSearch] = useState(null);
    const loadOptions = (inputValue) => {
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4da3ba0af3msh60d718dd57047adp1a0b80jsnd49c52783390',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        return (
            fetch(url, options)
                .then(res => res.json())
                .then((res) => {
                    return {
                        options: res.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name} ${city.countryCode}`
                            };
                        }),
                    };
                })
                .catch(err => console.error('error:' + err)));

    };
    const handleOnChange = (searchData) => {
        // props.setProgress(0);
        setSearch(searchData);
        props.onSearchChange(searchData);
        // props.setProgress(100)

    };
    return (
        <AsyncPaginate
            placeholder="Search your city...."
            debounceTimeout={800}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );

}

export default Asyncsearch;