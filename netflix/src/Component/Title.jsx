import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Title =() => {
    const data =useParams();
    console.log(data);
    const[show, setShows] =useState();

    useEffect(() => {
        fetch("http://api.tvmaze.com/search/shows?q=golden girls")
          .then((res) => res.json())
          .then ((json) => json.filter((obj) => obj.show.id === data.id))
          .then((data) => setShows(data));
      }, []);

    console.log(show);
    return(
        <>
        </>
    )
}
export default Title;