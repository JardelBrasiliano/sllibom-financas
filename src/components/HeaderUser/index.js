import React from 'react';
import { HeaderContainer, HeaderContent, User } from './style';

const HeaderUser = () => {
  console.log('header');
  return (
    <HeaderContainer>
      <HeaderContent>
        <User>
          <img src="https://avatars.dicebear.com/4.5/api/male/.svg" alt="" />
          <strong>Jardel Brasiliano Brasiliano Brasiliano</strong>
        </User>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderUser;
