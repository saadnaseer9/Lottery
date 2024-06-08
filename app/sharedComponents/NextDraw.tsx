import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { style } from "../view/_components/style/card.style";

const NextDraw = ({nextDrawStyle}:{nextDrawStyle:any}) => (
  <Box
    style={nextDrawStyle}
  >
    <Box
      style={style.nextDrawContainer}
    >
      <Typography sx={style.withDraw}>
        Next <br /> Draw
      </Typography>
      <AccessTimeIcon sx={{ color: '#ffffff' }} />
      <Typography sx={style.nextWithDraw}>142:32:01</Typography>
    </Box>
    <Box>
      <Button
        sx={style.play}
      >
        Play
      </Button>
    </Box>
  </Box>
);

export default NextDraw;
