const React = require('react');
import { COLORS } from '@/styles/theme';

const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        // if (typeof window !== 'undefined') {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        // };
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        // if (typeof window !== 'undefined') {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
            return mql.matches ? 'dark' : 'light';
        }
        // }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'light';
      }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--initial-color-mode', colorMode);
    const MyColors = ${JSON.stringify(COLORS)};
    Object.entries(MyColors[colorMode]).forEach(([name, colorByTheme]) => {
        const cssVarName = "--color-"+name;
        root.style.setProperty(cssVarName, colorByTheme);
      });
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
