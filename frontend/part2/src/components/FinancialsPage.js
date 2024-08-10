import React, { useState } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid, Card, CardContent, CardMedia, TextField, Button } from '@mui/material';
import axios from 'axios';
import SideNav from './SideNav';

const FinancialsPage = () => {
    const [companySymbol, setCompanySymbol] = useState('');
    const [companyInfo, setCompanyInfo] = useState(null);
    const apiKey = '39cWPGctMStrdtKoYHXvvcLIFPd5k1SM'; 
     

    const handleSymbolChange = (event) => {
        setCompanySymbol(event.target.value);
    };

    const fetchCompanyInfo = async () => {
        try {
            const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=${apiKey}`);
            setCompanyInfo(response.data[0]); 
        } catch (error) {
            console.error('Error fetching company info:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchCompanyInfo();
    };

    if (!companyInfo) {
        return (
        <>
            <SideNav />
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    backgroundImage: 'url(https://source.unsplash.com/random)', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#6a1b9a'
                }}
            >
                
                <Container sx={{ flexGrow: 1, padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper
                        elevation={6}
                        sx={{
                            padding: 4,
                            maxWidth: 600,
                            width: '100%',
                            backgroundColor: '#f3e5f5',
                            borderRadius: 2
                        }}
                    >
                        <Typography variant="h4" sx={{ marginBottom: 3, color: '#6a1b9a', fontSize: '2.5rem', textAlign: 'center' }}>
                            Financials Page
                        </Typography>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField
                                label="Enter Company Symbol"
                                value={companySymbol}
                                onChange={handleSymbolChange}
                                variant="outlined"
                                fullWidth
                                sx={{ marginBottom: 2 }}
                                InputLabelProps={{ style: { color: '#6a1b9a' } }}
                                InputProps={{ style: { color: '#6a1b9a' } }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#6a1b9a',
                                    color: '#ffffff',
                                    ':hover': { backgroundColor: '#ff4081' }
                                }}
                            >
                                Search
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Box>
        </>
        );
    }

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#6a1b9a' }}>
            <SideNav />
            <Container sx={{ flexGrow: 1, padding: 3 }}>
                <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 3, color: '#f3e5f5' }}>
                    {companyInfo.companyName} ({companyInfo.symbol})
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ backgroundColor: '#f3e5f5' }}>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={companyInfo.image}
                                alt={companyInfo.companyName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Company Information
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {companyInfo.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Website: <a href={companyInfo.website} target="_blank" rel="noopener noreferrer" style={{ color: '#6a1b9a' }}>{companyInfo.website}</a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TableContainer component={Paper} sx={{ backgroundColor: '#f3e5f5' }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>CEO</TableCell>
                                        <TableCell>{companyInfo.ceo}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Industry</TableCell>
                                        <TableCell>{companyInfo.industry}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Sector</TableCell>
                                        <TableCell>{companyInfo.sector}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Exchange</TableCell>
                                        <TableCell>{companyInfo.exchange}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Market Cap</TableCell>
                                        <TableCell>${companyInfo.mktCap.toLocaleString()}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Country</TableCell>
                                        <TableCell>{companyInfo.country}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Address</TableCell>
                                        <TableCell>{companyInfo.address}, {companyInfo.city}, {companyInfo.state} {companyInfo.zip}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FinancialsPage;
