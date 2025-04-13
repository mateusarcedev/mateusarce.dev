type FooterProps = {
  theme: string
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`text-center py-6 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
      <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        © {new Date().getFullYear()} Mateus Silva Andrade Arce
      </p>
    </footer>
  )
}
