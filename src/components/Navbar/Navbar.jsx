import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import './Navbar.css';

import InputBase from '@mui/material/InputBase';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { filterThunk } from '../../features/search/filterThunk';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '5em',
    backgroundColor: grey[200],

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
    const [isFavorites, setIsFavorites] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        isFavorites ? setIsFavorites(false) : setIsFavorites(true);
    }

    const handleSubmit = () => {
        console.log(searchTerm)
        dispatch(filterThunk(searchTerm));
    }

    return (

        <header className='navBar'>
            <div>
                <img src="/PA.png" className='logo-img' />
            </div>
            <div>
                <form className='searchBar' onSubmit={handleSubmit}>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon className='searchBar__icon' />
                    </IconButton>
                    <input type="text"
                        className='searchBar__input'
                        placeholder='Search images ...'
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                    />

                </form>
            </div>
            <div>
                <button className='navBar__btn' onClick={handleClick}>{isFavorites ? 'Home' : 'Favorites'}</button>
            </div>
        </header>














        //  <Search>
        //                     <SearchIconWrapper >
        //                         <SearchIcon onClick={handleSubmit} />
        //                     </SearchIconWrapper>
        //                     <StyledInputBase
        //                         placeholder="Search…"
        //                         inputProps={{ 'aria-label': 'search' }}
        //                         onChange={e => setSearchTerm(e.target.value)}
        //                     />
        //                 </Search>


        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static" color='transparent'>
        //         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        //             
        //             

        //             <Button
        //                 sx={{ color: 'white', backgroundColor: 'black', borderRadius: '5em', padding: '0.2em 1.5em' }}
        //                 onClick={() => handleClick}
        //                 disableFocusRipple
        //             >
        //                 {isFavorites ? 'Home' : 'Favorites'}
        //             </Button>
        //         </Toolbar>
        //     </AppBar>
        // </Box>

    )
}

export default Navbar