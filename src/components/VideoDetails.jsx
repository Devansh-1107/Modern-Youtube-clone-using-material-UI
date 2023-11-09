import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { Stack, Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetails = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id]);
console.log(videoDetail);
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
            {/* <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>

              {videoDetail.snippet.title}
              
            </Typography> */}
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
