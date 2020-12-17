import React from 'react';

import Button from '../Button';

import { 
    Container,
    TopSide,
    Logo,
    MenuBotton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon,
    ExplorerIcon,
    ItensIcon,
    ListIcon,
    MoreIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <TopSide>
              <Logo />
              <MenuBotton>
                  <HomeIcon />
                  <span>Página Inicial</span>
              </MenuBotton>
              <MenuBotton>
                  <ExplorerIcon />
                  <span>Explorar</span>
              </MenuBotton>
              <MenuBotton>
                  <BellIcon />
                  <span>Notificações</span>
              </MenuBotton>
              <MenuBotton>
                  <EmailIcon />
                  <span>Mensagens</span>
              </MenuBotton>
              <MenuBotton>
                  <ItensIcon />
                  <span>Itens Salvos</span>
              </MenuBotton>
              <MenuBotton>
                  <ListIcon />
                  <span>Listas</span>
              </MenuBotton>
              <MenuBotton>
                  <FavoriteIcon />
                  <span>Favoritados</span>
              </MenuBotton>
              <MenuBotton className='active'>
                  <ProfileIcon />
                  <span>Perfil</span>
              </MenuBotton>
              <MenuBotton className='active'>
                  <MoreIcon />
                  <span>Mais</span>
              </MenuBotton>
              <Button>
                  <span>Tweetar</span>
              </Button>
          </TopSide>
          <BotSide>
              <Avatar />
              <ProfileData>
                  <strong>Juan Dias</strong>
                  <span>@juan.dias</span>
              </ProfileData>
              <ExitIcon />
          </BotSide>
      </Container>
  )
}

export default MenuBar;