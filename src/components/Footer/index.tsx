import React from 'react';
import { Linking } from 'react-native';

import { 
  Container,
  GitView,
  GitText,
  StarGit,
  IconGit

 } from './styles';

export function Footer(){
  return (
    <Container>
      <GitView>
        <GitText>
          If you liked it, star project.
        </GitText>
        <StarGit name={'star'} />
        <IconGit name={'github'}
          onPress={() =>
            Linking.openURL('https://github.com/JuanCampbsi/Bin2Dec')}
        />
      </GitView>
    </Container>
  );
}

export default Footer;