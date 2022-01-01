import React from "react";
import { useParams } from "react-router-dom";

const BreweryDetail = ({ props }) => {

    const { id } = useParams();
    
    return (
        <div style={{ fontSize: "20px" }}>

            {
                props
                    .filter((list) => list.id === id)
                    .map((list) => (
                        <div key={list.id}>
                            <h4>Showing detail about each brewery</h4>
                            <p>name: {list.name}</p>
                            <p>brewery_type: {list.brewery_type}</p>
                            <p>street: {list.street}</p>
                            <p>address 2: {list.address_2}</p>
                            <p>address 3: {list.address_3}</p>
                            <p>city: {list.city}</p>
                            <p>state: {list.state}</p>
                            <p>county_province: {list.county_province}</p>
                            <p>postal_code: {list.postal_code}</p>
                        </div>
                    ))
            }

        </div>
    );
    
}

export default BreweryDetail;

