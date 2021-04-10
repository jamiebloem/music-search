import axios from "axios";
import './App.css';
import {useState, useEffect} from 'react';


function App() {
    const [query, setQuery] = useState('Coldplay');
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        async function fetchData(event) {
            // console.log('hallo', query)
            const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`);
            // console.log(response.data.artists[0])
            console.log(response.data)

            if (response.data.artists){
                setArtist(response.data.artists[0]);
            }

        }
        fetchData();
    }, [query] //we luisteren hier na de verandering van query
   );

    //haalt data meteen op



    async function fetchData(event) {
        // console.log('hallo', query)
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`);
        // console.log(response.data.artists[0])
        setArtist(response.data.artists[0]);

    }

    // console.log(artist)

    return (
        <>
            <div>
                <input value={query} onChange={event => setQuery(event.target.value)} type="search"/>
                <button onClick={fetchData}>Search</button>
            </div>
            <div>
                <h1>
                    {artist && artist.strArtist}
                </h1>
                <p>
                    {artist && artist.strBiographyEN}
                </p>
            </div>

        </>
    );
}

export default App;
