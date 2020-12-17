import React from 'react';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    EditButton,
    LocationIcon,
    CakeIcon,
    Followage,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Juan Dias</h1>
                <h2>@juan.dias</h2>
                <p>
                    Developer at Texs.
              </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Jundiaí, SP
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 14 de abril
                    </li>
                </ul>

                <Followage>
                    <span><strong>99 </strong>seguindo</span>
                    <span><strong>67 </strong>seguidores</span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
}

export default ProfilePage;