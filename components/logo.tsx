import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ variant = "default", size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-28 h-28",
    lg: "w-32 h-32",
  }

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const logoContent = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/images/gauzens-logo.png"
          alt="Gauzens Software Solutions Logo"
          width={size === "sm" ? 80 : size === "md" ? 112 : 128}
          height={size === "sm" ? 80 : size === "md" ? 112 : 128}
          className="object-contain"
          priority
        />
      </div>

      {/* Company Name - removed since it's included in the logo image */}
      {showText && size === "lg" && (
        <span className={`font-playfair font-bold ${textSizeClasses[size]} text-foreground`}>
          Gauzens Software Solutions
        </span>
      )}
    </div>
  )

  return (
    <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
      {logoContent}
    </Link>
  )
}

export function FallbackLogo({ variant = "default", size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-28 h-28",
    lg: "w-32 h-32",
  }

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  }

  const logoContent = (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-xl flex items-center justify-center shadow-lg logo-container`}>
        <span className={`font-bold logo-text ${size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"}`}>
          G
        </span>
      </div>

      {/* Company Name */}
      {showText && (
        <span className={`font-playfair font-bold ${textSizeClasses[size]} text-foreground`}>
          Gauzens Software Solutions
        </span>
      )}
    </div>
  )

  return (
    <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
      {logoContent}
    </Link>
  )
}
