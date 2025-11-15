import { useCallback, useEffect, useState } from "react"
import { NavLink } from "react-router"
import ApiClient from "../../utils/ApiClient"

interface Movies{
    _id : string,
    judul : string,
    tahunRilis : string,
    sutradara : string,
    createdAt : string,
    updateAt : string
}

function Movies(){
    const [movie, setMovies] = useState<Movies[]>([])

    const fecthMovies = useCallback (async()=> {
        const response = await ApiClient.get("/movies")

        if(response.status == 200) {
            setMovies(response.data.data)
        }
    }, [])

    useEffect(() => {
        fecthMovies()
    },[fecthMovies])

    return <div className="container mx-auto">
        <div className="d-flex justify-content-between mb-3">
        <h2>Movie page</h2>
        <NavLink to="/add-movie" className="btn btn-primary">Add Movie</NavLink>
     </div>
    </div>
}
export default Movies