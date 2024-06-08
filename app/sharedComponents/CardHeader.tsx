import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { style } from "../view/_components/style/card.style";

const CardHeader = ({
  image,
  minuImage,
  showRound,
  handleShowRound,
  lotteryNumber,
}: {
  image: any;
  minuImage?: any;
  showRound?: boolean;
  handleShowRound?: () => void;
  lotteryNumber: any;
}) => (
  <Box sx={style.cardHeader}>
    <Box sx={style.headingContainer}>
      <Image src={image} alt="cosmic" width={96} height={16} />
      <Typography sx={lotteryNumber}>
        {showRound ? "Past 5 Results" : "No. 1234454"}
      </Typography>
    </Box>
    <Box onClick={handleShowRound}>
      <Image src={minuImage} width={16} height={16} alt="plus" />
    </Box>
  </Box>
);

export default CardHeader;
