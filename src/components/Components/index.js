import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { H6 } from './H6';
import { P } from './P';
import { A } from './A';
import { Img } from './Img';
import { Iframe } from './Iframe';

export const AvailableComponents = [
  { layout: 'h1', label: 'header-1', component: H1 },
  { layout: 'h2', label: 'header-2', component: H2 },
  { layout: 'h3', label: 'header-3', component: H3 },
  { layout: 'h4', label: 'header-4', component: H4 },
  { layout: 'h5', label: 'header-5', component: H5 },
  { layout: 'h6', label: 'header-6', component: H6 },
  { layout: 'p', label: 'paragraph', component: P },
  { layout: 'a', label: 'link', component: A },
  { layout: 'img', label: 'image', component: Img },
  { layout: 'iframe', label: 'iframe', component: Iframe },
];
