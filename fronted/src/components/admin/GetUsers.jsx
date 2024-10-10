import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch users from the API
    axios.get('http://localhost/react/getUsers.php')
      .then((response) => {
        if (response.data.success) {
          setUsers(response.data.data);
        } else {
          setError(response.data.message);
        }
      })
      .catch((error) => {
        setError('Error fetching users');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // Call delete API if user confirms deletion
      axios.get(`http://localhost/react/deleteUser.php?userId=${userId}`)
        .then(response => {
          if (response.data.success) {
            // Remove the user from the state after successful deletion
            setUsers(users.filter(user => user.userId !== userId));
            alert(response.data.message);
          } else {
            alert('Failed to delete user');
          }
        })
        .catch(error => {
          console.error('There was an error deleting the user!', error);
        });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="section-padding float-start w-100">
    <div className="container">
    <h1 className='contact-title ps-2 fs-22 text-start fw-semibold text-capitalize title-padding text-black'>Users details</h1>
      <div class="gray-border ">
      <table class="myproperty w-100">
              <thead className="gray-b-border">
          <tr className='gray-b-border'>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>ID</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>Name</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>Email</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>Role</th>
            <th scope="col" className='fs-22 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black text-hover-orange'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId} className='gray-b-border'>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{user.userId}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{user.name}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{user.email}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>{user.role}</td>
              <td className='fs-18 text-start fw-semibold Poppins text-capitalize pb-md-2 text-black'>
                
                    <a href="/editUserProfile" className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" height="20" width="20"  viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>
                    </a>
                <a href="#" onClick={() => handleDelete(user.userId)}><svg xmlns="http://www.w3.org/2000/svg" fill="#ff0000" height="20" width="20" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"></path></svg></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default GetUsers;
