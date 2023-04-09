import Image from 'next/image'
import sampleImage from "./../images/logo.jpg"
import Link from 'next/link'
export default function Navbar(props) {
  return (
    <div>
      <nav className="flex w-full bg-[#14151A] text-gray-50 h-[70px]" dir="rtl">
        <span className="sm:flex justify-end w-full">
          <Image
            className="mt-[15px] md:mr-2 fold:hidden pro:hidden xr:hidden sm:flex"
            src={sampleImage}
            width="120"
            style={{ height: "35px" }}
            alt="lll"
          />
          <ul className="flex w-full">
            <li className="hover:text-[#936BAF] mr-[30px] mt-[25px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] fold:text-[8px] pro:text-[8px] xr:text-[8px]">
              <Link href="#">
              {props.item1}
              </Link>
            </li>
            <li className="hover:text-[#936BAF] mr-[30px] mt-[25px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] fold:text-[8px] pro:text-[8px] xr:text-[8px]">
            <Link href="#">
              {props.item2}
              </Link>
            </li>
            <li className="hover:text-[#936BAF] mr-[30px] mt-[25px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] fold:text-[8px] pro:text-[8px] xr:text-[8px]">
            <Link href="#">
              {props.item3}
              </Link>
            </li>
            <li className="hover:text-[#936BAF] mr-[30px] mt-[25px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] fold:text-[8px] pro:text-[8px] xr:text-[8px]">
            <Link href="#">
              {props.item4}
              </Link>
            </li>
          </ul>
        </span>
        <span className="flex justify-end w-1/5">
          <Link href="/login" className="hover:text-[#936BAF] mx-2 h-[35px] w-[85px] rounded mt-[18px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] text-center fold:text-[8px] pro:text-[8px] xr:text-[8px]">
            ورود
          </Link>
          <Link href="/login" className="text-center mx-2 bg-[#784ED1] h-[35px] w-[85px] rounded mt-[18px] xs:text-[8px] sm:text-[10px] md:text-[10px] lg:text-[20px] fold:text-[8px] pro:text-[8px] xr:text-[8px]">
            ثبت نام
          </Link>
        </span>
      </nav>
    </div>
  );
}
