import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { PropertyProvider } from "@/context/PropertyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <PropertyProvider>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </PropertyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
