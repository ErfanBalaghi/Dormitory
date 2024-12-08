import { Box, Container, Typography } from "@mui/material";

import image from "../Image/Home.jpg";

function Title() {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 260,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            width: "100%",
            height: "33.3333333%",
            backgroundImage: "linear-gradient(180deg,#fff,#fff0)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "33.3333333%",
            backgroundImage: "linear-gradient(0deg,#fff,#fff0)",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="تصویر نمونه"
          src={image}
        />
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h6" component="h1" style={{transform: "translateY(-240px)"}}>
          سامانه رزرواسیون اقامتگاه های بهزیستی استان کردستان
        </Typography>
      </Container>
    </div>
  );
}

export default Title;
