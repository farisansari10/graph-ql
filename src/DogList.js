import React from "react";
import { Link } from "react-router-dom";
import { useDogs } from "./hooks/useDogs";

function DogsList() {
    const { loading, data, error } = useDogs();
    if (loading) return <p>Loading</p>;
    if (error) return <p>Error</p>;

    return (
        <div className="grid grid-cols-4">
            {data.characters.results.map((dog) => {
                return (
                    <Link to={`/${dog.id}`}>
                        <div key={dog.id}>
                            <img src={dog.image} alt="dogs" />
                            <p>{dog.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default DogsList;
