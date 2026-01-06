"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully!");
      reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-5"
    >
      {/* Name */}
      <input
        {...register("name", { required: true })}
        placeholder="Your Name"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition"
      />

      {/* Email */}
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition"
      />

      {/* Mobile */}
      <input
        {...register("mobile", { required: true })}
        type="tel"
        placeholder="Mobile Number"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition"
      />

      {/* Service Dropdown */}
      <select
        {...register("service", { required: true })}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition"
        defaultValue=""
      >
        <option value="" disabled>
          Service Interested In
        </option>
        {SERVICE_OPTIONS.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      {/* City */}
      <input
        {...register("city", { required: true })}
        placeholder="City"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-brand-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed w-full transition-all shadow-[var(--shadow-button)] hover:shadow-xl"
      >
        {isSubmitting ? "Submitting..." : "Get Free Consultation"}
      </button>
    </form>
  );
}
