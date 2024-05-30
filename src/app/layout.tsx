import "~/styles/globals.css";
import Header from "~/components/Header";
import { GeistSans } from "geist/font/sans";
import GradientWrapper from "~/components/GradientWrapper";

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
        <GradientWrapper>
          <Header />
          {children}
        </GradientWrapper>
      </body>
    </html>
  );
}
