import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h1>Details of : {service.name}</h1>
            <h2>This is from booking page of ID {serviceId}</h2>
        </div>
    );
};

export default Booking;