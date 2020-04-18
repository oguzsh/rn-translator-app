import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(position, size, space, flexbox, layout, borderRadius, color),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
