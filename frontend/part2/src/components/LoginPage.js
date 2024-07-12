import React, { useState } from 'react';
import { Container, TextField,Box,Paper, Button, Typography } from '@mui/material';
import axios from 'axios'; 

const LoginPage = () => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost:8000/api/auth/login', {
            username: username,
            password: password
        })
            .then(response => {
                // Save the JWT token to local storage or state management solution
                localStorage.setItem('access_token', response.data.bearer);
                // localStorage.setItem('refresh_token', response.data.refresh);
                console.log('Logged in successfully:', response.data);
                // Redirect to another page or perform additional actions
            })
            .catch(error => {
                console.error('There was an error logging in!', error);
                //setError('Invalid username or password');
            });
    };

    return (
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
            </Container>
        </Box>
    );
};

export default LoginPage;
