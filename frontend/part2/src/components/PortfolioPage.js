// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Box, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
// import axios from 'axios';
// import SideNav from './SideNav';

// const PortfolioPage = () => {
//     const [stocks, setStocks] = useState([]);
//     const [isLoading, setIsLoading] = useState(true); // Loading state
//     const isoToReadableDate = (isoDateString) => {
//         const date = new Date(isoDateString);
//         const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
//         const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
//         const year = date.getFullYear();

//         return `${day}-${month}-${year}`;
//     };
//     useEffect(() => {
//         const fetchStocks = async () => {
//             try {
//                 const access_token = localStorage.getItem("access_token");
//                 const response = await axios.get('http://localhost:8000/api/portfolio', {
//                     headers: { 'Authorization': `Bearer ${access_token}` }
//                 });
//                 setStocks(response.data);
//                 setIsLoading(false); // Set loading state to false
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setIsLoading(false); // Set loading state to false on error
//                 // Optionally, add error handling or notifications here
//             }
//         };

//         fetchStocks();
//     }, []);

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <SideNav />
//             <Container>
//                 <Typography variant="h4" sx={{ marginTop: 3 }}>
//                     Your Portfolio
//                 </Typography>
//                 {isLoading ? (
//                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                         <CircularProgress />
//                     </Box>
//                 ) : (
//                     <List>
//                         {stocks.map(stock => {
//                             const formateddate = isoToReadableDate(stock.created_at)
//                             return <ListItem key={stock.id}>
//                                 <ListItemText
//                                     primary={`${stock.company} (${stock.symbol})`}
//                                     secondary={`Price: $${stock.price}, Quantity: ${stock.quantity},Time: ${formateddate}`}
//                                 />
//                             </ListItem>
// })}
//                     </List>
//                 )}
//             </Container>
//         </Box>
//     );
// };

// export default PortfolioPage;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, CircularProgress, CssBaseline } from '@mui/material';
import axios from 'axios';
import SideNav from './SideNav';


const PortfolioPage = () => {
    const [stocks, setStocks] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    const isoToReadableDate = (isoDateString) => {
        const date = new Date(isoDateString);
        const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits for day
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
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
                setIsLoading(false); // Set loading state to false
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading state to false on error
                // Optionally, add error handling or notifications here
            }
        };

        fetchStocks();
    }, []);

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#6a1b9a', minHeight: '100vh', color: '#fff' }}>
            <CssBaseline />
            <SideNav /> {/* Assuming SideNav is your custom component for navigation */}
            <Container sx={{ padding: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    Your Portfolio
                </Typography>
                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                        <CircularProgress color="secondary" />
                    </Box>
                ) : (
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
                                        primary={`${stock.company} (${stock.symbol})`}
                                        secondary={`Price: ₹ ${stock.price.toFixed(2)}, Quantity: ${stock.quantity}, Time: ${formattedDate}`}
                                        primaryTypographyProps={{
                                            fontSize: '1.5rem'}}
                                        secondaryTypographyProps={{
                                            fontSize: '1.5rem'
                                        }}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                )}
            </Container>
        </Box>
    );
};

export default PortfolioPage;
