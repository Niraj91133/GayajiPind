import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center text-xs text-[#6E6963] py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link href="/" className="hover:text-[#2A1810] flex items-center gap-1 transition-colors">
        <Home className="w-3.5 h-3.5 text-[#B88E3E]" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-[#D2C5B0] flex-shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#2A1810] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#2A1810] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
