import type { Theme } from '../themes';

interface Props {
  theme: Theme;
}

export const ThemeButton = ({ theme }: Props) => {
  const removeClassesByPrefix = (element: HTMLElement, prefix: string) => {
    const classes = element.classList;
    for (let i = classes.length - 1; i >= 0; i--) {
      if (classes[i].startsWith(prefix)) {
        classes.remove(classes[i]);
      }
    }
  };

  const setRootTheme = () => {
    const root = document.body;
    const currentTheme = root.getAttribute('data-theme') || '';
    const newTheme = theme.className;

    if (currentTheme !== newTheme) {
      root.setAttribute('data-theme', newTheme);
      removeClassesByPrefix(root, 'theme-');
      root.classList.add(`theme-${newTheme}`);
      window.localStorage?.setItem('material-theme', newTheme);
    }
  };

  return (
    <div>
      <button
        type="button"
        style={`background: ${theme.background}; box-shadow: 0 0 11px 2px rgba(255,255,255,0.23), 0 -1px 10px 0 rgba(0,0,0,0.1);`}
        className={`theme ${theme.className} js-theme rounded-[50%] inline-block h-[48px] p-0 w-[48px] m-4 shadow`}
        title={theme.name}
        onClick={setRootTheme}
        data-theme-class={theme.className}
      />
      <p className="theme-name uppercase">{theme.name}</p>
    </div>
  );
};