"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import type { ProjectCategory } from "@/data/projectsData";
import { services, type ServiceSlug } from "@/data/servicesData";
import {
  budgetBrackets,
  budgetLabels,
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
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

const fieldClass =
  "h-11 rounded-xl border-slate-200 bg-slate-50/80 px-3 shadow-none transition focus-visible:bg-white focus-visible:ring-indigo-500/30";

function categoryToService(category: ProjectCategory): ServiceSlug {
  switch (category) {
    case "SEO":
      return "seo";
    case "SMM":
      return "smm";
    case "Web":
      return "web-development";
    case "Gen AI":
      return "gen-ai";
    case "App":
      return "app-development";
  }
}

export function ProjectBookForm({
  projectTitle,
  category,
}: {
  projectTitle: string;
  category: ProjectCategory;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: categoryToService(category),
      budget: "50k-100k",
      message: `I'm interested in a project similar to: ${projectTitle}`,
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

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-950">Request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Our team will reply within one business day at{" "}
          <span className="font-medium text-slate-900">{form.getValues("email")}</span>.
        </p>
      </div>
    );
  }

  const errors = form.formState.errors;

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.35)] md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
        Book your service
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
        Start a similar engagement
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Share a short brief and we will map the right next step.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        <div className="space-y-2">
          <Label htmlFor="project-book-name">Full name</Label>
          <Input
            id="project-book-name"
            className={fieldClass}
            {...form.register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="text-xs text-red-500">{errors.name.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-book-email">Work email</Label>
          <Input
            id="project-book-email"
            type="email"
            className={fieldClass}
            {...form.register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="text-xs text-red-500">{errors.email.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label>Service</Label>
          <Select
            value={form.watch("service")}
            onValueChange={(value) =>
              form.setValue("service", value as ServiceSlug, { shouldValidate: true })
            }
          >
            <SelectTrigger className={fieldClass} aria-label="Service">
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
        </div>

        <div className="space-y-2">
          <Label>Budget</Label>
          <Select
            value={form.watch("budget")}
            onValueChange={(value) =>
              form.setValue("budget", value as ContactFormValues["budget"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger className={fieldClass} aria-label="Budget">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="project-book-message">Brief</Label>
          <Textarea
            id="project-book-message"
            rows={4}
            className="rounded-xl border-slate-200 bg-slate-50/80 px-3 py-3 shadow-none transition focus-visible:bg-white focus-visible:ring-indigo-500/30"
            {...form.register("message")}
            aria-invalid={!!errors.message}
          />
          {errors.message ? (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          ) : null}
        </div>

        <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Book your service"
          )}
        </Button>
      </form>
    </div>
  );
}
