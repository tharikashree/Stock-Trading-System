import React from 'react';
import { Container, Typography, Link, Grid,Card,CardContent, Box , CardMedia } from '@mui/material';
import SideNav from './SideNav';
import './LandingPage.css';
import img2 from '../assets/img2.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


const LandingPage = () => {
    return (
        <>  <SideNav />
            <Box sx={{ bgcolor: '#6a1b9a', color: '#fff', p: 2, display: 'flex', justifyContent: 'space-between', textAlign:'center' }}>
                <Typography variant="h6">
                    Stock Trading platform
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/login" color="inherit" sx={{ mr: 2,textDecoration:'none' }}>
                        <LockOpenIcon sx={{ mr: 1 }} />
                        Login
                    </Link>
                    <Link href="/signup" color="inherit" sx={{ textDecoration: 'none' }}>
                        <AccountCircleIcon sx={{ mr: 1 }} />
                        Sign Up
                    </Link>
                    <Link href="http://127.0.0.1:8000/admin/login/" color="inherit" sx={{ textDecoration: 'none' }}>
                        <AdminPanelSettingsIcon sx={{ mr: 1 ,ml:1}} />
                        Admin
                    </Link>
                </Box>
            </Box>
            <Container>
                <Typography variant="h2" sx={{ mt: 3 ,textAlign:'center'}}>
                    Welcome to Stock Trading Portal
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={img2} 
                            alt="Stock Trading Image"
                            sx={{
                                maxWidth: '100%',     
                                maxHeight: '300px',   
                                objectFit: 'cover',   
                                borderRadius: '16px'  
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Learn, Invest, and Trade
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Start exploring the world of stock trading with our comprehensive platform.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
            <Container sx={{ mt: 8 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box className="feature">
                            <Typography variant="h3" className="feature-title">
                                Easy to Use
                            </Typography>
                            <Typography variant="body1" className="feature-description">
                                Our platform provides an intuitive and user-friendly experience
                                for managing your investments.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box className="feature">
                            <Typography variant="h3" className="feature-title">
                                Real-Time Data
                            </Typography>
                            <Typography variant="body1" className="feature-description">
                                Access up-to-date market data and make informed decisions with
                                live updates.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{ mt: 8 }}>
                <Typography variant="h2" className="section-title">
                    Testimonials
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Box className="testimonial">
                            <Typography variant="body1">
                                "I've been using this app for a year now and it has helped me
                                manage my investments effectively."
                            </Typography>
                            <Typography variant="subtitle2" className="testimonial-author">
                                - John Doe
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box className="testimonial">
                            <Typography variant="body1">
                                "The platform is user-friendly and provides comprehensive tools
                                for analyzing stocks."
                            </Typography>
                            <Typography variant="subtitle2" className="testimonial-author">
                                - Jane Smith
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: '#6a1b9a', color: '#fff', py: 2, textAlign: 'center', mt: 5 }}>
                <Typography variant="body2">
                    &copy; 2024 Stock Trading Portal. All rights reserved.
                </Typography>
            </Box>
        </>
    );
};

export default LandingPage;
