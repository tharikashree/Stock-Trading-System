import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const LogoutPage = () => {
    const handleLogout = () => {
        // Clear token from localStorage or session storage
        localStorage.removeItem('authToken');
        // Redirect to login page or perform any other logout actions
        //history.push('/login');
    };

    return (
        <Container>
            <Typography variant="h4">Logout</Typography>
            <Button variant="contained" color="secondary" onClick={handleLogout}>
                Logout
            </Button>
        </Container>
    );
};

export default LogoutPage;
