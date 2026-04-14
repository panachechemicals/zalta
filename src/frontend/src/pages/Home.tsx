import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/products";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "ISO-Certified Quality",
    description:
      "Every product range meets international hospitality standards.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "On-time delivery to hotels and facilities across the region.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Partnerships with leading manufacturers worldwide.",
  },
];

const features = [
  "Bulk pricing for hotels and facilities",
  "Custom branding & logo printing",
  "Dedicated account management",
  "Product trials & sampling available",
  "Flexible MOQ for all property sizes",
  "Technical support & training",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        data-ocid="home.hero_section"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-hotel-lobby.dim_1400x700.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-primary/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-accent/20 text-primary-foreground border-accent/40 font-body text-xs uppercase tracking-widest"
            >
              B2B Hospitality Supplier
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
              Elevate Guest Experiences. Simplify Operations.
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
              Zalta provides premium, reliable supplies and innovative solutions
              for hospitality professionals worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                data-ocid="home.hero_browse_button"
                className="font-body"
              >
                <Link
                  to="/products/$category"
                  params={{ category: "guest-amenities" }}
                >
                  Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="home.hero_quote_button"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-body"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Ranges */}
      <section
        data-ocid="home.categories_section"
        className="bg-background py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Our Product Ranges
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Everything your property needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`home.category.item.${i + 1}`}
              >
                <Link to="/products/$category" params={{ category: cat.id }}>
                  <Card className="group overflow-hidden border-border shadow-card hover:shadow-elevated transition-smooth cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={cat.imageUrl}
                        alt={cat.name}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {cat.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-xs shrink-0 ml-2"
                        >
                          {cat.productCount} products
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-smooth">
                        View range <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Why Zalta */}
      <section
        data-ocid="home.trust_section"
        className="bg-muted/40 py-20 border-y border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Why Choose Zalta
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Trusted by hospitality professionals
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustPoints.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center p-8 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section
        data-ocid="home.features_section"
        className="bg-background py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                For Procurement Teams
              </p>
              <h2 className="font-display text-4xl font-semibold text-foreground mb-5">
                Built for high-volume hospitality purchasing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you manage a single boutique property or a portfolio of
                hotels, Zalta's procurement-friendly approach ensures consistent
                quality, competitive pricing, and seamless replenishment.
              </p>
              <Button
                asChild
                size="lg"
                data-ocid="home.features_contact_button"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feat, i) => (
                <div
                  key={feat}
                  data-ocid={`home.features.item.${i + 1}`}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{feat}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        data-ocid="home.cta_section"
        className="bg-primary text-primary-foreground py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl font-semibold mb-4">
              Ready to streamline your supply chain?
            </h2>
            <p className="text-primary-foreground/75 mb-8 max-w-xl mx-auto">
              Contact our team today to discuss your requirements and receive a
              tailored quotation.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              data-ocid="home.cta_quote_button"
              className="font-body"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
