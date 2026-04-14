import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { Award, Building2, Globe, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { label: "Years in Operation", value: "10+" },
  { label: "Products in Range", value: "50+" },
    { label: "Hotel Properties", value: "100+" },
];

const values = [
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every product in our portfolio is rigorously tested against international standards. We partner only with ISO-certified manufacturers.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We assign dedicated account managers to every B2B client, ensuring continuity and a deep understanding of your property's specific needs.",
  },
  {
    icon: Globe,
      },
  {
    icon: Building2,
    title: "Industry Expertise",
    description:
      "With 10 years serving hotels, serviced residences, and facilities companies, we understand the pressures of hospitality procurement.",
  },
];

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-3">
              About Zalta
            </p>
            <h1 className="font-display text-5xl font-semibold mb-5">
              Supplying hospitality excellence since 2017
            </h1>
            <p className="text-primary-foreground/75 text-lg leading-relaxed">
              Zalta is a B2B supplier of premium housekeeping and guest amenity
              products to the hospitality industry. We exist to help properties
              deliver outstanding guest experiences while controlling
              operational costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`about.stat.item.${i + 1}`}
                className="text-center"
              >
                <p className="font-display text-4xl font-semibold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Our Values
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              What sets us apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`about.value.item.${i + 1}`}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ranges Overview */}
      <section className="bg-muted/40 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Explore our ranges
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`about.category.item.${i + 1}`}
              >
                <Link
                  to="/products/$category"
                  params={{ category: cat.id }}
                  className="block p-5 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-smooth text-center group"
                >
                  <p className="font-display text-base font-semibold text-foreground group-hover:text-accent transition-smooth">
                    {cat.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cat.productCount} products
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Ready to work together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Reach out to our team to discuss your property's requirements.
          </p>
          <Button asChild size="lg" data-ocid="about.contact_button">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
