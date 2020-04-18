import {Text as T} from 'react-native';
import styled from 'styled-components';
import {compose, color, size, typography, space} from 'styled-system';

const Text = styled(T)(compose(typography, space, color, size));

Text.defaultProps = {
  letterSpacing: 1,
  fontFamily: 'Roboto-Medium',
};
export default Text;
