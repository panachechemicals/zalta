import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/data/products";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "enquiries@zalta.org",
    href: "mailto:enquiries@zalta.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 925-8200",
    href: "tel:+18009258200",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Zalta HQ, International Business Park, Level 12",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri, 08:00–18:00 (GST)",
    href: undefined,
  },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const empty: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
    toast.success(
      "Your enquiry has been received. We'll respond within 1 business day.",
    );
  }

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-3">
              Get in touch
            </p>
            <h1 className="font-display text-4xl font-semibold mb-4">
              Request a quote or ask a question
            </h1>
            <p className="text-primary-foreground/75 leading-relaxed">
              Our sales team typically responds within one business day. For
              urgent enquiries, please call us directly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-3"
              data-ocid="contact.form_section"
            >
              {submitted ? (
                <div
                  data-ocid="contact.success_state"
                  className="p-10 bg-card rounded-xl border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                    <Send className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-3">
                    Enquiry sent!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. A member of our team will be in
                    contact shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(empty);
                    }}
                    data-ocid="contact.send_another_button"
                  >
                    Send another enquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-xl border border-border p-8 space-y-6"
                  noValidate
                >
                  <h2 className="font-display text-xl font-semibold">
                    Enquiry Form
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name *</Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Jane Smith"
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company">Company / Property *</Label>
                      <Input
                        id="company"
                        required
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        placeholder="Grand Hotel Group"
                        data-ocid="contact.company_input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="jane@grandhotel.com"
                        data-ocid="contact.email_input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+1 (800) 000-0000"
                        data-ocid="contact.phone_input"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="interest">Product range of interest</Label>
                    <Select
                      value={form.interest}
                      onValueChange={(v) => set("interest", v)}
                    >
                      <SelectTrigger
                        id="interest"
                        data-ocid="contact.interest_select"
                      >
                        <SelectValue placeholder="Select a range…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All ranges</SelectItem>
                        {categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Please describe your requirements, quantities, or any questions…"
                      data-ocid="contact.message_textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Enquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
              data-ocid="contact.info_section"
            >
              <h2 className="font-display text-xl font-semibold">
                Contact information
              </h2>
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <div
                  key={label}
                  data-ocid={`contact.info.item.${i + 1}`}
                  className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-accent transition-smooth"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
