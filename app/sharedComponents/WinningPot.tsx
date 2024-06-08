import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "../view/_components/style/card.style";

const WinningPot = () => (
  <Box style={style.winningPots}>
    <Typography sx={style.winningPot}>Winning Pot</Typography>
    <Typography sx={style.winningPotNumber}>
      980,934,368,172 <span style={style.winningLuck}>LUCK!</span>
    </Typography>
  </Box>
);

export default WinningPot;
