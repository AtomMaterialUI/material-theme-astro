import { setup, styled } from 'goober';
import { h } from 'preact';

setup(h);
const Screenshot = styled('a')`
  background:
    var(--laptop) no-repeat 50% 30%,
    url('../../img/laptop.png') no-repeat top left;
  background-size: 75%, contain;
`;

export const Laptop = () => {
  const displayTheme = () => {
    const theme = localStorage.getItem('material-theme') || 'oceanic';
    const url = `/img/themes/${theme}.png`;

    window.open(url, '_blank');
  };

  return (
    <div>
      <Screenshot onClick={displayTheme} target="_blank" className="bg-no-repeat block pt-[60%] w-full" />
    </div>
  );
};