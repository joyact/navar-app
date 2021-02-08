import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import Icon from '../common/Icon';

function NavBtn() {
  return (
    <Icon size="22" linkTo="/mypage">
      <VscMenu />
    </Icon>
  );
}

export default NavBtn;
