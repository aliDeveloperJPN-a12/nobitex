
import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <section className="vh-100 mt-[80px]" dir="rtl">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <picture>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </picture>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">ورود :</p>
                </div>
                <br />
                <br />
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="ایمیل را وارد کنید"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    ادرس ایمیل
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="رمز را وارد کنید"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    رمز
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      به یاد آوردن
                    </label>
                  </div>
                  <Link href="#!" className="text-body">
                    فراموشی رمز ؟
                  </Link>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link href="/dashboard" className="btn btn-primary">login</Link>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    آیا اکانت ندارید ؟{" "}
                    <Link href="#" className="link-danger">
                      ثبت نام
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
