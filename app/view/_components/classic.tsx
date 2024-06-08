import React, { useState } from "react";
import { Box } from "@mui/material";
import { lotteryNumberClassic, nextDrawStyleClassic, potStyleClassic, style, valueStyleClassic } from "./style/card.style";
import CardHeader from "../../sharedComponents/CardHeader";
import PotNumbers from "../../sharedComponents/PotNumbers";
import WinningPot from "../../sharedComponents/WinningPot";
import NextDraw from "../../sharedComponents/NextDraw";
import PoolStatusToggle from "../../sharedComponents/PoolStatusToggle";
import PoolStatusDetails from "../../sharedComponents/PoolStatusDetails";
import PastResult from "../../sharedComponents/PastResult";

const Classic = () => {
  const [currentPoolStatus, setCurrentPoolStatus] = useState(false);
  const [showRound, setShowRound] = useState(false);

  const handlePootStatus = () => {
    setCurrentPoolStatus(!currentPoolStatus);
  };
  const handleShowRound = () => {
    setShowRound(!showRound);
  };

  return (
    <Box sx={{ ...style.mainCarContainer, background: "#E9EEF6" }}>
      <CardHeader
        image="/assets/classic.svg"
        minuImage="/assets/minu.svg"
        showRound={showRound}
        handleShowRound={handleShowRound}
        lotteryNumber={lotteryNumberClassic}
      />
      {!showRound && (
        <>
          <PotNumbers potStyle={potStyleClassic}/>
          <WinningPot />
        </>
      )}
      {showRound && (
        <>
          <PastResult valueStyle={valueStyleClassic} />
        </>
      )}
      <NextDraw nextDrawStyle={nextDrawStyleClassic} />
      {!currentPoolStatus && (
        <PoolStatusToggle handlePootStatus={handlePootStatus} />
      )}
      {currentPoolStatus && (
        <PoolStatusDetails handlePootStatus={handlePootStatus} />
      )}
    </Box>
  );
};

export default Classic;
