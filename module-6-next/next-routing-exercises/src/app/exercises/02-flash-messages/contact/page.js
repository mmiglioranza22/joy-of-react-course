"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useToastContext } from "../../../../components/ToastProvider";

function ContactPage() {
  const router = useRouter();
  const { createToast } = useToastContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.back();
    createToast("You are logged in", "success");
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
