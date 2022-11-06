import { useState, useEffect } from 'react'


export default function Pokemon({ pokelist }) {

    const [detail, setDetail] = useState(null)

    const extraData = async () => {
        const response = await fetch(pokelist.url);
        const data = await response.json();
        setDetail(data);
        console.log(data)
    }

    useEffect(() => {
        extraData();
    }, [])


    return (
        <div className="card">
            <h4>{pokelist.name}</h4>
            <ul>
                Abilities:
                {
                    detail === null
                        ? <li>loading...</li>
                        : detail.abilities.map(detail => { return <li>{detail.ability.name}</li> })
                }
            </ul>
        </div>
    )
}