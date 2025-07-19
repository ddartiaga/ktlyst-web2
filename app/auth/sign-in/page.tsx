"use client";

import Image from "next/image";
import Link from "next/link";
import { signInResend } from "../server-actions/actions";
import { useState } from "react";

export default function Page() {

  const [signInMessage, setSignInMessage] = useState("");

  return (
    <div className="row authentication mx-0">
      <div className="col-xxl-7 col-xl-7 col-lg-12">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12">
            <div className="p-5">
              <div className="mb-4 text-center text-center">
                <Link href={"/"} className="">
                  <Image src="/custom/img/kata-logo.png" alt="logo" className="authentication-brand" width={160} height={80} />
                </Link>
                <p className="fw-semibold fs-24 mb-2">Hello! Please Sign In</p>
              </div>

              <div className="row gy-3 mt-4">
                <div className="col-xl-12 mt-0">
                  <form
                    action={async (formData) => {
                      const email = formData.get("email") as string;
                      const result = await signInResend({ email });

                      if (result.success) {
                        console.log("success");
                        setSignInMessage(result.message);
                      } else {
                        console.log("error")
                        setSignInMessage(result.message);
                      }
                    }}
                  >
                    <div className="row gy-3">
                      <div className="col-xl-12">

                        {signInMessage && <div className={`alert ${signInMessage.includes("sent") ? "alert-success" : "alert-danger"} fade show`} role="alert">
                        <i className="ri-send-plane-fill me-1" /> {signInMessage} 
                        </div>
                        }

                        <div className="input-group">
                          <span className="input-group-text" id="signin-email">
                            Email
                          </span>
                          <input
                            id="signin-email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="youremail@example.com"
                            aria-describedby="signin-email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-12 d-grid">
                        <button type="submit" className="btn btn-primary">
                          Passwordless Sign In
                        </button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>

              <div className="text-center my-4 authentication-barrier">
                <span>OR</span>
              </div>
              <div className="btn-list text-center">
                <button className="btn btn-light">
                  <svg
                    className="google-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width={2443}
                    height={2500}
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    />
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                  Sign In with google
                </button>
                <button className="btn btn-icon btn-light">
                  <i className="ri-facebook-fill" />
                </button>
                <button className="btn btn-icon btn-light">
                  <i className="ri-twitter-fill" />
                </button>
              </div>
              <div className="text-center">
                <p className="fs-12 text-muted mt-4">
                  Dont have an account?
                  <a href="sign-up-cover.html" className="ms-2 text-primary">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-5 col-lg-5 d-xl-block d-none px-0">
        <div className="authentication-cover">
          <div className="aunthentication-cover-content rounded">
            <div className="swiper keyboard-control">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                    <div>
                      <div className="mb-5">
                        <img
                          src="../assets/images/authentication/2.png"
                          className="authentication-image"
                          alt=""
                        />
                      </div>
                      <h6 className="fw-semibold text-fixed-white">Sign In</h6>
                      <p className="fw-normal fs-14 op-7">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ipsa eligendi expedita aliquam quaerat nulla voluptas
                        facilis. Porro rem voluptates possimus, ad, autem quae culpa
                        architecto, quam labore blanditiis at ratione.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                    <div>
                      <div className="mb-5">
                        <img
                          src="../assets/images/authentication/3.png"
                          className="authentication-image"
                          alt=""
                        />
                      </div>
                      <h6 className="fw-semibold text-fixed-white">Sign In</h6>
                      <p className="fw-normal fs-14 op-7">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ipsa eligendi expedita aliquam quaerat nulla voluptas
                        facilis. Porro rem voluptates possimus, ad, autem quae culpa
                        architecto, quam labore blanditiis at ratione.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                    <div>
                      <div className="mb-5">
                        <img
                          src="../assets/images/authentication/2.png"
                          className="authentication-image"
                          alt=""
                        />
                      </div>
                      <h6 className="fw-semibold text-fixed-white">Sign In</h6>
                      <p className="fw-normal fs-14 op-7">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ipsa eligendi expedita aliquam quaerat nulla voluptas
                        facilis. Porro rem voluptates possimus, ad, autem quae culpa
                        architecto, quam labore blanditiis at ratione.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
