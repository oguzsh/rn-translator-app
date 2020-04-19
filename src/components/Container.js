import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadiu,
} from 'styled-system';

const Container = styled(View)(
  compose(color, size, space, border, flexbox, borderRadiu),
);

export default Container;
