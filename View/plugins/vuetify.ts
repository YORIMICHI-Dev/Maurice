// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

// Vuetify config
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// custom theme
import { THEME } from '@/theme/theme';

// scss
import '@/assets/scss/style.scss';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
    },
    directives: directives,
    theme: {
      defaultTheme: 'THEME',
      themes: {
        THEME,
      },
    },
    defaults: {
      VCard: {
        rounded: 'md',
        elevation: 10,
      },

      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        color: 'primary',
      },
      VListItem: {
        minHeight: '45px',
      },
      VTooltip: {
        location: 'top',
      },
      VBtn: {
        style: 'text-transform: capitalize; letter-spacing:0',
        rounded: 'md',
      },
    },
  });

  app.vueApp.use(vuetify);
});
