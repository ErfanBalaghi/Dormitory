import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalaliV3";
import { DatePicker } from "@mui/x-date-pickers";
import { FormControl, FormHelperText } from "@mui/material";
import dayjs from "dayjs";

function DateForm({ data, labelID, formik }) {
  const disabled = data.disabled;
  const dependency = disabled && formik.getFieldMeta(disabled);
  function dependencyDateHandler(value) {
    console.log(dependency.value);
    const [key, params] = Object.entries(value)[0];

    if (key && typeof dayjs()[key] === "function") {
      const res = dayjs(dependency.value.toLocaleDateString())[key](
        params[1],
        params[0]
      );
      console.log(res?.["$d"]);
      return res?.["$d"];
    }
  }

  const error = formik.touched[labelID] && Boolean(formik.errors[labelID]);
  return (
    <FormControl
      fullWidth
      size="small"
      error={error}
      disabled={disabled && !dependency.value}
    >
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <DatePicker
          disabled={disabled && !dependency.value}
          label={data.label}
          name={labelID}
          value={formik.values[labelID] ? formik.values[labelID] : null}
          onChange={(e) => formik.setFieldValue(labelID, e)}
          onBlur={formik.handleBlur}
          slotProps={{
            textField: {
              size: "small",
              error: formik.touched[labelID] && Boolean(formik.errors[labelID]),
            },
          }}
          maxDate={
            data.dependencyMaxDate ? dependency.value && dependencyDateHandler(data.dependencyMaxDate) : data.maxDate?.["$d"]
          }
          minDate={
            data.dependencyMinDate ? dependency.value && dependencyDateHandler(data.dependencyMinDate) : data.minDate?.["$d"]
          }
        />
      </LocalizationProvider>
      {error && (
        <FormHelperText error={error}>{formik.errors[labelID]}</FormHelperText>
      )}
    </FormControl>
  );
}

export default DateForm;
