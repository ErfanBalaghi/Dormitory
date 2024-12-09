import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("اطلاعات با موفقیت ارسال شد!");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 4,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: "وارد کردن نام الزامی است",
            minLength: { value: 3, message: "نام باید حداقل 3 کاراکتر باشد" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="نام"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          )}
        />

        <Controller
          name="nationalCode"
          control={control}
          defaultValue=""
          rules={{
            required: "وارد کردن کد ملی الزامی است",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "کد ملی باید شامل 10 رقم باشد",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="کد ملی"
              fullWidth
              margin="normal"
              error={!!errors.nationalCode}
              helperText={
                errors.nationalCode ? errors.nationalCode.message : ""
              }
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          rules={{
            required: "وارد کردن شماره تلفن الزامی است",
            pattern: {
              value: /^09[0-9]{9}$/,
              message: "شماره تلفن باید با 09 شروع شده و 11 رقم باشد",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="شماره تلفن"
              fullWidth
              margin="normal"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          ارسال
        </Button>
      </form>
    </Box>
  );
}

export default Form;
