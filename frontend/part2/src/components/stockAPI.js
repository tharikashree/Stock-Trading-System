import React, { useState } from 'react';
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Container, Typography, Box,Paper, TextField, Button } from '@mui/material';
import SideNav from './SideNav';

const apiKey = '*************************';
const apiUrlBase = 'https://api.polygon.io/v2/aggs/ticker';

const StockChart = () => {
    const [tickerSymbol, setTickerSymbol] = useState('');
    const [data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [yesterdayOpen, setYesterdayOpen] = useState(null);
    const [yesterdayClose, setYesterdayClose] = useState(null);

    const handleInputChange = (event) => {
        setTickerSymbol(event.target.value.toUpperCase());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(
                `${apiUrlBase}/${tickerSymbol}/range/1/day/2023-01-01/2023-12-31?apiKey=${apiKey}`
            );
            const results = response.data.results.map(result => ({
                time: new Date(result.t).toLocaleDateString(),
                price: result.c
            }));
            setData(results);
            setFetched(true);
            const yesterdayData = response.data.results[response.data.results.length - 1];
            setYesterdayOpen(yesterdayData.o);
            setYesterdayClose(yesterdayData.c);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#673ab7' }}>
            <Container sx={{ flexGrow: 1, padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        maxWidth: 800,
                        width: '100%',
                        backgroundColor: '#f3e5f5',
                        borderRadius: 2
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: 3, color: '#6a1b9a', fontSize: '2.5rem', textAlign: 'center' }}>
                        Stock Chart for {fetched ? tickerSymbol : '...'}
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <TextField
                            label="Enter Ticker Symbol"
                            value={tickerSymbol}
                            onChange={handleInputChange}
                            required
                            variant="outlined"
                            sx={{ marginRight: 2, flexGrow: 1 }}
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
                            Fetch Data
                        </Button>
                    </form>
                    {fetched && (
                    <>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="price" stroke="#6a1b9a" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                        <Typography variant="h6" sx={{ marginTop: 3, color: '#6a1b9a', textAlign: 'center' }}>
                            Opening Price: ₹{yesterdayOpen}
                        </Typography>
                        <Typography variant="h6" sx={{ marginTop: 1, color: '#6a1b9a', textAlign: 'center' }}>
                            Closing Price: ₹{yesterdayClose}
                        </Typography>
                    </>
                    )}
                </Paper>
            </Container>
        </Box>
    );
};

export default StockChart;
