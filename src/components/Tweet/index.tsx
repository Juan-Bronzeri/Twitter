import React from 'react';

import { 
    Container,
    Retweeted,
    UserIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <UserIcon/>
                Você retweetou
          </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Juan</strong>
                        <span>@juan.dias</span>
                        <Dot />
                        <time>16 de dez</time>
                    </Header>
                    <Description>Learning</Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <ComentIcon />
                            20
                        </Status>
                        <Status>
                            <RetweetIcon />
                            20
                        </Status>
                        <Status>
                            <LikeIcon />
                            50
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>

    )
}

export default Tweet;