// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// tabler icons

// scss
import '@/assets/scss/style.scss';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
  });
  app.vueApp.use(vuetify);
});
