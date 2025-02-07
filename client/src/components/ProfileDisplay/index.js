import React from "react";
// import {
//   styled,
//   createTheme,
//   ThemeProvider,
//   useTheme,
//   StylesProvider,
// } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { QUERY_USER } from "utils/queries";
import PropTypes from 'prop-types';
import { useQuery } from "@apollo/client";

// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Avatar } from "@material-ui/core";

// import Profile from "pages/Profile";
import { Link } from "react-router-dom";
// import UserDisplay from "components/UserDisplay";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import DiagnosisDisplay from "components/DiagnosisDisplay";

function ProfileDisplay() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;
 

const { loading, data, error } = useQuery(QUERY_USER);
  if (loading) return "loading...";
  if (error) return `error!${error.message}`;
console.log(data);
  let user;

  if (data) {
    user = data.user;
  }
  const btnstyle = { margin: '8px 0' }
  return (
    <>
    {user ? (
        <>
    <Container maxWidth="lg">
    <Grid container spacing={3}>
      {/* adding profile button */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "auto",
          }}
        >
          <Link to="/Profile">
            <Button variant="contained" color="primary" style={btnstyle}>
              Add Profile
            </Button>
          </Link>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
                    height: 'auto',
                    
          }}
        >                 
            {user.profile.map(({  
                id,
          firstName,
          lastName,
          sex,
          address,
          image,
          age,
          height,
          weight,	
          bloodType,
          organDonor,
          pastSurgeries,
          pcpName,
          pcpAddress,
          emergencyContactName,
          emergencyContactNumber }, index) => (
              <div key={index} >
                <Stack>
                  <Item>
                    <Box >
                       <List
                      sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      subheader={
                        <ListSubheader  id="nested-list-subheader">
                          <h3>{firstName} {lastName}</h3>
                          <Divider />
                          <br />
                           <SizedAvatar 
                      sx={{ width: 90, height: 90}}
                      src={image}
                          />

                        </ListSubheader>
                      }>
                      <Divider />
                      <ListItem>Age:</ListItem>
                      <ListItemText>{age}</ListItemText>
                      <ListItem>Gender:</ListItem>
                      <ListItemText>{sex}</ListItemText>
                      <ListItem>Height:</ListItem>
                      <ListItemText>{height}</ListItemText>
                      <ListItem>Weight:</ListItem>
                      <ListItemText>{weight}</ListItemText>
                      <ListItem>Address:</ListItem>
                      <ListItemText>{address}</ListItemText>
                      <ListItem>Blood Type:</ListItem>
                      <ListItemText>{bloodType}</ListItemText>
                      <ListItem>Organ Donor:</ListItem>
                      <ListItemText>{organDonor}</ListItemText>
                      <ListItem>Past Surgeries:</ListItem>
                      <ListItemText>{pastSurgeries}</ListItemText>
                      <ListItem>Primary Care provider:</ListItem>
                      <ListItemText>{pcpName}</ListItemText>
                      <ListItem>Primary Care Provider's Address:</ListItem>
                      <ListItemText>{pcpAddress}</ListItemText>
                      <ListItem>Emergency Contact Name:</ListItem>
                      <ListItemText>{emergencyContactName}</ListItemText>

                      <Divider />
                    </List>
                    <List
                    sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader  id="nested-list-subheader">
                        <h3>Diagnosis</h3>
                        <Divider />
                      </ListSubheader>
                    }>
                    
                      <Link to="/Diagnosis">
                      <Button variant="contained" color="primary" style={btnstyle}>
                      Add Diagnosis
                      </Button>
                      </Link>
                    </List>
                    <b/>

                    <List
                    sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <ListSubheader  id="nested-list-subheader">
                        <h3>Medication</h3>
                        <Divider />
                      </ListSubheader>
                    }>
              
                      <Link to="/Medication">
                      <Button variant="contained" color="primary" style={btnstyle}>
                      Add Medication
                      </Button>
                        </Link>
                        <DiagnosisDisplay />
                    </List>

                    </Box>
                  </Item>
                  
                </Stack>
              
                    </div>
        ))}
          {/* this is where we could display the profile */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}></Paper>
      </Grid>
            </Grid>
            </Container>
    </>
    ) : null}
    </>
  );
}

export default ProfileDisplay;
