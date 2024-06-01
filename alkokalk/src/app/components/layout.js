import "../../styles/globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "@/app/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Alkokalk",
  description: "AlkoKalk - Räkna ut APK för Systembolagets sortiment",
};

export default function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}
