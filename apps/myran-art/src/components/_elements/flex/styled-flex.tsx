import styled from 'styled-components';

import { Props } from './flex';

export const StyledFlex = styled.div<Props>`
  align-items: ${({ align }) => align};
  display: flex;
`;
