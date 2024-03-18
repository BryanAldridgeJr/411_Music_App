// Dashboard.js
import React, { useState } from 'react';
import './DashBoard.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from "@mui/material/NativeSelect";



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    border: 'none', 
    boxShadow: 'none',
    color: theme.palette.text.secondary,
}));




const Dashboard = () => {
    const [online, setOnline] = useState(true);
    const [quality, setQuality] = useState(undefined);
    const [volume, setVolume] = useState(undefined)

    const options = ["High", "Medium", "Low"];

    const handleSwitchChange = () => {
        setOnline((prevOnline) => !prevOnline);
    };

    const handleChange = (event) => {
        const selectedQuality = event.target.value;
        setQuality(
            selectedQuality === "Low"
            ? "Music quality is degraded. Increase quality if your connection allows it."
            : " "
        );
    };

    const handleVolumeChange = (event) => {
        const selectedVolume = event.target.value;
        setVolume(
            selectedVolume >= 80 && selectedVolume <= 100
            ? "Listening to music at a high volume could cause long-term hearing loss."
            : " "
        )
    }




    return (
        <div id='all'>
            <div id='top'>
                <h4>My Music App</h4>
            </div>
            <div id='bottom'>
                <Box>
                    <Stack sx={{ 
                        paddingRight: {
                            xs: '0%' ,
                            sm: '35%' ,
                        }
                    }}>
                        <Item><h5 style={{fontFamily: 'sans-serif', color: 'grey', fontSize: '25px'}}>Welcome User</h5></Item>
                    </Stack>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        justifyContent="center" 
                        alignItems="center" 
                        sx={{ 
                            paddingRight: {
                                xs: '0%' ,
                                sm: '15%' ,
                            } ,
                            paddingLeft: {
                                xs: '0%' ,
                                sm: '15%' ,
                            }
                        }}
                    >
                        <Item>
                            <h5 style={{ fontSize: '15px', color: 'black'}}>Online Mode</h5>
                            <p style={{ fontSize: '13px', color: 'black'}}>Is this application connected to the internet?</p>
                            <Switch
                                checked={online}
                                onChange={handleSwitchChange}
                                inputProps={{ 'aria-label': 'online mode switch' }}
                            />
                        </Item>
                        <Item>
                            <h5 style={{ fontSize: '15px', color: 'black'}}>Master Volume</h5>
                            <p style={{ fontSize: '13px', color: 'black'}}>Overrides all other sound settings in this application</p>
                            <Slider
                                onChange={handleVolumeChange}
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={100}
                            />
                        </Item>
                        <Item>
                            <h5 style={{ fontSize: '15px', color: 'black'}}>Sound Quality</h5>
                            <p style={{ fontSize: '13px', color: 'black'}}>Manually control the music quality in event of poor connection</p>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <NativeSelect onChange={handleChange}>
                                    {options.map((option, index) => {
                                        return <option key={index}>{option}</option>;
                                    })}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </Item>
                    </Stack>
                    <Stack >
                        <Item>
                        <h5
                            style={{ fontFamily: 'sans-serif', color: 'black', fontSize: '20px', ...{ paddingRight: '35%' } }}
                            sx={{ paddingRight: { xs: '0%', sm: '35%' } }}
                        >
                            System Notifications:
                        </h5>

                            {online ? null : (
                                <p style={{ fontSize: '15px', color: 'black'}}>Your application is offline. You won't be able to share or stream music to other devices.</p>
                            )}
                            <p style={{ fontSize: '15px', color: 'black'}}>{quality} </p>
                            <p style={{ fontSize: '15px', color: 'black'}}>{volume} </p>
                        </Item>
                    </Stack>
                </Box>
            </div>
        </div>
    );
};

export default Dashboard;
