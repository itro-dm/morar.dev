import styled from '../../../styles/themed-components';

const Wrapper = styled.div`
  position: absolute;
  padding: 20px;
  right: 20px;
  top: 15px;

  ${({ theme }) => theme.all.devices.tablet`
    position: relative;
  `};
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  right: 0;
`;

const Border = styled.span`
  border: 1px solid ${({ theme }) => theme.accents7};
  width: 50px;
  height: 20px;
  display: block;
  border-radius: 20px;
  position: relative;
`;

const Indicator = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  top: 1px;
  left: 2px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  box-sizing: border-box;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    ${Border} {
      border-color: #fff;
    }

    ${Indicator} {
      left: calc(50px - 18px);
      transform: rotate(180deg);
      background: #fff;

      &::after {
        content: '';
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        bottom: -3px;
        right: 5px;
        transform: scale(1);
        background: #26242e;
      }
    }
  }
`;

export { Wrapper, Label, Indicator, Input, Border };
