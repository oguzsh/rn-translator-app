import styled from 'styled-components';

import Container from './Container';

const ContainerCenter = styled(Container)({});

ContainerCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export default ContainerCenter;
