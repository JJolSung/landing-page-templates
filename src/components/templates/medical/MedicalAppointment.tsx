"use client";

import { useCallback } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function MedicalAppointment() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["name", "email", "phone", "department", "date"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  const inputClasses =
    "w-full bg-white border border-medical-border rounded-xl px-4 py-3 text-medical-text placeholder:text-medical-text/30 focus:outline-none focus:border-medical-teal focus:ring-1 focus:ring-medical-teal/20 transition-colors font-source-sans text-sm";
  const labelClasses =
    "block text-sm font-medium text-medical-text mb-1.5 font-poppins";
  const errorClasses = "text-red-500 text-xs mt-1";

  return (
    <section
      id="appointment"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-medical-surface"
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-4">
              Get Started
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-medical-text mb-4">
              Book an Appointment
            </h2>
            <p className="text-medical-text/60 max-w-xl mx-auto font-source-sans">
              Schedule your visit online. Our team will confirm your
              appointment within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-medical-border">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="appt-name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="appt-name"
                    name="name"
                    placeholder="John Doe"
                    className={inputClasses}
                    onChange={() => clearError("name")}
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="appt-email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="appt-email"
                    name="email"
                    placeholder="john@example.com"
                    className={inputClasses}
                    onChange={() => clearError("email")}
                  />
                  {errors.email && (
                    <p className={errorClasses}>{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="appt-phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="appt-phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className={inputClasses}
                    onChange={() => clearError("phone")}
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="appt-department" className={labelClasses}>
                    Department
                  </label>
                  <select
                    id="appt-department"
                    name="department"
                    className={inputClasses}
                    defaultValue=""
                    onChange={() => clearError("department")}
                  >
                    <option value="" disabled>
                      Select department
                    </option>
                    <option value="general">General Medicine</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="dental">Dental Care</option>
                  </select>
                  {errors.department && (
                    <p className={errorClasses}>{errors.department}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="appt-date" className={labelClasses}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="appt-date"
                    name="date"
                    className={inputClasses}
                    onChange={() => clearError("date")}
                  />
                  {errors.date && (
                    <p className={errorClasses}>{errors.date}</p>
                  )}
                </div>
                <div className="sm:col-span-1" />
              </div>

              <div className="mb-6">
                <label htmlFor="appt-message" className={labelClasses}>
                  Additional Message (Optional)
                </label>
                <textarea
                  id="appt-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your symptoms or reason for visit..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-medical-teal text-white font-poppins text-sm font-medium rounded-xl hover:bg-medical-teal-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-medical-teal/20"
              >
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Appointment request submitted! We'll confirm within 24 hours."
      />
    </section>
  );
}
