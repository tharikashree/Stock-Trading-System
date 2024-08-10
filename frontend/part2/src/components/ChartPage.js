
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SideNav from './SideNav';
import StockChart from './stockAPI';

const ChartPage = () => {
    return (
    <>
        <SideNav />
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#673ab7' }}>
            
            <Container sx={{ paddingTop: 4, paddingBottom: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3, color: '#f3e5f5' }}>
                    Stock Chart
                </Typography>
                <StockChart />
            </Container>
        </Box>
    </>
    );
};

export default ChartPage;
