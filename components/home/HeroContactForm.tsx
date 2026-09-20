"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { services, type ServiceSlug } from "@/data/servicesData";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-11 rounded-xl border-slate-200/90 bg-white px-3.5 shadow-none transition focus-visible:ring-indigo-500/25";

export function HeroContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "seo",
      budget: "50k-100k",
      message: "",
      estimateNote: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    void values;
  }

  const errors = form.formState.errors;
  const selectedService = form.watch("service") as ServiceSlug;

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-emerald-200/80 bg-white/95 p-8 text-center shadow-[0_40px_100px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-950">Message sent</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
          Thanks {form.getValues("name").split(" ")[0] || "there"}. We will reply to{" "}
          <span className="font-medium text-slate-900">{form.getValues("email")}</span> within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/95 p-6 shadow-[0_40px_100px_-48px_rgba(79,70,229,0.45)] backdrop-blur-xl md:p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
      />

      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Contact us
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          Tell us what you need
        </h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Share a short brief. A senior lead will get back to you soon.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="hero-name" className="text-slate-700">
              Name
            </Label>
            <Input
              id="hero-name"
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
              {...form.register("name")}
            />
            {errors.name ? <p className="text-xs text-red-500">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="hero-email" className="text-slate-700">
              Work email
            </Label>
            <Input
              id="hero-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={fieldClass}
              {...form.register("email")}
            />
            {errors.email ? <p className="text-xs text-red-500">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-slate-700">Service</Label>
          <Select
            value={selectedService}
            onValueChange={(value) =>
              form.setValue("service", value as ServiceSlug, { shouldValidate: true })
            }
          >
            <SelectTrigger aria-label="Service" className={cn(fieldClass, "w-full")}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {service.shortName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service ? (
            <p className="text-xs text-red-500">{errors.service.message}</p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="hero-message" className="text-slate-700">
            Message
          </Label>
          <Textarea
            id="hero-message"
            placeholder="What are you trying to build or improve?"
            className="min-h-[96px] rounded-xl border-slate-200/90 bg-white px-3.5 py-3 shadow-none focus-visible:ring-indigo-500/25"
            {...form.register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          ) : null}
        </div>

        <Button type="submit" size="lg" className="h-12 w-full rounded-xl" disabled={submitting}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </form>
    </div>
  );
}
