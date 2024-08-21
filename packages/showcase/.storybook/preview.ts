import { type Preview, setup } from "@storybook/vue3";

import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import "primeicons/primeicons.css";
import Tooltip from 'primevue/tooltip';

setup((app) => {
    app.directive('tooltip', Tooltip);
    app.use(PrimeVue, {
        // Default theme configuration
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'light',
                cssLayer: false
            }
        }
     });    
});

const preview: Preview = {
  parameters: {
      docs: {
          toc: true
      },
      options: {
          showPanel: false, // Optionally hide the story panel
          storySort: {
              order: [
                  'Introduction',
                  ['Overview', 'Installation'],
                  'Standard Components',
                  'Data Components',
                  ['PrezUILiteral', 'PrezUINode', 'PrezUIHeader'],
                  'Containers', 
                  'Pages',
                  '*',
                  'Config',
                  'Testing'
              ],
          },
      },
  }
};

export default preview;