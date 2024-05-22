import type { Metadata } from 'next';
import { Forum, Inter, Licorice, Poppins } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const chillax = localFont({
  src: [
    {
      path: '../fonts/chillax/Chillax-Light.otf',
      weight: '300',
    },
    {
      path: '../fonts/chillax/Chillax-Regular.otf',
      weight: '400',
    },
    {
      path: '../fonts/chillax/Chillax-Medium.otf',
      weight: '500',
    },
    {
      path: '../fonts/chillax/Chillax-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../fonts/chillax/Chillax-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chillax',
});

const suisseintl = localFont({
  src: [
    {
      path: '../fonts/suisseintl/SuisseIntl-Light.otf',
      weight: '300',
    },
    {
      path: '../fonts/suisseintl/SuisseIntl-Regular.otf',
      weight: '400',
    },
    {
      path: '../fonts/suisseintl/SuisseIntl-Medium.otf',
      weight: '500',
    },
    {
      path: '../fonts/suisseintl/SuisseIntl-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../fonts/suisseintl/SuisseIntl-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suisseintl',
});

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-forum',
});

const licorice = Licorice({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-licorice',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Divya Jagdale',
  description: 'Portfolio of Divya Jagdale',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chillax.variable} ${forum.variable} ${licorice.variable} ${poppins.variable} ${suisseintl.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
