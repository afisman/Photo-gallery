import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5em',
    backgroundColor: grey[100],

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20em',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50em',
        },
    },
}));






const Navbar = () => {
    const [isFavorites, setIsFavorites] = useState(true);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='transparent'>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="/PA.png" className='logo-img' />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Button sx={{ color: 'white', backgroundColor: 'black', borderRadius: '5em', padding: '0.2em 1em' }}>{isFavorites ? 'Home' : 'Favorites'}</Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Navbar