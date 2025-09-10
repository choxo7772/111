import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Brand colors for consistent usage across components
export const brandColors = {
  primary: "#15803d", // green-700
  secondary: "#84cc16", // lime-500
  accent: "#10b981", // emerald-500
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
}

// Brand typography scale
export const brandTypography = {
  fontFamily: {
    heading: "var(--font-playfair)",
    body: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
}

// Reusable brand components
export function BrandBadge({
  children,
  variant = "primary",
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
}) {
  return (
    <Badge
      variant={variant === "primary" ? "default" : variant}
      className={variant === "primary" ? "bg-primary hover:bg-primary/90" : ""}
    >
      {children}
    </Badge>
  )
}

export function BrandCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <Card className={`${hover ? "hover:shadow-lg transition-shadow duration-300" : ""} ${className}`}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  )
}

// Brand spacing scale
export const brandSpacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
}

// Brand animation presets
export const brandAnimations = {
  fadeIn: "animate-in fade-in duration-500",
  slideUp: "animate-in slide-in-from-bottom-4 duration-500",
  scaleIn: "animate-in zoom-in-95 duration-300",
  hover: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
}
