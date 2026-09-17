"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { services, type ServiceSlug } from "@/data/servicesData";
import {
  ESTIMATE_STORAGE_KEY,
  type StoredEstimate,
} from "@/lib/calculators";
import {
  budgetBrackets,
  budgetLabels,
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { isServiceSlug } from "@/data/servicesData";
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

const steps = [
  { id: 1, title: "About you", copy: "Who should we contact?" },
  { id: 2, title: "Scope", copy: "Service and budget" },
  { id: 3, title: "Brief", copy: "What success looks like" },
] as const;

const fieldClass =
  "h-12 rounded-xl border-slate-200 bg-slate-50/80 px-4 shadow-none transition focus-visible:bg-white focus-visible:ring-indigo-500/30";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [estimate, setEstimate] = useState<StoredEstimate | null>(null);

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

  useEffect(() => {
    const paramService = searchParams.get("service");
    const paramEstimate = searchParams.get("estimate");
    const paramTimeline = searchParams.get("timeline");

    if (paramService && isServiceSlug(paramService)) {
      form.setValue("service", paramService);
    }

    try {
      const raw = sessionStorage.getItem(ESTIMATE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredEstimate;
        setEstimate(parsed);
        if (isServiceSlug(parsed.service)) {
          form.setValue("service", parsed.service);
        }
        form.setValue(
          "estimateNote",
          `Locked estimate: ${parsed.investmentLabel}. Timeline: ${parsed.timeline}. ${parsed.summary}`
        );
      } else if (paramEstimate) {
        form.setValue(
          "estimateNote",
          `Locked estimate: ${paramEstimate}${paramTimeline ? `. Timeline: ${paramTimeline}` : ""}`
        );
      }
    } catch {
      if (paramEstimate) {
        form.setValue("estimateNote", `Locked estimate: ${paramEstimate}`);
      }
    }
  }, [form, searchParams]);

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
    sessionStorage.removeItem(ESTIMATE_STORAGE_KEY);
    void values;
  }

  async function nextStep() {
    const fields: (keyof ContactFormValues)[] =
      step === 1 ? ["name", "email"] : ["service", "budget"];
    const valid = await form.trigger(fields);
    if (valid) setStep((current) => current + 1);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 text-center md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-slate-950">
          Message received. Our team is on it.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          A senior lead from the relevant service will reply within one business day with proposed
          discovery times. Check the inbox for{" "}
          <span className="font-medium text-slate-900">{form.getValues("email")}</span>.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;
  const selectedService = form.watch("service") as ServiceSlug;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <ol className="grid grid-cols-3 gap-2 md:gap-3">
        {steps.map((item) => {
          const active = item.id === step;
          const done = item.id < step;
          return (
            <li
              key={item.id}
              className={cn(
                "relative overflow-hidden rounded-2xl border px-3 py-3 transition md:px-4 md:py-3.5",
                active && "border-indigo-300 bg-gradient-to-br from-indigo-50 to-cyan-50 shadow-sm",
                done && "border-cyan-200 bg-cyan-50/70",
                !active && !done && "border-slate-200 bg-slate-50/80"
              )}
            >
              <p
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.16em]",
                  active ? "text-indigo-700" : "text-slate-400"
                )}
              >
                Step {item.id}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-950">{item.title}</p>
              <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">{item.copy}</p>
              {active ? (
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      {estimate ? (
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4 text-sm">
          <p className="font-semibold text-indigo-900">
            Estimate locked from {estimate.serviceName}
          </p>
          <p className="mt-1 text-slate-600">
            {estimate.investmentLabel} · {estimate.timeline} · {estimate.teamSize}
          </p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="name"
              placeholder="Jordan Hale"
              className={fieldClass}
              {...form.register("name")}
            />
            {errors.name ? <p className="text-sm text-red-500">{errors.name.message}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">
              Work email
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="jordan@company.com"
              className={fieldClass}
              {...form.register("email")}
            />
            {errors.email ? <p className="text-sm text-red-500">{errors.email.message}</p> : null}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <div className="space-y-2">
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
              <p className="text-sm text-red-500">{errors.service.message}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">Budget range</Label>
            <Select
              value={form.watch("budget")}
              onValueChange={(value) =>
                form.setValue("budget", value as ContactFormValues["budget"], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger aria-label="Budget range" className={cn(fieldClass, "w-full")}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {budgetBrackets.map((bracket) => (
                  <SelectItem key={bracket} value={bracket}>
                    {budgetLabels[bracket]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget ? <p className="text-sm text-red-500">{errors.budget.message}</p> : null}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-700">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your product, the main challenge, and what a successful first quarter looks like."
              className="min-h-[140px] rounded-xl border-slate-200 bg-slate-50/80 px-4 py-3 shadow-none focus-visible:bg-white focus-visible:ring-indigo-500/30"
              {...form.register("message")}
            />
            {errors.message ? (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            ) : null}
          </div>
          {form.watch("estimateNote") ? (
            <p className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-500">
              {form.watch("estimateNote")}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-6">
        {step > 1 ? (
          <Button
            type="button"
            variant="outline"
            className="h-11 rounded-xl"
            onClick={() => setStep((current) => current - 1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <Button type="button" className="h-11 rounded-xl px-6" onClick={nextStep}>
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" className="h-11 rounded-xl px-6" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {submitting ? "Sending…" : "Submit inquiry"}
          </Button>
        )}
      </div>
    </form>
  );
}
