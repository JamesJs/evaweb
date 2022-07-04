import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logout from "@mui/icons-material/Logout";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { ButtonBase } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./styles.css"
import Footer from "../Footer";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(
  props: React.PropsWithChildren<any>
) {
  const navigation = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const isChart = location.pathname.includes("/chart");
  return (
    <Box sx={{ display: "flex",minHeight:"100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
	      <Toolbar style={{backgroundColor:"black"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontWeight={"bold"} variant="h6" noWrap component="div">
            EvaWeb
          </Typography>
          {isChart && (
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
                marginLeft: "auto",
              }}
              to={"/destilacao"}
            >
              <ButtonBase>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <ArrowBack />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Voltar
                </Typography>
              </ButtonBase>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
	{

		["Destilações", "Sair"].map((text, index) => (
            <ListItem
              onClick={
                index === 1
                  ? () => {
                      props.onExit && props.onExit();
                      navigation("/login");
                    }
                  : index === 0
                  ? () => {
                      navigation("/destilacao");
                    }
			    : ()=>{
				console.log("home aqui")
			    } 
	      }
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{index === 2 ? <Logout /> : <></>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main sx={{
	      display:"flex",
	      flexDirection:"column"
      }} open={open}>
        <DrawerHeader />
        {props.children}
      </Main>

    </Box>
  );
}
