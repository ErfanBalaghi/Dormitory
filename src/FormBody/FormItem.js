import React, { useMemo } from "react";
import SelectForm from "../UI/SelectForm";
import DateForm from "../UI/DateForm";
import TextFieldForm from "../UI/TextFieldForm";

function FormItem({ fieldKey, formFields, formik }) {
  const formikKeyValue = formik.getFieldMeta(fieldKey).value;
  const formikKeyError = formik.errors[fieldKey] && formik.touched[fieldKey];
  const fieldDependency = formFields.disabled && formik.getFieldMeta(formFields.disabled).value
  return useMemo(() => {
    if (formFields.type === "select") {
      return (
        <SelectForm data={formFields} labelID={fieldKey} formik={formik} />
      );
    } else if (formFields.type === "date") {
      return <DateForm data={formFields} labelID={fieldKey} formik={formik} />;
    } else {
      return (
        <TextFieldForm data={formFields} labelID={fieldKey} formik={formik} />
      );
    }
  }, [formikKeyValue, formikKeyError, fieldDependency]);
}

export default FormItem;
