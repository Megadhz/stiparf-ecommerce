import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Stiparf Ecommerce Website',
    description: 'A website for buying a perfume',
};

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return ( 
  <html lang="en">
    <body>{children}</body>
  </html>
  );
};

export default RootLayout;
