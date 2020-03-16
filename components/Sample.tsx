import React, { ReactElement } from 'react';
import styled, { withProps } from '../styles/themed-components';

const StyledP = styled.p`
  color: ${props => props.theme.bg};
  font-size: 10rem;
`;

interface ISample {
  visible: string;
}

const SampleWithProps = withProps<ISample, HTMLSpanElement>(styled.span)`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

interface IProps {
  text?: string;
}

const Bg = styled.div`
  width: 100%;
  text-align: center;
  min-height: 564px;
  background-image: radial-gradient(rgb(215, 215, 215) 1px, transparent 1px),
    radial-gradient(rgb(215, 215, 215) 1px, transparent 1px);
  background-size: 50px 50px;
  margin: 0px auto;
  padding: 0px;
  background-position: 0px 0px, 25px 25px;
`;

const Test = (props: IProps): ReactElement => (
  <Bg>
    <StyledP>
      <SampleWithProps visible={true}>🐶{props.text}🦄🐔</SampleWithProps>
    </StyledP>
    <StyledP>
      <SampleWithProps visible={true}>🐶{props.text}🦄🐔</SampleWithProps>
    </StyledP>
  </Bg>
);

export default Test;
