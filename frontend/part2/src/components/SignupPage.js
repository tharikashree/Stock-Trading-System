
import React, { useState } from 'react';
import { Container, TextField, Button,Box,Paper,Typography, CssBaseline,Snackbar,Alert} from '@mui/material';
import axios from 'axios';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsern] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        axios.post('http://localhost:8000/api/auth/register',{
            username: username,
            email: email,
            password:password
        })
            .then(response => {
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after 2 seconds
                }, 2000);
            })
            .catch(error => {
                setError('Signup failed. Please check your details and try again.');
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
                backgroundColor: '#f3e5f5',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CssBaseline />
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center', color: '#6a1b9a' }}>
                        Sign Up
                    </Typography>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsern(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{ style: { color: '#6a1b9a' } }}
                        InputProps={{ style: { color: '#6a1b9a' } }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onClick={handleSignup}
                        fullWidth
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#6a1b9a',
                            ':hover': { backgroundColor: '#ff4081' }
                        }}
                    >
                        Sign Up
                    </Button>
                </Paper>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
                        {error ? error : "Signup successful! Redirecting to login..."}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    </>
    );
};

export default SignupPage;
