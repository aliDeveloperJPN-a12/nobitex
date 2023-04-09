import bg from "./../images/header.jpg";
import Selectcoin from "./selectcoin";
import Link from 'next/link'

export default function Header() {
  return (
    <div
      className="pt-5"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <h1 class=" text-center text-[30px] position-relative mb-8 fs-22-sm lh-33-mo fw-bold-sm mt-40-sm fs-29-md lh-46-md fw-bold-md mt-72-md fs-29-lg lh-46-lg fw-bold-lg mt-72-lg fs-42-xl lh-60-xl fw-bold-xl mt-72-xl">
        خرید و فروش امن بیت&zwnj;کوین و ارزهای دیجیتال
      </h1>
      <h3 class="text-center text-[20px] position-relative mt-8 fw-regular fs-15-sm mb-16-sm fs-19-md mb-24-md fs-19-lg mb-24-lg fs-26-xl mb-32-xl">
        به بزرگترین بازار ارز دیجیتال ایران بپیوندید
      </h3>
      <div className="w-full flex justify-center mt-4">
        <Link href="/login" class="btn btn-auth btn-primary mx-1">ثبت&zwnj;نام</Link>{" "}
        <Link href="/login" class="btn btn-auth btn-outline-primary mx-1">ورود</Link>
      </div>
      <div className="flex w-full justify-center mt-3">
        <button type="button">نوبیتکس چطور کار می&zwnj;کند؟</button>
      </div>
      <Selectcoin/>
    </div>
  );
}
