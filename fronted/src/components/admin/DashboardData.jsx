
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardData = () => {
    const [data, setData] = useState({
        properties: 0,
        propertyTypes: 0,
        users: 0,
        bookings:0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/react/dashboard.php');
                setData(response.data);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2 className="admin-heading fs-30 fw-700 pb-lg-3 pb-2">Dashboard</h2>
            <div className="row justify-content-start">
                <div className="col-md-4 col-sm-6 col-12">
                    <a href="/getProperty">
                    <div className="detail-box">
                        <span className="count text-center fw-bold Poppins text-capitalize fs-36 text-black">{data.properties}</span>
                        <p className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Properties</p>
                    </div>
                    </a>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <a href="/getPropertyType">
                    <div className="detail-box">
                        <span className="count text-center fw-bold Poppins text-capitalize fs-36 text-black">{data.propertyTypes}</span>
                        <p className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Property Types</p>
                    </div>
                    </a>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                <a href="/getUsers">
                    <div className="detail-box">
                        <span className="count text-center fw-bold Poppins text-capitalize fs-36 text-black">{data.users}</span>
                        <p className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">Users</p>
                    </div>
                    </a>
                </div>
                {/* book property list */}
                <div className="col-md-4 col-sm-6 col-12">
                    <a href="/getBookProperty">
                    <div className="detail-box">
                        <span className="count text-center fw-bold Poppins text-capitalize fs-36 text-black">{data.bookings}</span>
                        <p className="count-tag text-center fw-semibold Poppins text-capitalize fs-18 text-black">propery booking</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DashboardData;
