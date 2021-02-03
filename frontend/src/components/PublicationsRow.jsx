import React from 'react';

function PublicationsRow({publication}){

    return (
        <tr>
            <td>{publication.title}</td>
            <td>{publication.year}</td>
            <td>{publication.student.first_name} {publication.student.last_name}</td>
        </tr>
    )
}

export default PublicationsRow