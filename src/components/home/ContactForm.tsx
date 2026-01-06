"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  service: string;
  city: string;
  message: string;
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
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border rounded-2xl p-8 space-y-4"
    >
      {/* Name */}
      <input
        {...register("name", { required: true })}
        placeholder="Your Name"
        className="w-full border rounded-lg px-4 py-3"
      />

      {/* Email */}
      <input
        {...register("email", { required: true })}
        placeholder="Email Address"
        className="w-full border rounded-lg px-4 py-3"
      />

      {/* Mobile */}
      <input
        {...register("mobile", { required: true })}
        placeholder="Mobile Number"
        className="w-full border rounded-lg px-4 py-3"
      />

      {/* Service Dropdown */}
      <select
        {...register("service", { required: true })}
        className="w-full border rounded-lg px-4 py-3 bg-white"
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
        className="w-full border rounded-lg px-4 py-3"
      />

      {/* Message */}
      <textarea
        {...register("message")}
        placeholder="Tell us about your project"
        rows={4}
        className="w-full border rounded-lg px-4 py-3"
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-60 w-full"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
