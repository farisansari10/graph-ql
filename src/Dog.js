import React from 'react';
import { useParams } from 'react-router-dom';
import { useDog } from './hooks/useDog';

function Dog() {
    const { id } = useParams()
    const { loading, data, error } = useDog(id);
    console.log(error, loading, data);
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    return (
        <div className='flex flex-col justify-center items-center space-y-4 py-12'>
            <img src={data.character.image} alt='doog' />
            <p>{data.character.name}</p>
            {
                data.character.episode.map((episode) => {
                    return (
                        <div>
                            <p>{episode.name}</p>
                            <p>{episode.episode}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dog;
