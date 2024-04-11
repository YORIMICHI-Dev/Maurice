// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// custom theme
import { THEME } from '@/theme/theme';

// tabler icons


// scss
import '@/assets/scss/style.scss';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "THEME",
      themes: {
        THEME
      }
    }
  });
  app.vueApp.use(vuetify);
});
