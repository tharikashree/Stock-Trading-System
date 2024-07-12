// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography } from '@mui/material';
// import axios from 'axios';

// const SignupPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignup = () => {
//         axios.post('http://localhost:8000/api/auth/register', { username: email, password })
//             .then(response => {
//                 console.log('Signup successful!', response.data);
                
//                 // Handle success, e.g., redirect to login page
//             })
//             .catch(error => {
//                 console.error('Error signing up!', error);
//                 // Handle error, e.g., display error message to user
//             });
//     };

//     return (
//         <Container>
//             <Typography variant="h4">Sign Up</Typography>
//             <TextField
//                 label="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 fullWidth
//                 margin="normal"
//             />
//             <TextField
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 fullWidth
//                 margin="normal"
//             />
//             <Button variant="contained" color="primary" onClick={handleSignup}>
//                 Sign Up
//             </Button>
//         </Container>
//     );
// };

// export default SignupPage;
import React, { useState } from 'react';
import { Container, TextField, Button,Box,Paper,Typography, CssBaseline } from '@mui/material';
import axios from 'axios';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsern] = useState('');
    const handleSignup = () => {
        axios.post('http://localhost:8000/api/auth/register',{
            username: username,
            email: email,
            password:password
        })
            .then(response => {
                console.log('Signup successful!', response.data);

                // Handle success, e.g., redirect to login page
            })
            .catch(error => {
                console.error('Error signing up!', error);
                // Handle error, e.g., display error message to user
            });
    };

    return (
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
            </Container>
        </Box>
    );
};

export default SignupPage;
