import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSugestion
                name='Pedro'
                nickname='@pedro'
              />,
              <FollowSugestion
                name='Rodrigo'
                nickname='@rodrigo'
              />,
              <FollowSugestion
                name='Jonas'
                nickname='@jonas'
              />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar;