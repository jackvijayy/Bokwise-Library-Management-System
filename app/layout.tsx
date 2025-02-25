import type { Metadata } from "next";
import "./globals.css";
import LocalFont from "next/font/local"
import { ReactNode } from "react";


const ibmPlexSans = LocalFont({
  src:[
    {path:'/fonts/IBMPlexSans-Regular.ttf',weight:'400',style:'normal', },
    {path:'/fonts/IBMPlexSans-Medium.ttf',weight:'500',style:'normal', },
    {path:'/fonts/IBMPlexSans-SemiBold.ttf',weight:'600',style:'normal', },
    {path:'/fonts/IBMPlexSans-Bold.ttf',weight:'700',style:'normal', }
  ]
  
});

const bebasNeue=LocalFont({
  src:[{

    path:'/fonts/BebasNeue-Regular.ttf',weight:'400',style:'normal'
  }]

});

export const metadata: Metadata = {
  title: "Bookwise",
  description: "Bookwise is a book Borrowing university Library Mangament ",
};

const RootLayout=({ children }: {children: ReactNode}) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;