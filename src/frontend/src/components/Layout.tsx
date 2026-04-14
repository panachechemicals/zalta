import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function NavLink({ to, label }: { to: string; label: string }) {
  const router = useRouterState();
  const active = router.location.pathname === to;
  return (
    <Link
      to={to}
      data-ocid={`nav.${label.toLowerCase()}_link`}
      className={`text-sm font-medium transition-smooth hover:text-accent ${
        active ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const isMobile = useIsMobile();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close products dropdown on outside click
  useEffect(() => {
    if (!productsOpen) return;
    function handleOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [productsOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="nav.logo_link"
              className="flex items-center gap-2 group"
            >
              <span className="font-display text-2xl font-semibold text-primary tracking-tight">
                Zalta
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground font-body uppercase tracking-widest mt-1">
                Hospitality Supplies
              </span>
            </Link>

            {/* Desktop Nav */}
            {!isMobile && (
              <nav
                className="flex items-center gap-8"
                aria-label="Main navigation"
              >
                {navLinks.map((link) => (
                  <NavLink key={link.to} {...link} />
                ))}

                {/* Products dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    data-ocid="nav.products_toggle"
                    type="button"
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-accent transition-smooth"
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                  >
                    Products
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-smooth ${productsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {productsOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-card border border-border rounded-lg shadow-elevated py-2 z-50"
                      data-ocid="nav.products_dropdown"
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to="/products/$category"
                          params={{ category: cat.id }}
                          data-ocid={`nav.products.${cat.id}_link`}
                          onClick={() => setProductsOpen(false)}
                          className="block px-4 py-2.5 text-sm hover:bg-muted transition-smooth"
                        >
                          <span className="font-medium text-foreground">
                            {cat.name}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {cat.productCount} products
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  asChild
                  size="sm"
                  data-ocid="nav.request_quote_button"
                  className="ml-2"
                >
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </nav>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button
                data-ocid="nav.mobile_menu_toggle"
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileOpen && (
          <div
            data-ocid="nav.mobile_menu"
            className="bg-card border-t border-border px-4 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-smooth"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-1">
              <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Products
              </p>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to="/products/$category"
                  params={{ category: cat.id }}
                  data-ocid={`nav.mobile_${cat.id}_link`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-smooth"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-border">
              <Button
                asChild
                size="sm"
                className="w-full"
                data-ocid="nav.mobile_quote_button"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main content (offset for fixed header) */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <span className="font-display text-3xl font-semibold tracking-tight">
                Zalta
              </span>
              <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
                Premium hospitality and housekeeping supplies for hotels,
                serviced residences, and facilities management companies
                worldwide.
              </p>
              <p className="mt-4 text-xs text-primary-foreground/50">
                © {new Date().getFullYear()} Zalta.{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "zalta.org")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-foreground/80 transition-smooth"
                >
                  Built with love using caffeine.ai
                </a>
              </p>
            </div>

            {/* Product ranges */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
                Product Ranges
              </h3>
              <ul className="space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to="/products/$category"
                      params={{ category: cat.id }}
                      data-ocid={`footer.${cat.id}_link`}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      data-ocid={`footer.${link.label.toLowerCase().replace(" ", "_")}_link`}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
