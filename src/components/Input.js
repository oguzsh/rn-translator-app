import {TextInput} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  shadow,
  border,
  borderRadius,
} from 'styled-system';

const Input = styled(TextInput)(
  compose(borderRadius, typography, space, color, size, shadow, border),
);

Input.defaultProps = {
  borderBottomWidth: 1,
  borderBottomColor: 'grey',
};

export default Input;
