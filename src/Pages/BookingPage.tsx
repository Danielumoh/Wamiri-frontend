import { useState } from "react";
import { useNavigate } from "react-router-dom";

// The business WhatsApp number
const WHATSAPP_NUMBER = "2348188390636";

// TypeScript interface — describes the shape of our form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

// TypeScript interface — describes which fields have errors
interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
}

function BookingPage() {
  const navigate = useNavigate();

  // Form state — all fields start empty
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  // Error state — starts empty, fills up if validation fails
  const [errors, setErrors] = useState<FormErrors>({});

  // Updates a single field when user types
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // Validates the form — returns true if valid, false if not
  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+\s]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.service) {
      newErrors.service = "Please select a service";
    }
    if (!form.date) {
      newErrors.date = "Please select a date";
    }
    if (!form.time) {
      newErrors.time = "Please select a time";
    }

    setErrors(newErrors);

    // If newErrors is empty, form is valid
    return Object.keys(newErrors).length === 0;
  }

  // Builds the WhatsApp message and opens WhatsApp
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Stop if validation fails
    if (!validate()) return;

    // Build the message string
    const message = `
Hello WAMIRI! I'd like to book a consultation.

*Name:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || "Not provided"}
*Service:* ${form.service}
*Preferred Date:* ${form.date}
*Preferred Time:* ${form.time}
*Notes:* ${form.notes || "None"}
    `.trim();

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the message
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank",
    );

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-coral/5 py-16 px-6 text-center">
        <button
          onClick={() => navigate("/")}
          className="text-sm tracking-widest uppercase text-coral hover:underline mb-8 block"
        >
          ← Back to Home
        </button>
        <p className="text-sm tracking-widest uppercase text-coral mb-3">
          Get Started
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900">
          Book a Consultation
        </h1>
        <p className="text-gray-500 mt-4 font-playfair italic">
          Fill in your details and we'll get back to you on WhatsApp
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-8"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm tracking-widest uppercase text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Amina Okafor"
            className={`border px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors ${
              errors.name ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm tracking-widest uppercase text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 08012345678"
            className={`border px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors ${
              errors.phone ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm tracking-widest uppercase text-gray-700">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. amina@email.com"
            className="border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col gap-2">
          <label className="text-sm tracking-widest uppercase text-gray-700">
            Service *
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`border px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors bg-white ${
              errors.service ? "border-red-400" : "border-gray-200"
            }`}
          >
            <option value="">Select a service</option>
            <option value="Corporate Wear">Corporate Wear</option>
            <option value="Dresses">Dresses</option>
            <option value="Pants">Pants</option>
            <option value="Asoebi">Asoebi</option>
          </select>
          {errors.service && (
            <p className="text-red-400 text-sm">{errors.service}</p>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-widest uppercase text-gray-700">
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`border px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors ${
                errors.date ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.date && (
              <p className="text-red-400 text-sm">{errors.date}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-widest uppercase text-gray-700">
              Preferred Time *
            </label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className={`border px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors bg-white ${
                errors.time ? "border-red-400" : "border-gray-200"
              }`}
            >
              <option value="">Select time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
            {errors.time && (
              <p className="text-red-400 text-sm">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2">
          <label className="text-sm tracking-widest uppercase text-gray-700">
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Tell us more about what you have in mind..."
            rows={4}
            className="border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:border-coral transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-coral text-white py-4 text-sm tracking-widest uppercase hover:bg-coral/80 transition-colors mt-4"
        >
          Send via WhatsApp →
        </button>

        <p className="text-center text-gray-400 text-sm font-playfair italic">
          You'll be redirected to WhatsApp with your details already filled in.
          Just tap Send!
        </p>
      </form>
    </div>
  );
}

export default BookingPage;
