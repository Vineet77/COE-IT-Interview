import React, {useEffect, useState} from "react";
import PublicationsRow from "./PublicationsRow";

function PublicationsTable() {
    const [publications, setPublications] = useState([]);

    async function fetchData() {
        console.log("Fetching Data")
        const response = await fetch("/publication/");
        const data = await response.json();
        setPublications(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Student</th>
            </tr>
            </thead>
            <tbody>
            {publications.map((p) => (
                <PublicationsRow publication={p} key={p.id}/>
            ))}
            </tbody>
        </table>
    )
}

export default PublicationsTable