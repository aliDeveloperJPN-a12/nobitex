import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
function HomePage() {
  return (
    <div>
      <Navbar item1={'قیمت لحظه ای رمزارزها'} item2={'راهنمای استفاده'} item3={'مجله'} item4={'معرفی به دوستان'}/>
      <Header />
      <Footer mt={'mt-[600px]'}/>
    </div>
  );
}
export default HomePage;
