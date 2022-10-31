import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroLogo from '../assets/HeroBanner.jpeg'


const HeroBanner = () => {
    return (
        <Box  sx={{
            mt: { lg: '212px', xs: "70px" },
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color="#711314" fontWeight="600" fontSize="50px">
                {/* <img  src ={require("../assets/HeroLogo.png")} alt="Hero Banner" height="500x"/> */}
                Fitness Club
            </Typography>
            <Typography fontWeight="700" >
                NO PAIN .. NO GAIN
            </Typography>
            <Typography fontSize="14px" fontWeight="500" lineHeight="35px" mb="3px">
                Check out the most effective exercises
            </Typography>
            <Button variant="outlined" size="small" color="error" href="#exercises"> Explore Exercises </Button>
        </Box>
    )
}

export default HeroBanner