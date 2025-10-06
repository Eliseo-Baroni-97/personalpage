import React from 'react';

const BrainIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="2em" // Ajusta el tamaño como necesites
      height="2em"
      fill="currentColor" // Hereda el color del texto
      className="m-2" // Añade las mismas clases de margen que los otros íconos
    >
      <path d="M184 120C184 89.1 209.1 64 240 64h24c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32h-32c-30 0-55.1-20.4-62-48 .3 0 .7 0 1 0 44.2 0 80-35.8 80-80 0-18-6-34.6-16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1C108.1 252.9 104 238.9 104 224c0-44.2 35.8-80 80-80h0v-24zM456 120v24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 41.1C550.4 278.2 568 305 568 336c0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48h-32c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h24c30.9 0 56 25.1 56 56z" />
    </svg>
  );
};

export default BrainIcon;
