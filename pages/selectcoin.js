import Image from "next/image";
import sampleImage from "./../images/btc.png";
import Link from 'next/link'
export default function Selectcoin() {
  return (
    <div className="w-full h-[800px]">
      <div className="flex w-full mt-[180px] justify-end">
        <div className="flex w-[330px] h-[50px] rounded bg-[#FFFFFF] mr-[20px]">
          <div className="p-[7px] text-center w-[100px] bg-[#E3E4E5] h-[35px] rounded-l-lg  mt-[5px] ms-1">
            <Link href="#">IRT تومان</Link>
          </div>
          <div className="p-[8px] pl-[20px] text-center flex w-[100px] bg-[#85888F] h-[35px] rounded-r-lg mr-[20px] mt-[5px]">
            <Link href="#">USDT تتر</Link>
          </div>
          <p className="text-[13px] mt-[13px]">انتخاب براساس بازار</p>
        </div>
      </div>
      <div
        className="flex w-full h=[20px] justify-start bg-[#fff] m-[-11px] p-3"
        dir="rtl"
      >
        <ul className="felx flex">
          <li className="xs:mr-[10px] md:mr-[50px]">نام</li>
          <li className="xs:mr-[70px] lg:mr-[250px] md:mr-[150px]">آخرین قیمت</li>
          <li className="xs:invisible  md:visible md:mr-[65px]">تغییر 24h</li>
          <li className="xs:invisible  lg:visible  lg:mr-[130px]">نمودار هفتگی</li>
        </ul>
      </div>
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      {/* price card */}
      <div className="p-3 flex w-full h-[60px] bg-[#fff] -m-1 mb-2">
        <div
          className="bg-[#e6e7e7] flex w-full m-1 h-[60px] rounded-md"
          dir="rtl"
        >
          <div className="flex w-full">
            <span className="mt-[15px] xs:mr-[20px] md:mr-[50px]">
              <Image
                className="-mt-[5px]"
                src={sampleImage}
                width="50"
                style={{ height: "35px" }}
            alt="lll"

              />
            </span>
            <span className="mt-[15px] xs:mr-[30px] md:mr-[100px] lg:mr-[200px]">1,460,000,000</span>
            <span className="mt-[15px] xs:invisible md:visible md:mr-[70px]">13.00+ </span>
            <span className="mt-[15px] xs:invisible  lg:visible  lg:mr-[150px]">نمودار</span>
          </div>
          <button className="btn btn-outline-primary h-[40px] w-[200px] mt-[10px] mx-[10px]">
            خرید و فروش
          </button>
        </div>
      </div>
      {/* price card */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
