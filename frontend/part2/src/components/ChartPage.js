// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Box } from '@mui/material';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import SideNav from './SideNav';
// import StockChart from './stockAPI';
// const ChartPage = () => {
//     const [chartData, setChartData] = useState({});

//     // useEffect(() => {
//     //     const fetchStockData = async () => {
//     //         try {
//     //             // Replace with your backend API endpoint to fetch stock data
//     //             const response = await axios.get('http://localhost:8000/api/stocks/chartdata');
//     //             const data = response.data;

//     //             // Process data into format suitable for Chart.js
//     //             const chartData = {
//     //                 labels: data.labels,  // Array of dates or timestamps
//     //                 datasets: [
//     //                     {
//     //                         label: 'Stock Price',
//     //                         data: data.prices,  // Array of prices corresponding to labels
//     //                         fill: false,
//     //                         backgroundColor: 'rgba(75,192,192,0.2)',
//     //                         borderColor: 'rgba(75,192,192,1)',
//     //                         borderWidth: 2,
//     //                     },
//     //                 ],
//     //             };

//     //             setChartData(chartData);
//     //         } catch (error) {
//     //             console.error('Error fetching stock data:', error);
//     //         }
//     //     };

//     //     fetchStockData();
//     // }, []);

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <Container>
//                 <Typography variant="h4" sx={{ marginTop: 3 }}>
//                     Stock Chart
//                 </Typography>
//                 <StockChart></StockChart>
//             </Container>
//         </Box>
//     );
// };

// export default ChartPage;
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SideNav from './SideNav';
import StockChart from './stockAPI';

const ChartPage = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#673ab7' }}>
            <SideNav />
            <Container sx={{ paddingTop: 4, paddingBottom: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3, color: '#f3e5f5' }}>
                    Stock Chart
                </Typography>
                <StockChart />
            </Container>
        </Box>
    );
};

export default ChartPage;
