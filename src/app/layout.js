import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { PropertyProvider } from "@/context/PropertyContext";
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <PropertyProvider>{children}</PropertyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
