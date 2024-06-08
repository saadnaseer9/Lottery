"use client";
import React from "react";
import Cosmic from "../_components/Cosmic";
import Classic from "../_components/classic";
import Atomic from "../_components/Atomic";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Main = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <Cosmic />
      <Classic />
      <Atomic/>
    </Box>
  );
};

export default Main;
