import type { Metadata } from "next";
import Script from "next/script";
import "../styles/webflow.css";
import "../styles/content-sections.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/695bde55f1bab79a6fffc32c_Pody%20Open%20Graph.png",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-page="693e9d1043906400d3af5718"
      data-wf-site="693e9d1043906400d3af572d"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="/images/695bda0c5d5d9ccac91eb58a_Pody-favicon.jpg" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/695bda1077c419a3c36b9432_Pody-webclip.jpg" rel="apple-touch-icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`
          }}
        />
      </head>
      <body>
        {children}
        
        {/* Load jQuery and Webflow scripts */}
        <Script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="beforeInteractive" />
        <Script src="/js/webfont.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.schunk.36b8fb49256177c8.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.83bf6ba4eb86fed0.js" strategy="afterInteractive" />
        <Script src="/js/webflow.8062bdde.75c435517d8497bb.js" strategy="afterInteractive" />
        
        {/* Inline script to load Webfont families */}
        <Script id="webfont-loader" strategy="afterInteractive">
          {`
            if (typeof WebFont !== 'undefined') {
              WebFont.load({
                google: {
                  families: ["Geist:regular,500,600"]
                }
              });
            }
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
