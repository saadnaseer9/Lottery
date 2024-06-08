import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { style } from "../view/_components/style/card.style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const poolData = [
  { id: 1, value: "4,651.8062 INAE", imgSrc: "/assets/inae.png" },
  { id: 2, value: "61.8062 BTC", imgSrc: "/assets/bitcoin.png" },
  { id: 3, value: "131.4941 ETH", imgSrc: "/assets/etherium.png" },
  { id: 4, value: "661.8789 SOL", imgSrc: "/assets/sol.png" },
  { id: 5, value: "34,698.7162 XRP", imgSrc: "/assets/xrp.png" },
  { id: 6, value: "98,861.1372 DOGE", imgSrc: "/assets/dog.png" },
  { id: 7, value: "1,590,661.5161 TRX", imgSrc: "/assets/tron.png" },
];

const PoolStatusDetails = ({
  handlePootStatus,
}: {
  handlePootStatus: () => void;
}) => (
  <>
    <Typography sx={style.status}>Current Pool Status</Typography>
    {poolData.map((item) => (
      <Box key={item.id} sx={style.poolData}>
        <Image src={item.imgSrc} alt="coin" width={16} height={16} />
        <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
          {item.value}
        </Typography>
      </Box>
    ))}
    <Box sx={{ height: "1px", background: "1px #333", margin: "15px" }} />
    <Typography
      sx={{
        ...style.winningPotNumber,
        textAlign: "right",
        padding: "0px 15px 5px 15px",
      }}
    >
      = 980,934,368,172 <span style={style.winningLuck}>LUCK!</span>
    </Typography>
    <Box sx={style.closeContainer} onClick={() => handlePootStatus()}>
      <ArrowDropDownIcon />
      <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#3F3F3F" }}>
        Close
      </Typography>
    </Box>
  </>
);

export default PoolStatusDetails;
