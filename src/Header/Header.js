import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CallIcon from "@mui/icons-material/Call";
import { red, blueGrey } from "@mui/material/colors";

import logo from "../Image/logo.png";
import DialogForm from "../UI/DialogForm";

function Header() {
  return (
    <Container maxWidth="lg">
      <Box component="header" sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: 65,
                height: 70,
                borderRadius: "8px",
              }}
              alt="تصویر نمونه"
              src={logo}
            />
            <DialogForm />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              color="white"
              sx={{ borderColor: blueGrey[100] }}
              endIcon={<CallIcon sx={{ color: red["500"] }} />}
              href="tel:08733282137"
            >
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography variant="subtitle2" component="span">
                  115 داخلی
                </Typography>
                <Typography variant="subtitle2" component="span">
                  087-33282137
                </Typography>
              </Stack>
            </Button>
            <Button
              variant="outlined"
              color="white"
              sx={{ borderColor: blueGrey[100] }}
              endIcon={<ReceiptLongIcon sx={{ color: red["500"] }} />}
            >
              پیگیری رزرو
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default Header;
