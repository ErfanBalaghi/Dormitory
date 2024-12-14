import { Button } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "@emotion/styled";
import { red } from "@mui/material/colors";

const Signup = styled(Button)(() => {
  return {
    color: red[500],
    borderRadius: 0,
    fontSize: "18px",
    paddingBottom: "22px",
    "&:hover": {
      backgroundColor: "initial",
    },
  };
});

const Marcker = styled("span")(() => {
  return {
    position: "absolute",
    bottom: -1,
    height: "2px",
    width: "100%",
    backgroundColor: red[500],
  };
});

function FormHeader() {
  return (
    <div className="border-b">
      <Signup variant="text" disableRipple startIcon={<LocalOfferIcon />}>
        فرم ثبت نام اقامتگاه ها
        <Marcker />
      </Signup>
    </div>
  );
}

export default FormHeader;
