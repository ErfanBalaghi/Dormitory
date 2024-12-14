import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function SelectForm({ data, labelID, formik }) {
  const disabled = data.disabled;
  const dependency = disabled && formik.getFieldMeta(disabled)
  const error = formik.touched[labelID] && Boolean(formik.errors[labelID]);
  return (
    <FormControl size="small" error={error} fullWidth disabled={disabled && !dependency.value}>
      <InputLabel id={labelID} error={error}>
        {data.label}
      </InputLabel>
      <Select
        labelId={labelID}
        id={labelID}
        name={labelID}
        label={data.label}
        value={formik.values[labelID]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={error}
      >
        {data.values?.map((item) => (
          <MenuItem key={labelID + item[0]} value={item[0]}>
            {item[1]}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText error={error}>{formik.errors[labelID]}</FormHelperText>
      )}
    </FormControl>
  );
}

export default SelectForm;
