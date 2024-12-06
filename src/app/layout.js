import Head from "next/head";
import { DM_Sans } from "next/font/google";
import "@/styles/global.scss";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Michael Allen",
  description: "Michael Allen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className} suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="supported-color-schemes" content="dark light" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple.png" />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
