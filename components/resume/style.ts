import styled from '../../styles/themed-components';
import { Devices } from '../../styles/media';

//TODO: split to small files/components
export const ResumeWrapper = styled.div``;

export const Top = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.accents7};
  margin-bottom: 1rem;

  & > div:last-child {
    margin-bottom: 1rem;
  }

  ${Devices.tablet} {
    flex-direction: row;

    & > div:first-child {
      width: 65%;
    }

    & > div:last-child {
      width: 35%;
    }
  }
`;

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.accents8};

  &::after {
    content: '';
    width: 40%;
    background: ${({ theme }) => theme.accents6};
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${Devices.tablet} {
    font-size: 3rem;
  }
`;

export const JobTitle = styled.p`
  color: ${({ theme }) => theme.accents6};
  text-align: center;
  text-transform: uppercase;
  font-size: 0.825rem;

  ${Devices.tablet} {
    font-size: 1.125rem;
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  margin: 0 auto;

  ${Devices.tablet} {
    width: 50%;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border: 0;
  padding: 0 1.5rem;

  ${Devices.tablet} {
    width: 65%;
    border-right: 1px solid ${({ theme }) => theme.accents7};
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 1rem;
  padding: 0 1.5rem;

  ${Devices.tablet} {
    width: 35%;
    padding: 0 0 0 1.5rem;
  }
`;

export const TitleH2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem 0;
  text-transform: uppercase;
  width: 100%;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  position: relative;
  color: ${({ theme }) => theme.accents7};

  &::after {
    content: '';
    width: 40%;
    background: ${({ theme }) => theme.accents7};
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 1rem;
  }
`;

export const Experience = styled.div`
  ${Devices.tablet} {
    margin-left: -1.5rem;
    border-left: 1px solid ${({ theme }) => theme.accents7};
  }
`;

export const Company = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px dotted ${({ theme }) => theme.accents7};

  ${Devices.tablet} {
    flex-direction: row;
    border-bottom: 0;
    padding-left: 1.5rem;
  }
`;

export const CompanyDate = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  font-weight: 500;
  color: ${({ theme }) => theme.accents7};

  ${Devices.tablet} {
    width: 35%;

    &::before {
      content: '';
      position: absolute;
      left: -30px;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.accents7};
    }
  }
`;

export const CompanyDetails = styled.div`
  width: 100%;

  ul {
    margin-bottom: 1rem;

    li {
      color: ${({ theme }) => theme.accents7};
    }
  }
`;

export const CompanyPosition = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.accents7};
`;

export const CompanySite = styled.a`
  color: ${({ theme }) => theme.accents4};
  margin-bottom: 1rem;
  display: block;
`;

export const ProjectDesc = styled.p`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accents7};
`;

export const TitleH3 = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  line-height: 0.9;
  color: ${({ theme }) => theme.accents7};
`;

export const Technologies = styled.p`
  color: ${({ theme }) => theme.accents7};
`;

export const Education = styled.div`
  width: 100%;

  ${Devices.tablet} {
    border-left: 1px solid;
    margin-left: -1.5rem;
    padding-left: 1.5rem;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  p {
    color: ${({ theme }) => theme.accents7};
  }
`;

export const Course = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const CourseDate = styled(CompanyDate)``;

export const CourseDetails = styled(CompanyDetails)`
  width: 100%;
  p:first-child {
    color: ${({ theme }) => theme.accents7};
    text-transform: uppercase;
    font-weight: 600;
  }

  p:last-child {
    color: ${({ theme }) => theme.accents4};
  }
`;

export const Contacts = styled.div`
  width: 100%;

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
      fill: ${({ theme }) => theme.accents7};
    }

    span {
      color: ${({ theme }) => theme.accents7};
    }

    a {
      color: ${({ theme }) => theme.linkColor};
    }
  }
`;

export const Additional = styled.div`
  li {
    color: ${({ theme }) => theme.accents7};
  }
`;
