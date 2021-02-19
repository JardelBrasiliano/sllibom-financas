import React from 'react';
import {
  BarNav,
  CardProfile,
  Header,
  ProfileContainer,
  ProfileContent,
  CardProfileContainer,
} from './style';

const Profile = () => {
  console.log('profile');
  return (
    <ProfileContainer>
      <ProfileContent>
        <Header>
          <p>Minha Conta</p>
        </Header>

        <BarNav>
          <li>
            <p>VISÃO GERAL</p>
          </li>
        </BarNav>

        <CardProfileContainer>
          <p>Perfil</p>
          <CardProfile>
            <div className="cardInput">
              <p>Nome</p>
              <p className="data">Jardel Pimentel Brasiliano</p>
              <div className="div" />
            </div>
          </CardProfile>

          <CardProfile>
            <div className="cardInput">
              <p>Email</p>
              <p className="data">jardel@mail.com</p>
              <div className="div" />
            </div>
          </CardProfile>

          <CardProfile>
            <div className="cardInput">
              <p>Telefone</p>
              <p className="data">( - )</p>
              <div className="div" />
            </div>
          </CardProfile>

          <CardProfile>
            <div className="cardInput">
              <p>Data de Nascimento</p>
              <p className="data">xx/xx/xxxx</p>
              <div className="div" />
            </div>
          </CardProfile>
        </CardProfileContainer>
      </ProfileContent>
    </ProfileContainer>
  );
};
export default Profile;
