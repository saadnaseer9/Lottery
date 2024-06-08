import React, { useState } from "react";
import { Box } from "@mui/material";
import { lotteryNumberAtomic, nextDrawStyleAtomic, potStyleAtomic, style, valueStyleAtomic } from "./style/card.style";
import CardHeader from "../../sharedComponents/CardHeader";
import PotNumbers from "../../sharedComponents/PotNumbers";
import WinningPot from "../../sharedComponents/WinningPot";
import NextDraw from "../../sharedComponents/NextDraw";
import PoolStatusToggle from "../../sharedComponents/PoolStatusToggle";
import PoolStatusDetails from "../../sharedComponents/PoolStatusDetails";
import PastResult from "../../sharedComponents/PastResult";

const Atomic = () => {
  const [currentPoolStatus, setCurrentPoolStatus] = useState(false);
  const [showRound, setShowRound] = useState(false);

  const handlePootStatus = () => {
    setCurrentPoolStatus(!currentPoolStatus);
  };
  const handleShowRound = () => {
    setShowRound(!showRound);
  };

  return (
    <Box
      sx={{
        ...style.mainCarContainer,
        background: "#EAF9F7",
        marginTop: "20px",
      }}
    >
      <CardHeader
        image="/assets/atomic.svg"
        minuImage="/assets/minu.svg"
        showRound={showRound}
        handleShowRound={handleShowRound}
        lotteryNumber={lotteryNumberAtomic}
      />
      {!showRound && (
        <>
          <PotNumbers potStyle={potStyleAtomic} />
          <WinningPot />
        </>
      )}
      {showRound && (
        <>
          <PastResult valueStyle={valueStyleAtomic} />
        </>
      )}
      <NextDraw nextDrawStyle={nextDrawStyleAtomic} />
      {!currentPoolStatus && (
        <PoolStatusToggle handlePootStatus={handlePootStatus} />
      )}
      {currentPoolStatus && (
        <PoolStatusDetails handlePootStatus={handlePootStatus} />
      )}
    </Box>
  );
};

export default Atomic;
