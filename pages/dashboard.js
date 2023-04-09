import Navbar from "./navbar";
import Footer from "./footer";
import Link from 'next/link'
export default function Dashboard() {
  return (
    <div>
      <Navbar
        item1={"بازار های اصلی"}
        item2={"بازار های حرفه ای"}
        item3={"سفارش سریع"}
        item4={"راهنما"}
      />
      <div className="w-full sm:h-[150px] bg-[#2F353A] p-[20px]">
        <p dir="rtl" className="text-[#FFBF17]">
          توجه: از اجاره دادن حساب کاربری خود به دیگران یا واریز رمز ارز
          افراد ناشناس به کیف پول خود به بهانه مشارکت در سود معامله یا وعده
          دریافت پول جدا خودداری کنید. طبق اعلام پلیس فتا در صورت کلاهبرداری و
          پولشویی توسط دیگران، حساب شما نیز به عنوان مشارکت در جرم شناسایی خواهد
          شد.
        </p>
        <span className="flex h-[35px] justify-center xs:mt-[40px] sm:-mt-[10px] md:mt-[10px] lg:mt-[25px]">
          <button className="btn btn-danger me-3">خواندم</button>
          <button className="btn btn-success">بیشتر بدانید</button>
        </span>
      </div>

      {/* ------------------------------------------------ cards --------------------------------------------- */}
      <div className="flex fold:flex-wrap xl:flex-nowrap w-full h-[350px] justify-center">
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
         <picture>
         <img src="..." className="card-img-top" alt="..." />
         </picture>
          <div className="card-body bg-[#63C2DE] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture>
          <img src="..." className="card-img-top" alt="..." />
          </picture>
          <div className="card-body bg-[#C8CED3] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#F86C6B] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#FFC107] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#C8CED3] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#63C2DE] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1 "
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#15ff34] absolute h-[130px] w-full ">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
        {/* card price */}
        <div
          className="card  mt-2 mx-1"
          style={{ width: "180px", height: "280px" }}
        >
          <picture><img src="..." className="card-img-top" alt="..." /></picture>
          <div className="card-body bg-[#F86C6B] absolute h-[130px] w-full">
            {/* icon btc of "fontawesome" */}
            <i className="fa fa-bitcoin relative top-8 left-16 text-[30px]"></i>
          </div>
          <ul dir="rtl" className="list-group list-group-flush mt-[100px]">
            <li className="list-group-item border-none text-center text-[12px]">
              6,450,000 تومان
            </li>
            <button className="btn btn-danger text-[10px] xs:w-2/6 xl:w-3/6 xs:mx-[60px] xl:mx-[30px] mb-2">
              1.30%-
            </button>
            <li className="list-group-item border-1 text-[12px]">
              6,150,00 تومان حداقل
            </li>
            <li className="list-group-item text-[12px]">
              6,660,000 تومان حداکثر
            </li>
          </ul>
        </div>
        {/* card price */}
      </div>
      {/* ------------------------------------------------ cards --------------------------------------------- */}

      {/* --------------------------------- notece : ---------------------------------------- */}
      <div className="w-full h-[50px] p-[40px] pt-[10px] xs:invisible xl:visible mb-4" dir="rtl">
<div className="border-1 rounded-md bg-[#686868a4] text-[#fff]  fold:invisible xl:flex">
<p className="mr-[50px]">
          <p className="text-[#FFC107]">اطلاعیه مهم:</p> کاربر گرامی؛ لطفا قبل از واریز رمزارز، حتماً از به روز
          بودن آدرس واریزی خود و انتخاب درست شبکه واریز اطمینان حاصل کنید. در
          غیر این صورت ممکن است واریزی شما به حساب کاربریتان منظور نشده و امکان
          بازیابی آن نیز وجود نداشته باشد. <Link href="#">مطالعه بیشتر</Link>
        </p>
</div>
      </div>
      {/* --------------------------------- notece : ---------------------------------------- */}

      {/* ---------------------------------------------سفارشات------------------------------------------------- */}

      {/* ------------------------------------------------- section 1 ----------------------------------------------------- */}
      <div
        className="md:flex md:flex-wrap w-full h-[450px] p-10 justify-center fold:mt-[2000px] xs:mt-[850px] md:mt-[200px] sm:mt-[500px] lg:mt-[200px] xl:mt-[0px] fold:hidden"
        dir="rtl"
      >
        <div className="border-1 rounded-md p-3 md:w-[45%]">
          <div className="flex w-full justify-between">
            <span>کیف‌های شما</span>
            <button className="btn btn-outline-danger">پرتفو...</button>
          </div>
          <div className="w-full h-[50px] border-1 mt-1 rounded-md"></div>
          <div className="flex w-full h-[80px] border-1 mt-[200px] rounded-md">
            <div className="flex w-[50%] mt-[30px] justify-end text-[17px] px-2 fold:text-[8px] sm:text-[12px]">
              ارزش تخمینی دارایی‌ها:
            </div>
            <div className="w-[50%] border-1 h-full rounded-md">
              <div className="px-1 border-1 h-[50%] pt-2 fold:text-[8px] sm:text-[12px] ">
                پیشنهادهای خرید :
              </div>
              <div className="px-1 border-1 h-[50%] pt-2 fold:text-[8px] sm:text-[12px]">
                پیشنهادهای فروش :
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------- */}
        <div className="border-1 rounded-md p-3 md:w-[45%] md:mx-5 xs:mt-[20px] md:mt-[0px] fold:hidden md:inline">
          <div className="flex w-full mb-3">وضعیت حساب کاربری</div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            سطح کاربری: سطح صفر-ادامه فرایند احراز هویت ارتقا
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            برداشت روزانه ریال: 0 از 0 تومان
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            برداشت روزانه رمزارز: 0 از 0 تومان
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            مجموع برداشت روزانه 0 از 0 تومان
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            مجموع برداشت ماهانه: 0 از 0 تومان
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            کارمزد معاملات: 0.25% (پله بعد 0.3%)
          </div>
          <div className="flex w-full mb-1 border-1 p-2 rounded-md h-[40px]">
            ارزش معاملات سی روز: - (پله بعد 10 میلیون تومان)
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- section 1 ----------------------------------------------------- */}
      {/* ------------------------------------------------- section 2 ----------------------------------------------------- */}
      <div
        className="lg:flex lg:flex-wrap w-full h-[200px] p-10 justify-center xs:mt-[400px] md:mt-[0px] fold:hidden"
        dir="rtl"
      >
        <div className="border-1 rounded-md p-3 lg:w-[45%]">
          <div className="flex w-full justify-between">
            <span>سفارشات باز شما</span>
          </div>
          <hr />
          <ul className="flex">
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              سمت
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              قیمت سفارش
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              مقدار
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              ارز
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              مبلغ کل
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              پرشده
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              اقدامات
            </li>
          </ul>
          <hr />
          <div className="w-full bg-stone-400 h-[30px] text-center p-1">
            سفارشی ثبت نشده
          </div>
        </div>
        {/* --------------------------------------- */}
        <div className="border-1 rounded-md p-3 lg:w-[45%] md:mx-5 xs:mt-[20px] lg:mt-[0px]">
          <div className="flex w-full justify-between">
            <span>معاملات اخیر شما</span>
          </div>
          <hr />
          <ul className="flex">
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px] ">
              سمت
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              قیمت سفارش
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              مقدار
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              ارز
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              مبلغ کل
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              پرشده
            </li>
            <li className="mx-[14px] mt-[5px] xs:text-[10px] sm:text-[15px] lg:text-[12px]">
              اقدامات
            </li>
          </ul>
          <hr />
          <div className="w-full bg-stone-400 h-[30px] text-center p-1">
            سفارشی ثبت نشده
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- section 2 ----------------------------------------------------- */}

      {/* ---------------------------------------------سفارشات------------------------------------------------- */}

      <Footer mt={"fold:mt-[2000px] xs:mt-[800px] md:mt-[150px]"} />
    </div>
  );
}
