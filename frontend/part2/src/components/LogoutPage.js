// import React from 'react';
// import { Container, Typography, Button, Snackbar, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const LogoutPage = () => {
//     const handleLogout = () => {
        
//         localStorage.removeItem('authToken');
       
//     };

//     return (
//         <Container>
//             <Typography variant="h4">Logout</Typography>
//             <Button variant="contained" color="secondary" onClick={handleLogout}>
//                 Logout
//             </Button>
//         </Container>
//     );
// };

// export default LogoutPage;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

const LogoutPage = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {
            const accessToken = localStorage.getItem('access_token');
            console.log(accessToken);
            if (accessToken) {
                axios.post('http://localhost:8000/api/auth/logout', {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                })
                    .then(response => {
                        console.log('Logout successful', response);
                        localStorage.removeItem('access_token');
                        setOpen(true); 
                        setTimeout(() => {
                            navigate('/login');
                        }, 1000); 
                    })
                    .catch(error => {
                        console.error('There was an error logging out!', error);
                    });
            } else {
                navigate('/login');
            }
        };

        handleLogout();
    }, [navigate]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            Logging out...
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Logged out successfully!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default LogoutPage;
