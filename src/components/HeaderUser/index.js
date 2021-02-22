import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, HeaderContent, User } from './style';

const HeaderUser = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <HeaderContainer>
      <HeaderContent>
        <User>
          <img src="https://avatars.dicebear.com/4.5/api/male/.svg" alt="" />
          <strong>{user.name}</strong>
        </User>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderUser;
