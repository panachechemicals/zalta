import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  categories,
  getCategoryById,
  getProductsByCategory,
} from "@/data/products";
import type { ProductCategory } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CategoryPage() {
  const { category } = useParams({ from: "/products/$category" });
  const cat = getCategoryById(category);
  const products = getProductsByCategory(category);

  if (!cat) {
    return (
      <div
        data-ocid="category.not_found_section"
        className="max-w-7xl mx-auto px-4 py-24 text-center"
      >
        <h1 className="font-display text-3xl font-semibold mb-4">
          Category not found
        </h1>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            data-ocid="category.back_link"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <Badge
                variant="outline"
                className="mb-3 text-xs uppercase tracking-widest"
              >
                Product Range
              </Badge>
              <h1 className="font-display text-4xl font-semibold text-foreground mb-3">
                {cat.name}
              </h1>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                {cat.description}
              </p>
            </div>
            <Button asChild data-ocid="category.request_quote_button">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="bg-muted/30 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/products/$category"
                params={{ category: c.id as ProductCategory }}
                data-ocid={`category.filter.${c.id}_tab`}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  c.id === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section
        data-ocid="category.products_section"
        className="bg-background py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground mb-8">
            {products.length} product{products.length !== 1 ? "s" : ""} in{" "}
            {cat.name}
          </p>
          {products.length === 0 ? (
            <div
              data-ocid="category.empty_state"
              className="text-center py-24 text-muted-foreground"
            >
              <p className="font-display text-2xl mb-2">No products yet</p>
              <p className="text-sm">
                Check back soon or contact us for custom sourcing.
              </p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="category.products_list"
            >
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`category.product.item.${i + 1}`}
                >
                  <Link
                    to="/products/$category/$id"
                    params={{ category: product.category, id: product.id }}
                  >
                    <Card className="group overflow-hidden border-border shadow-card hover:shadow-elevated transition-smooth h-full">
                      <div className="overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                        />
                      </div>
                      <CardContent className="p-5">
                        <Badge variant="outline" className="text-xs mb-2">
                          {product.sku}
                        </Badge>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-smooth">
                          View details <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
