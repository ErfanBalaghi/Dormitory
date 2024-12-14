import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { red } from "@mui/material/colors";

function DialogForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: red[600],
          "&:hover": { backgroundColor: "white" },
        }}
        onClick={handleClickOpen}
      >
        شرایط و ضوابط استفاده از اردوگاه های بهزیستی کشور
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions
          sx={{
            justifyContent: "start",
          }}
        >
          <Button
            onClick={handleClose}
            autoFocus
            variant="outlined"
            color="error"
          >
            بستن
          </Button>
        </DialogActions>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="">
              <div className="child:mb-2">
                <h2 className="text-lg font-bold">
                  شرایط و ضوابط استفاده از اردوگاه شهید بروجردی (مریوان)
                </h2>
                <p>
                  احتراماً تعرفه هزینه اسکان اردوگاه شهید بروجردی مریوان در سال
                  جاری بشرح ذیل جهت استحضار و اطلاع به همکاران محترم ارسال می
                  گردد. لازم به ذکر است کارکنان شاغل و بازنشسته استان کردستان در
                  طول سال یکبار می توانند بصورت رایگان (حداکثر سقف پذیرش تعداد
                  اعضای خانواده و همراه 8 نفر می باشد. ) از امکانات اردوگاه
                  استفاده نمایند.
                </p>
                <dl>
                  <dt>
                    کارکنان و اعضای خانواده اصلی + بازنشستگان (پدر، مادر، فرزند،
                    همسر، خواهر و برادر مجرد) تا سقف 5 نفر
                  </dt>
                  <dd>به ازای یک نفر هر شب: 500,000 ریال (تا سقف 5 نفر)</dd>
                  <dt>اعضای خانواده فرعی (خانواده درجه دو)</dt>
                  <dd>به ازای یک نفر هر شب: 1,500,000 ریال</dd>
                  <dt>بخش خصوصی (نرخ آزاد)</dt>
                  <dd>به ازای یک نفر هر شب: 4,500,000 ریال</dd>
                </dl>
              </div>
              <div className="child:mb-2">
                <h2 className="text-lg font-bold">
                  شرایط و ضوابط متقاضیان در ساختمان پیامبر اعظم (ص) ستاد سازمان
                </h2>
                <ul className="modalPromptList">
                  <li>
                    ظرفیت اتاق ها بر اساس تعداد تخت، دو تخته و سه تخته بوده که
                    یکی از تختها در هر اتاق به صورت کاناپه تخت شو می باشد و
                    امکان پذیرش بیش از ظرفیت مذکور در هر اتاق میسر نمی باشد.
                  </li>
                  <li>
                    همراه داشتن کارت شناسائی بهزیستی برای مهمانان همکار و کارت
                    ملی برای دیگر مهمانان الزامیست. برای مهمانان مرد و زن هم
                    اتاق، همراه داشتن اصل شناسنامه یا مدرک نشاندهنده محرمیت نیز
                    الزامی می باشد.
                  </li>
                  <li>
                    صرفا تعداد نفرات مندرج در معرفی نامه استان پذیرش خواهند شد
                    که منوط به تائید اداره خدمات ستاد بوده و تحت هر شرایطی
                    حداکثر بیش از 5 نفر نخواهد بود.
                  </li>
                  <li>
                    پذیرش در روز اول ساعت 14 بعداظهر و خروج در روز آخر قبل از 12
                    ظهر می باشد.
                  </li>
                  <li>
                    شبها حداکثر ساعت مراجعت به خوابگاه در شش ماهه اول ساعت 23 و
                    شش ماهه دوم ساعت 22 می باشد.{" "}
                  </li>
                  <li>
                    بدیهی است بدلیل نوع کاربری (مامور سرا) ، اتاق ها فاقد
                    امکانات طبخ غذا و شستشوی ظروف می باشد. لذا این امکان برای
                    میهمانان گرامی وجود ندارد.
                  </li>
                  <li>
                    اقامت بیش از زمان مندرج در نامه ارسالی استان امکان پذیر نمی
                    باشد و در مواقع ضروری و استثنا، حتما باید قبل از خاتمه زمان،
                    نامه پیرو جداگانه توسط استان ارسال گردد که به هر حال این
                    زمان جمعا حداکثر از 5 روز بیشتر نمی باشد.
                  </li>
                  <li>
                    هر گونه مسئولیت جانی و مالی و سوانح احتمالی بعهده مهمان بوده
                    و سازمان هیچ گونه مسئولیتی در این خصوص ندارد.
                  </li>
                  <li>
                    استعمال هرگونه دخانیات در اتاق و همچنین فضای داخل ساختمان
                    ممنوع می باشد.
                  </li>
                  <li>همراه داشتن حیوانات خانگی ممنوع می باشد.</li>
                </ul>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogForm;
