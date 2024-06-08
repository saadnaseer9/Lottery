import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "../view/_components/style/card.style";

const PotNumbers = ({ potStyle }: { potStyle: any }) => (
  <Box sx={style.potNumbers}>
    {[50, 50, 50, 50, 50].map((num, index) => (
      <Typography key={index} style={potStyle}>
        {num}
      </Typography>
    ))}
  </Box>
);

export default PotNumbers;
