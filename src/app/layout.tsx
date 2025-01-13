import { DM_Sans } from "next/font/google";
import "@/styles/global.scss";
import { ThemeProvider } from "@/components/utils/ThemeProvider";
import { QueueProvider, TimelineQueueProvider } from "@/context/queueContexts";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Michael Allen - Front End Developer",
  description: "Experienced Front End Developer with 9 years of expertise, showcasing excellent collaboration, organization, and teamwork skills. Passionate about HTML, CSS, and JavaScript, I thrive on creating exceptional websites. My strong analytical, debugging, and problem-solving abilities have successfully served both small and large clients. Always open to exploring new technologies for innovative web solutions.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueueProvider>
            <TimelineQueueProvider>
              {children}
            </TimelineQueueProvider>
          </QueueProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
