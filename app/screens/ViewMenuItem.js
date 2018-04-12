import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { Image } from 'react-native';
import { H1, H2, H3, Footer, FooterTab, Container, Content, Text } from 'native-base';

class ViewMenuItem extends PureComponent {
    static propTypes = {
      navigation: Proptypes.object,
    }

    render() {
      const {
        title, subtitle, description, image,
      } = this.props.navigation.state.params.data;

      return (
        <Container>
          <Content>
            <Image source={image} style={{ height: 300, width: null, flex: 1 }} />
            <Text><H1>{title}</H1></Text>
            <Text><H2>{subtitle}</H2></Text>
            <Text><H3>{description}</H3></Text>
          </Content>
          <Footer>
            <FooterTab>
              <Text>-----</Text>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
}

export default ViewMenuItem;
