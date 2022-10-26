import * as React from "react";

import { CssVarsProvider } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { TextField, IconButton } from "@mui/joy";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Teacher from "./components/Teacher";

function App() {
  return (
    <CssVarsProvider>
      <Header>
        <Typography component="h1" fontWeight="xl">
          Files
        </Typography>


        <TextField
          size="sm"
          placeholder="Buscar profesores"
          startDecorator={<SearchRoundedIcon color="primary" />}
          endDecorator={
            <IconButton variant="outlined" size="sm" color="neutral">
              <Typography
                fontWeight="lg"
                fontSize="sm"
                textColor="text.tertiary"
              >
                /
              </Typography>
            </IconButton>
          }
          sx={{
            flexBasis: "500px",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </CssVarsProvider>
  );
}

export default App;
