
import React, { useEffect, useState } from 'react';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import axios from 'axios';
import SideNav from './SideNav';

const UserProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const access_token = localStorage.getItem("access_token");
                const response = await axios.get('http://localhost:8000/api/auth/user', {
                    headers: { 'Authorization': `Bearer ${access_token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
    <>
            <SideNav />
        <Box sx={{ display: 'flex', backgroundColor: '#6a1b9a', minHeight: '100vh', color: '#fff' }}>
            <CssBaseline />
             
            <Container sx={{ padding: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    User Profile
                </Typography>
                <Card sx={{ maxWidth: 600, margin: 'auto', boxShadow: 3 }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
                        <CardMedia>
                            <Avatar sx={{ width: 80, height: 80, marginRight: 2 }}>
                                <AccountCircleIcon fontSize="large" />
                            </Avatar>
                        </CardMedia>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'purple' }}>
                                   Username: {user.username}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'purple' }}>
                                    Email: {user.email}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, color: 'purple' }}>
                                    Name: {user.username}
                            </Typography>

                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    </>
    );
};

export default UserProfilePage;
