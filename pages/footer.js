import Link from 'next/link'
export default function Footer(props) {
  return (
    <div className={props.mt} dir="rtl">
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Text */}
          <section className="mb-4">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </section>
          {/* Section: Text */}
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row justify-center">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase"> تماس با ما : 09927750073</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="#" className="text-white">
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white">
                      ادرس : مشهد خیابان ازادشهر
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white">
                      همکاری با ما
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white">
                      پشتیبانی
                    </Link>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
           2023 Copyright:
          <Link className="text-white me-1" href="https://mdbootstrap.com/">
            nobitex.com
          </Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}
