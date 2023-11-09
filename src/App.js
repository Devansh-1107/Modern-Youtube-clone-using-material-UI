import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, VideoDetails, ChannelDetail, Feed, SearchFeed } from './components';
const app = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails/>} />

        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)


export default app
