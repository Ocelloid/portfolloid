import "~/styles/globals.css";
import Header from "~/app/components/Header";
import { GeistSans } from "geist/font/sans";
import GradientWrapper from "~/app/components/GradientWrapper";

export const metadata = {
  title: "Никита Гребнев",
  description: "Сайт-резюме разработчика Frontend Никиты Гребнева",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Header />
        <GradientWrapper>{children}</GradientWrapper>
      </body>
    </html>
  );
}
