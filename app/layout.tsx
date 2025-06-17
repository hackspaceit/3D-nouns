import "./theme.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
    description:
      "",
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
        button: {
          title: `Read Chapter`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
            splashBackgroundColor:
              process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>{children}</Providers>
         <br></br>
  <div className="container">
        <nav className="bottom-nav">
            <a href="#home">
                <FontAwesomeIcon icon={["fas", "coffee"]} />Home
            </a>
            <a href="https://mangaplus.shueisha.co.jp/featured">
                <i className="fas fa-graduation-cap icon"></i>Hot
            </a>
            <a href="https://farcaster.xyz/~/channel/anime-manga">
                <i className="fas fa-briefcase icon"></i>Channel
            </a>
            
        </nav>
    </div>     
      </body>
    </html>
  );
}
