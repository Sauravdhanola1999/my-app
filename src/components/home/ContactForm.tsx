"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MessageCircle, Mail, ChevronDown, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  service: string;
  city: string;
};

const SERVICE_OPTIONS = [
  "Home painting",
  "Waterproofing",
  "Wood polish",
  "Wall Texture",
  "Wallpaper & Wall panel",
  "Furniture designing & Manufacturing",
];

export default function ContactForm() {
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    if (sendViaWhatsApp) {
      // Send via WhatsApp - opens directly with pre-filled message
      const message = `Hello! I'm interested in your services.\n\nName: ${data.name}\nEmail: ${data.email}\nMobile: ${data.mobile}\nService: ${data.service}\nCity: ${data.city}`;
      const whatsappUrl = `https://wa.me/918050013054?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      reset();
      setShowThankYou(true);
    } else {
      // Send via Email
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to send email");
        }

        reset();
        setShowThankYou(true);
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                Thank you!
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your request. Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setShowThankYou(false)}
                className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-5"
      >
      {/* Name */}
      <div>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name *"
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition ${
            errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-orange"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          placeholder="Email Address *"
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition ${
            errors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-orange"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <input
          {...register("mobile", { 
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit mobile number"
            }
          })}
          type="tel"
          placeholder="Mobile Number *"
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition ${
            errors.mobile ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-orange"
          }`}
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
        )}
      </div>

      {/* Service Dropdown */}
      <div className="relative">
        <select
          {...register("service", { required: "Please select a service" })}
          className={`w-full border rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition appearance-none cursor-pointer pr-10 ${
            errors.service ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-orange"
          }`}
          defaultValue=""
        >
          <option value="" disabled>
            Service Interested In *
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${
          errors.service ? "text-red-500" : "text-gray-400"
        }`} />
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
        )}
      </div>

      {/* City */}
      <div>
        <input
          {...register("city", { required: "City is required" })}
          placeholder="City *"
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition ${
            errors.city ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-brand-orange"
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
        )}
      </div>

      {/* Delivery Method Toggle */}
      <div className="flex items-center justify-between p-4 bg-brand-light rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          {sendViaWhatsApp ? (
            <MessageCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Mail className="w-5 h-5 text-brand-blue" />
          )}
          <span className="text-sm font-medium text-gray-700">
            {sendViaWhatsApp ? "Send via WhatsApp" : "Send via Email"}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setSendViaWhatsApp(!sendViaWhatsApp)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:ring-offset-2 ${
            sendViaWhatsApp ? "bg-green-500" : "bg-gray-300"
          }`}
          aria-label="Toggle delivery method"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              sendViaWhatsApp ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-brand-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed w-full transition-all shadow-[var(--shadow-button)] hover:shadow-xl"
      >
        {isSubmitting 
          ? "Submitting..." 
          : sendViaWhatsApp 
          ? "Open WhatsApp" 
          : "Get Free Consultation"}
        </button>
    </form>
    </>
  );
}
