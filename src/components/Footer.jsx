import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Link, Grid } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        
      </Container>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0),
    marginTop: "auto",
    borderTop: `1px solid ${theme.palette.divider}`,
    boxShadow: "0px -1px 10px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    fontSize: 30,
    color: theme.palette.text.primary,
    "&:hover": {
      color: "#ff7e5f",
    },
  },
  text: {
    marginTop: theme.spacing(2),
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 500,
  },
}));

export default Footer;
