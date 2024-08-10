import React, { useState } from 'react';
import { Container, TextField, Box, Paper, Button, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios'; 
import SideNav from './SideNav'; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:8000/api/auth/login', {
            username: username,
            password: password
        })
            .then(response => {
                
                localStorage.setItem('access_token', response.data.bearer);
          
                console.log('Logged in successfully:', response.data);
                setOpen(true);
                setTimeout(() => {
                    navigate('/');
                }, 1000); 
            })
            .catch(error => {
                setError('Login failed. Please check your credentials and try again.');
                setOpen(true);
            });
    };
    const handleClose = () => {
        setOpen(false);
        setError('');
    };
    return (
    <>
        <SideNav />
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: '#f3e5f5',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container sx={{ maxWidth: 400 }}>
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        backgroundColor: '#ffffff',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: 3, color: '#6a1b9a', textAlign: 'center' }}>
                        Login
                    </Typography>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#6a1b9a' } }}
                        InputProps={{ style: { color: '#6a1b9a' } }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#6a1b9a' } }}
                        InputProps={{ style: { color: '#6a1b9a' } }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        fullWidth
                        sx={{
                            backgroundColor: '#6a1b9a',
                            marginTop: 2,
                            ':hover': { backgroundColor: '#ff4081' }
                        }}
                    >
                        Login
                    </Button>
                </Paper>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                            {error ? error : "Login successful!"}
                        </Alert>
                    </Snackbar>
            </Container>
        </Box>
    </>
    );
};

export default LoginPage;
