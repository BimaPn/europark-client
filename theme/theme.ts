import { Poppins } from 'next/font/google';

import { extendTheme } from '@chakra-ui/react';

const poppins = Poppins({ subsets:["latin-ext"],weight:["400","500", "600", "700"],display:"swap" })

const fonts = {
  heading: poppins.style.fontFamily,
  body: poppins.style.fontFamily,
};

export const theme = extendTheme({
  fonts,
});
