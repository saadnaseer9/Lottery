import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { style } from "../view/_components/style/card.style";

const PoolStatusToggle = ({
  handlePootStatus,
}: {
  handlePootStatus: () => void;
}) => (
  <Box sx={style.toggleContainer} onClick={handlePootStatus}>
    <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
    <Typography sx={style.poolStatus}>Current Pool Status</Typography>
  </Box>
);

export default PoolStatusToggle;
