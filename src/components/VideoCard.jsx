import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { md: '320px', xs: '100%', sm: '100%' }, borderRadius: '0',boxShadow:"none" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { sm: 358, xs: '100%' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ background: '#1e1e1e', height: '108px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' color='gray' fontWeight='bold'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ color: 'gray', fontSize: 12, ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
export default VideoCard
