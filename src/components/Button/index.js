import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

function Button({ children, isLoading, ...rest }) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
