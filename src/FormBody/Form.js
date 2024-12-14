import { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import SelectForm from "../UI/SelectForm";
import TextFieldForm from "../UI/TextFieldForm";
import DateForm from "../UI/DateForm";
import dayjs from "dayjs";

const allFieldsValue = {
  firstName: {
    label: "نام",
  },
  lastName: {
    label: "نام خانوادگی",
  },
  nationalCode: {
    label: "کد ملی",
  },
  birthday: {
    label: "تاریخ تولد",
    type: "date",
    maxDate: dayjs("2004-03-19"),
  },
  phoneNumber: {
    label: "شماره تلفن",
  },
  porsonelCode: {
    label: "کد پرسنلی",
  },
  job: {
    label: "شغل",
  },
  address: {
    label: "آدرس",
  },
  address: {
    label: "آدرس",
  },
  state: {
    label: "استان اقامتگاه",
    type: "select",
    values: [["", ""]],
  },
  city: {
    label: "شهرستان اقامتگاه",
    type: "select",
    disabled: "state",
    values: [["", ""]],
  },
  fromDate: {
    label: "از تاریخ",
    type: "date",
    minDate: dayjs(),
  },
  toDate: {
    label: "تا تاریخ",
    type: "date",
    dependencyMaxDate: { add: ["day", 7] },
    dependencyMinDate: { add: ["day", 1] },
    disabled: "fromDate",
  },
  type: {
    label: "نوع سفر",
    type: "select",
    values: [
      ["mamoriat", "ماموریت"],
      ["siahat", "سیاحتی"],
      ["ziarat", "زیارتی"],
      ["varzeshi", "ورزشی"],
    ],
  },
};

const objectKeys = Object.keys(allFieldsValue);

const initialValues = objectKeys.reduce((a, b) => ({ ...a, [b]: "" }), {});

function Form() {
  const [formFields, setFormFields] = useState(allFieldsValue);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("وارد کردن نام الزامی است")
        .min(3, "نام باید حداقل 3 کاراکتر باشد")
        .matches(/^[آ-ی ]*$/, "از حروف فارسی استفاده کنید"),
      lastName: Yup.string()
        .required("وارد کردن نام خانوادگی الزامی است")
        .min(3, "نام خانوادگی باید حداقل 3 کاراکتر باشد")
        .matches(/^[آ-ی ]*$/, "از حروف فارسی استفاده کنید"),
      nationalCode: Yup.string()
        .required("وارد کردن کد ملی الزامی است")
        .matches(/^[0-9]{10}$/, "کد ملی باید شامل 10 رقم باشد"),
      birthday: Yup.string().required("وارد کردن تاریخ تولد الزامی است"),
      phoneNumber: Yup.string()
        .required("وارد کردن شماره تلفن الزامی است")
        .matches(
          /^09[0-9]{9}$/,
          "شماره تلفن باید با 09 شروع شده و 11 رقم باشد"
        ),
      porsonelCode: Yup.string()
        .required("وارد کردن کد پرسنلی الزامی است")
        .min(3, "کد پرسنلی باید حداقل 3 کاراکتر باشد")
        .matches(/^[0-9]*$/, "فقط از اعداد استفاده کنید"),
      job: Yup.string()
        .required("وارد کردن شغل الزامی است")
        .min(3, "شغل باید حداقل 3 کاراکتر باشد"),
      address: Yup.string()
        .required("وارد کردن آدرس الزامی است")
        .min(5, "آدرس باید حداقل 5 کاراکتر باشد"),
      state: Yup.string().required("استان اقامتگاه را انتخاب کنید"),
      city: Yup.string().required("شهرستان اقامتگاه را انتخاب کنید"),
      type: Yup.string().required("نوع سفر را انتخاب کنید"),
      fromDate: Yup.string().required("وارد کردن تاریخ تولد الزامی است"),
      toDate: Yup.string().required("وارد کردن تاریخ تولد الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("اطلاعات با موفقیت ارسال شد!");
    },
  });

  useEffect(() => {
    const stateValue = formik.getFieldMeta("state").value;

    async function getStateAPI(prop) {
      if (prop === "state") {
        const response = await fetch(
          "https://iran-locations-api.ir/api/v1/fa/states"
        );
        const responseData = await response.json();
        const handleData = responseData.map((item) => [item.name, item.name]);
        setFormFields((pre) => ({
          ...pre,
          state: { ...pre.state, values: handleData },
        }));
      } else {
        const response = await fetch(
          `https://iran-locations-api.ir/api/v1/fa/cities?state=${stateValue}`
        );
        const responseData = await response.json();
        const handleData = responseData[0].cities.map((item) => [
          item.name,
          item.name,
        ]);
        setFormFields((pre) => ({
          ...pre,
          city: { ...pre.state, values: handleData },
        }));
      }
    }

    // if (!stateValue) {
    //   getStateAPI("state");
    // } else {
    //   getStateAPI("city");
    // }
  }, [formik.getFieldMeta("state").value]);

  return (
    <>
      <form className="pt-4">
        <Grid container spacing={3}>
          {objectKeys.map((item) => {
            return (
              <Grid key={item} size={3}>
                {formFields[item].type === "select" ? (
                  <SelectForm
                    data={formFields[item]}
                    labelID={item}
                    formik={formik}
                  />
                ) : formFields[item].type === "date" ? (
                  <DateForm
                    data={formFields[item]}
                    labelID={item}
                    formik={formik}
                  />
                ) : (
                  <TextFieldForm
                    data={formFields[item]}
                    labelID={item}
                    formik={formik}
                  />
                )}
              </Grid>
            );
          })}
          <Grid size={3}>
            <Button
              fullWidth
              sx={{
                height: "40px",
              }}
              type="submit"
              variant="contained"
              color="primary"
              onClick={formik.handleSubmit}
            >
              ارسال
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Form;
