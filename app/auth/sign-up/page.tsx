'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { z } from 'zod';
import SignUpForm from './signup-form';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  acceptedTerms: z.boolean().refine(val => val, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === 'checkbox' ? checked : value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof typeof formData;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    try {
      // 🔁 Replace this with your actual registration API endpoint
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log("authentication success");
      }

    } catch (err) {
      console.log("authentication failed", err);
    }
  };

  return (
    <>
      <div className="col-xxl-7 col-xl-7 col-lg-12">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-sm-12 col-md-8">
            <form onSubmit={handleSubmit} className="p-5">
              <div className="text-center">
                <p className="h5 fw-semibold mb-2">Sign Up</p>
                <p className="mb-3 text-muted op-7 fw-normal">
                  Welcome &amp; Join us by creating a free account!
                </p>
              </div>

              <SignUpForm />

              <div className="text-center">
                <p className="fs-12 text-muted mt-4">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Carousel Side */}
      <div className="col-xxl-5 col-xl-5 col-lg-5 d-xl-block d-none px-0">
        <div className="authentication-cover">
          <div className="aunthentication-cover-content rounded">
            <div className="swiper keyboard-control">
              <div className="swiper-wrapper">
                {[2, 3, 2].map((img, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                      <div>
                        <div className="mb-5">
                          <Image
                            src={`/assets/images/authentication/${img}.png`}
                            className="authentication-image"
                            width={400}
                            height={400}
                            alt=""
                          />
                        </div>
                        <h6 className="fw-semibold text-fixed-white">Sign Up</h6>
                        <p className="fw-normal fs-14 op-7">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
