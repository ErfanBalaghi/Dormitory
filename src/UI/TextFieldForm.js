import { TextField } from "@mui/material";

function TextFieldForm({ data, labelID, formik }) {
  return (
    <TextField
      fullWidth
      label={data.label}
      name={labelID}
      value={formik.values[labelID]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[labelID] && Boolean(formik.errors[labelID])}
      helperText={formik.touched[labelID] && formik.errors[labelID]}
      size="small"
    />
  );
}

export default TextFieldForm;
