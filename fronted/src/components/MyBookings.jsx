import React, { useState, useEffect } from "react";
import axios from "axios";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [userId, setUserId] = useState(null);

    // Fetch userId from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        const userId = parsedUser ? parsedUser.userId : null;
        if (userId) {
            setUserId(userId);
        } else {
            setError("User ID not found. Please log in again.");
            setLoading(false);
        }
    }, []);

    // Fetch user bookings from API
    useEffect(() => {
        if (!userId) return;

        axios
            .post("http://localhost/react/getUserBookings.php", { userId })
            .then((response) => {
                if (response.data.status === "success") {
                    setBookings(response.data.bookings);
                } else {
                    setError(response.data.message);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching bookings:", error);
                setError("Error fetching bookings");
                setLoading(false);
            });
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container">
            <div className="row">
            <h2 className="contact-title fs-22 text-start fw-semibold Poppins text-capitalize title-padding text-black ms-2">My Bookings</h2>
                {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                        <div key={index} className="booking-item">
                            <div className="col-md-6">
                                <div className="author-info gray-border p-md-4 p-3 mb-md-4 mb-2 w-100">
                                      <h3 className="fs-22 text-start fw-semibold Poppins text-capitalize title-padding pt-0 text-black">{booking.name}</h3>
                                    <div className="d-flex">
                                        <div>
                                            <img src={booking.image} alt={booking.name} style={{ width: "200px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <p className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray me-2"><span className="fw-bold fs-14 me-1">Price: </span> ${booking.price}</p>
                                            <p className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray me-2"><span className="fw-bold fs-14 me-1">Start Date: </span>{booking.start_date}</p>
                                            <p className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray me-2"><span className="fw-bold fs-14 me-1">End Date: </span>{booking.end_date}</p>
                                            <p className="text-start fw-normal font-nunito text-capitalize fs-14 text-lightGray me-2"><span className="fw-bold fs-14 me-1">Status: </span> {booking.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    ))
                ) : (
                    <div>No bookings found.</div>
                )}

            </div>

        </div>
    );
};

export default MyBookings;
