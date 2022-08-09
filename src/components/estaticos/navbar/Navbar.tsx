import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <>
      <AppBar position="static">
          <Toolbar variant="dense">
            
              <Box style={{ cursor: "pointer" }} className='text-decorator-none' >
                  <Typography variant="h5" color="inherit">
                      BlogPessoal
                  </Typography>
              </Box>

               
              <Box display="flex" justifyContent="start">
                   <Link to='/home' className='text-decorator-none'> 
                   <Box mx={1} style={{ cursor: "pointer" }}>
                      <Typography variant="h6" color="inherit">
                          home
                      </Typography>
                  </Box>
                  </Link>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                  <Link to='/posts' className='text-decorator-none'>
                      <Typography variant="h6" color="inherit">
                          postagens
                      </Typography>
                      </Link>
                  </Box>
                  <Box mx={1} style={{ cursor: "pointer" }}>
                  <Link to='/temas' className='text-decorator-none'>
                      <Typography variant="h6" color="inherit">
                          temas
                      </Typography>
                      </Link>
                  </Box>
                  
                  <Box mx={1} style={{ cursor: "pointer" }}>
                  <Link to='/formularioTema' className='text-decorator-none'>
                      <Typography variant="h6" color="inherit">
                          cadastrar tema
                      </Typography>
                    </Link>
                  </Box>
                  
                
                  <Box mx={1} style={{ cursor: "pointer" }}>  
                  <Link to='/login' className='text-decorator-none'>
                      <Typography variant="h6" color="inherit">
                          logout
                      </Typography>
                   </Link>
                    </Box>
              </Box>

          </Toolbar>
      </AppBar>
  </>
)
}
export default Navbar;
