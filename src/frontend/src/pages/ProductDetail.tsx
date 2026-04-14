import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getCategoryById,
  getProductById,
  getRelatedProducts,
} from "@/data/products";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { motion } from "motion/react";

export default function ProductDetail() {
  const { category, id } = useParams({ from: "/products/$category/$id" });
  const product = getProductById(id);
  const cat = product ? getCategoryById(product.category) : undefined;
  const related = product ? getRelatedProducts(product) : [];

  if (!product) {
    return (
      <div
        data-ocid="product.not_found_section"
        className="max-w-7xl mx-auto px-4 py-24 text-center"
      >
        <h1 className="font-display text-3xl font-semibold mb-4">
          Product not found
        </h1>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div data-ocid="product.detail_page" className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              to="/"
              data-ocid="product.breadcrumb_home_link"
              className="hover:text-foreground transition-smooth"
            >
              Home
            </Link>
            <ArrowRight className="h-3 w-3" />
            <Link
              to="/products/$category"
              params={{ category }}
              data-ocid="product.breadcrumb_category_link"
              className="hover:text-foreground transition-smooth"
            >
              {cat?.name ?? category}
            </Link>
            <ArrowRight className="h-3 w-3" />
            <span className="text-foreground truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products/$category"
          params={{ category }}
          data-ocid="product.back_link"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to {cat?.name}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden border border-border shadow-card bg-card">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-3 text-xs uppercase tracking-widest"
            >
              {cat?.name}
            </Badge>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <Tag className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">
                {product.sku}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            <Separator className="mb-6" />

            {/* Specs */}
            <h2 className="font-display text-lg font-semibold mb-4">
              Specifications
            </h2>
            <div
              data-ocid="product.specs_table"
              className="grid grid-cols-1 gap-2 mb-8"
            >
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  data-ocid={`product.spec.item.${i + 1}`}
                  className="flex justify-between items-center py-2.5 px-4 rounded-lg bg-muted/40 border border-border text-sm"
                >
                  <span className="text-muted-foreground font-medium">
                    {spec.label}
                  </span>
                  <span className="text-foreground font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                data-ocid="product.request_quote_button"
              >
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                data-ocid="product.contact_button"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16" data-ocid="product.related_section">
            <h2 className="font-display text-2xl font-semibold mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-ocid={`product.related.item.${i + 1}`}
                >
                  <Link
                    to="/products/$category/$id"
                    params={{ category: rel.category, id: rel.id }}
                  >
                    <Card className="group overflow-hidden border-border shadow-card hover:shadow-elevated transition-smooth">
                      <img
                        src={rel.imageUrl}
                        alt={rel.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-smooth"
                      />
                      <CardContent className="p-4">
                        <p className="font-display text-base font-semibold text-foreground leading-snug mb-1">
                          {rel.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {rel.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
