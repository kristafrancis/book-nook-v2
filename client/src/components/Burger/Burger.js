import React, { useState } from 'react';
import StyledBurger from './StyledBurger';
import MenuStyled from '../Menu/MenuStyled';
import MenuModal from '../Menu/MenuModal';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <StyledBurger open={open} setOpen={setOpen} />
      <MenuStyled open={open} setOpen={setOpen} />
      <MenuModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Burger;