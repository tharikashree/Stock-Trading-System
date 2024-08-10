
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, CircularProgress, CssBaseline } from '@mui/material';
import axios from 'axios';
import SideNav from './SideNav';


const PortfolioPage = () => {
    const [stocks, setStocks] = useState([]);
    const [funds, setFunds] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    const isoToReadableDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const access_token = localStorage.getItem("access_token");
                const response = await axios.get('http://localhost:8000/api/portfolio', {
                    headers: { 'Authorization': `Bearer ${access_token}` }
                });
                setStocks(response.data);
                const fundResponse = await axios.get('http://localhost:8000/api/funds', {
                    headers: { 'Authorization': `Bearer ${access_token}` }
                });
                setFunds(fundResponse.data);
                setIsLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); 
            }
        };

        fetchStocks();
    }, []);

    return (
    <>
        <SideNav />
        <Box sx={{ display: 'flex', backgroundColor: '#6a1b9a', minHeight: '100vh', color: '#fff' }}>
            <CssBaseline />
            <Container sx={{ padding: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    Your Portfolio
                </Typography>
                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
                <>
                    <List>
                        {stocks.map((stock) => {
                            const formattedDate = new Date(stock.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            });
                            return (
                                <ListItem key={stock.id} sx={{ marginBottom: 2, fontWeight: 'bold', borderRadius: 1, boxShadow: 1, backgroundColor: '#f3e5f5', color:'purple' }}>
                                    <ListItemText 
                                        primary={`${stock.company} - ${stock.symbol}`}
                                        secondary={<>Price: ₹ {stock.price.toFixed(2)}<br /> Quantity: {stock.quantity}<br /> Time: {formattedDate}</>}
                                        primaryTypographyProps={{
                                            fontSize: '1.5rem',color:'hotpink',fontWeight:'bold'}}
                                        secondaryTypographyProps={{
                                            fontSize: '1.5rem', color: 'purple'
                                        }}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                    {funds.length>0 && (
                    <>
                        <Typography variant="h4" sx={{ marginBottom: 2, marginTop: 3 }}>
                                Funds
                        </Typography>
                        <List>
                                {funds.map((fund) => {
                                    const formattedDate = new Date(fund.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric'
                                    });
                                    return (
                                        <ListItem key={fund.id} sx={{ marginBottom: 2, fontWeight: 'bold', borderRadius: 1, boxShadow: 1, backgroundColor: '#f3e5f5', color: 'purple' }}>
                                            <ListItemText
                                                primary={<>Transaction: {fund.transactionType}<br />Price: ₹ {fund.amount ? fund.amount.toFixed(2) : 'N/A'}
                                                <br />
                                                Total Fund: {fund.totalFund}
                                                <br />
                                                    Time: {formattedDate}</>}
        
                                                primaryTypographyProps={{
                                                    fontSize: '1.5rem'
                                                }}
                                                
                                            />
                                        </ListItem>
                                    );
                                })}
                        </List>
                  </>
                    )}
                </>
                )}
            </Container>
        </Box>
    </>
    );
};

export default PortfolioPage;
