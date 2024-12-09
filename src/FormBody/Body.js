import { Box, Container } from "@mui/material";
import FormHeader from "./FormHeader";
import Form from "./Form";

function Body() {
  return (
    <>
      <Container maxWidth="lg" sx={{
        transform: "translateY(-120px)"
      }}>
        <Box
          sx={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: ".5rem",
            padding: "25px .75rem"
          }}
        >
          <FormHeader />
          <Form />
        </Box>
      </Container>
    </>
  );
}

export default Body;
