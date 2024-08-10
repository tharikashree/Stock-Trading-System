
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Link, CssBaseline } from '@mui/material';
import axios from 'axios';
import SideNav from './SideNav';

const NewsPage = () => {
    const [articles, setArticles] = useState([]);

    const getISODate = (offsetDays = 0) => {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        return date.toISOString().split('T')[0];
    };
    const todayISO = getISODate();
    const thirtyDaysAgoISO = getISODate(-30);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'stocks',
                        from: thirtyDaysAgoISO,
                        to: todayISO,
                        apiKey: '5511cdf9901f4b98b47ecbf344427393',  
                    },
                });
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
    <>
        <SideNav />
        <Box sx={{ display: 'flex', backgroundColor: '#6a1b9a', minHeight: '100vh' }}>
            
            <CssBaseline />
            <Container sx={{ padding: 4, flexGrow: 1 }}>
                <Typography variant="h4" sx={{ marginBottom: 3, color: '#f3e5f5' }}>
                    Latest News
                </Typography>
                <List sx={{ backgroundColor: '#f3e5f5', borderRadius: 2, boxShadow: 3 }}>
                    {articles.map((article, index) => (
                        <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                            <ListItemText
                                primary={
                                    <Typography variant="h6" sx={{ color: '#6a1b9a' }}>
                                        {article.title}
                                    </Typography>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {article.source.name}
                                        </Typography>
                                        {' — '}
                                        {new Date(article.publishedAt).toLocaleString()}
                                    </React.Fragment>
                                }
                            />
                            <Link href={article.url} target="_blank" rel="noopener" sx={{ color: '#ab47bc' }}>
                                Read More
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Box>
    </>
    );
};

export default NewsPage;
