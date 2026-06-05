"use client";

import { useState } from "react";

const DEFAULT_STATE = {
  name: "",
  email: "",
  message: "",
  projectType: "Product Design",
};

export default function ContactForm() {
  const [formState, setFormState] = useState(DEFAULT_STATE);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error ?? "Unable to send message.");
      }

      setStatus("success");
      setFormState(DEFAULT_STATE);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Name
          <input
            name="name"
            value={formState.name}
            onChange={onChange}
            required
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-white/30"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Email
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={onChange}
            required
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-white/30"
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-white/70">
        Project Type
        <select
          name="projectType"
          value={formState.projectType}
          onChange={onChange}
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-white/30"
        >
          <option>Product Design</option>
          <option>Creative Direction</option>
          <option>Web Build</option>
          <option>Brand Systems</option>
          <option>Other</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm text-white/70">
        Message
        <textarea
          name="message"
          value={formState.message}
          onChange={onChange}
          required
          rows={6}
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-white/30"
          placeholder="Tell me about your idea, timeline, and goals."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {status === "success" && (
          <span className="text-sm text-emerald-300">
            Message sent. I'll reply within 48 hours.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-300">
            {errorMessage ?? "Unable to send message."}
          </span>
        )}
      </div>
    </form>
  );
}
