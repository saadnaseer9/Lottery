import React from "react";
import { Box, Typography } from "@mui/material";
import { style } from "../view/_components/style/card.style";

const PastResult = ({ valueStyle }: { valueStyle: any }) => {
  const resultData = [
    {
      id: 1,
      number: "2302123",
      values: "99 99 99 99 99 99",
      amount: "14,934,000,000",
    },
    {
      id: 2,
      number: "2302124",
      values: "98 98 98 98 98 98",
      amount: "14,935,000,000",
    },
    {
      id: 3,
      number: "2302125",
      values: "97 97 97 97 97 97",
      amount: "14,936,000,000",
    },
    {
      id: 4,
      number: "2302126",
      values: "96 96 96 96 96 96",
      amount: "14,937,000,000",
    },
    {
      id: 5,
      number: "2302127",
      values: "95 95 95 95 95 95",
      amount: "14,938,000,000",
    },
  ];

  return (
    <Box sx={style.pastResultsContainer}>
      {resultData.map((data) => (
        <Box key={data.id} sx={style.pastInner}>
          <Typography sx={style.pastNumbers}>{data.number}</Typography>
          <Typography sx={valueStyle}>{data.values}</Typography>
          <Typography sx={style.pastAmount}>{data.amount}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PastResult;
