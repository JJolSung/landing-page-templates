"use client";

import { useCallback } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function RestaurantReservation() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["date", "time", "guests", "name", "phone"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  const inputClasses =
    "w-full bg-transparent border border-restaurant-green/20 px-4 py-3 text-restaurant-green placeholder:text-restaurant-green/30 focus:outline-none focus:border-restaurant-gold transition-colors font-lato text-sm";
  const labelClasses =
    "block text-xs tracking-widest uppercase text-restaurant-green/60 mb-2 font-lato";
  const errorClasses = "text-red-600 text-xs mt-1";

  return (
    <section
      id="reservation"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-restaurant-cream"
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
              <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
                Reservations
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-green mb-4">
              Reserve Your <span className="italic">Table</span>
            </h2>
            <p className="text-restaurant-green/60 max-w-lg mx-auto">
              Join us for an unforgettable evening. For parties larger than 8,
              please contact us directly to arrange your experience.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative border border-restaurant-gold/20 p-8 sm:p-12">
            {/* Corner accents */}
            <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-restaurant-gold" />
            <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-restaurant-gold" />
            <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-restaurant-gold" />
            <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-restaurant-gold" />

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="res-date" className={labelClasses}>
                    Date
                  </label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    className={inputClasses}
                    onChange={() => clearError("date")}
                  />
                  {errors.date && (
                    <p className={errorClasses}>{errors.date}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="res-time" className={labelClasses}>
                    Time
                  </label>
                  <select
                    id="res-time"
                    name="time"
                    className={inputClasses}
                    defaultValue=""
                    onChange={() => clearError("time")}
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                  {errors.time && (
                    <p className={errorClasses}>{errors.time}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="res-guests" className={labelClasses}>
                    Party Size
                  </label>
                  <select
                    id="res-guests"
                    name="guests"
                    className={inputClasses}
                    defaultValue=""
                    onChange={() => clearError("guests")}
                  >
                    <option value="" disabled>
                      Guests
                    </option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                  </select>
                  {errors.guests && (
                    <p className={errorClasses}>{errors.guests}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="res-name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="res-name"
                    name="name"
                    placeholder="Your name"
                    className={inputClasses}
                    onChange={() => clearError("name")}
                  />
                  {errors.name && (
                    <p className={errorClasses}>{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="res-phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="res-phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className={inputClasses}
                    onChange={() => clearError("phone")}
                  />
                  {errors.phone && (
                    <p className={errorClasses}>{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="res-notes" className={labelClasses}>
                  Special Requests (Optional)
                </label>
                <textarea
                  id="res-notes"
                  name="notes"
                  rows={3}
                  placeholder="Allergies, celebrations, seating preferences..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-restaurant-green text-restaurant-bg text-sm tracking-widest uppercase hover:bg-restaurant-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Confirming..." : "Confirm Reservation"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>

      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Reservation confirmed! We look forward to welcoming you."
      />
    </section>
  );
}
