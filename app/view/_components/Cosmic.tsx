import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  lotteryNumberCosmic,
  nextDrawStyleCosmic,
  potStyleCosmic,
  style,
  valueStyleCosmic,
} from "./style/card.style";
import CardHeader from "../../sharedComponents/CardHeader";
import PotNumbers from "../../sharedComponents/PotNumbers";
import WinningPot from "../../sharedComponents/WinningPot";
import NextDraw from "../../sharedComponents/NextDraw";
import PoolStatusToggle from "../../sharedComponents/PoolStatusToggle";
import PoolStatusDetails from "../../sharedComponents/PoolStatusDetails";
import PastResult from "../../sharedComponents/PastResult";
import Image from "next/image";

const Cosmic = () => {
  const [currentPoolStatus, setCurrentPoolStatus] = useState(false);
  const [showRound, setShowRound] = useState(false);

  const handlePootStatus = () => {
    setCurrentPoolStatus(!currentPoolStatus);
  };
  const handleShowRound = () => {
    setShowRound(!showRound);
  };

  return (
    <>
      <Box>
        <Box sx={style.mainCont}>
          <Image src="/assets/hamburger.svg" alt="ham" width={24} height={18} />
          <Typography sx={style.head}>Lottery</Typography>
        </Box>
        <Typography sx={style.result}>Latest Results</Typography>
        <Box
          sx={{
            ...style.mainCarContainer,
            background: "#EEE1F0",
            marginBottom: "20px",
          }}
        >
          <CardHeader
            image="/assets/cosmic.svg"
            minuImage="/assets/plus.png"
            handleShowRound={handleShowRound}
            showRound={showRound}
            lotteryNumber={lotteryNumberCosmic}
          />
          {!showRound && (
            <>
              <PotNumbers potStyle={potStyleCosmic} />
              <WinningPot />
            </>
          )}
          {showRound && (
            <>
              <PastResult valueStyle={valueStyleCosmic} />
            </>
          )}
          <NextDraw nextDrawStyle={nextDrawStyleCosmic} />
          {!currentPoolStatus && (
            <PoolStatusToggle handlePootStatus={handlePootStatus} />
          )}
          {currentPoolStatus && (
            <PoolStatusDetails handlePootStatus={handlePootStatus} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cosmic;
