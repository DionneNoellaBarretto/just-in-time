 import React from "react";
import Auth from "utils/auth";


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


export default function Footer() {    
    
  return (        
  <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.primary" color="white">
      <Container maxWidth='lg'>
          <Grid container spacing={5}>
            {/* 1st column start */}
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Contributors</Box>
            <Box>
              <Link href='https://github.com/bvanburenwx' target="_blank" color='inherit'>Cody Van Buren</Link>
            </Box>
            <Box>
              <Link href='https://github.com/jameleggleston' target="_blank"  color='inherit'>Jamel Eggleston</Link>
            </Box>
            <Box>
              <Link href='https://github.com/hlbrown' target="_blank"  color='inherit'>Hannah Brown</Link>
            </Box>
             <Box>
              <Link href='https://github.com/DionneNoellaBarretto' target="_blank"  color='inherit'>Dionne Noella Barretto</Link>
            </Box>
            </Grid>
            {/* 2nd column start */}
              <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>About</Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            </Grid>
            {/* 3rd column start */}
              <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Resources</Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>Contact</Link>
              </Box>
              {/* 3rd column */}
          </Grid>
          </Grid>
          <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs:5, sm:0}}>
             Just In time &reg;{new Date().getFullYear()}
          </Box>
      </Container>
    </Box>
      
  </footer>
  )

}

