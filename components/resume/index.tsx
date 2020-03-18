import React, { ReactElement } from 'react';
import {
  Avatar,
  Bottom,
  Company,
  CompanyDate,
  CompanyDetails,
  CompanyPosition,
  CompanySite,
  Contacts,
  Course,
  CourseDate,
  CourseDetails,
  Education,
  Experience,
  JobTitle,
  LeftColumn,
  Name,
  Profile,
  ProjectDesc,
  ResumeWrapper,
  RightColumn,
  Technologies,
  TitleH2,
  TitleH3,
  Top,
} from './style';
import { EmailIcon } from '../icons/email';
import { GlobalIcon } from '../icons/global';
import { PhoneIcon } from '../icons/phone';

interface IResume {
  data: {
    experience: [];
    education: [];
  };
}

// TODO: provide proper types
export const Resume = ({ data }: IResume) => {
  const { experience, education } = data;

  // TODO: extract to component
  const renderCompaniesList = (experience: any): ReactElement => {
    return experience.map((item: any) => {
      return (
        <Company key={item.company}>
          <CompanyDate>
            <span>{item.date}</span>
          </CompanyDate>

          <CompanyDetails>
            <CompanyPosition>{item.position}</CompanyPosition>

            <CompanySite href={item.companyUrl}>{item.company}</CompanySite>

            <TitleH3>Project</TitleH3>
            <ProjectDesc>{item.projectDesc}</ProjectDesc>

            <TitleH3>Responsibilities</TitleH3>
            <ul>
              {item.responsibilities.map((i: any) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <TitleH3>Technologies</TitleH3>
            <Technologies>{item.technologies}</Technologies>
          </CompanyDetails>
        </Company>
      );
    });
  };

  // TODO: extract to component
  const renderEducationsList = (education: any): ReactElement => {
    return education.map((i: any) => {
      return (
        <Course key={i.what}>
          <CourseDate>
            <span>{i.date}</span>
          </CourseDate>
          <CourseDetails>
            <p>{i.title}</p>
            <p>{i.where}</p>
          </CourseDetails>
        </Course>
      );
    });
  };
  // TODO: split by small components
  return (
    <ResumeWrapper>
      <Top>
        <div>
          <Name>Dmitry Morar</Name>
          <JobTitle>React JS developer</JobTitle>
        </div>
        <div>
          <Avatar src="/avatar.jpeg" alt="avatar" />
        </div>
      </Top>

      <Bottom>
        <LeftColumn>
          <Profile>
            <TitleH2>Profile</TitleH2>
            <p>
              I am a front-end developer who is trying to create UI stuff for delivering business
              values to customers. My first steps was as a markup developer then switched to the
              backend part in the PHP world (WordPress, PrestaShop, OpenCart). Last two years I am
              focusing on front-end.
            </p>
          </Profile>

          <TitleH2>Work Experience</TitleH2>
          <Experience>{experience && renderCompaniesList(experience)}</Experience>

          <TitleH2>Education</TitleH2>
          <Education>{education && renderEducationsList(education)}</Education>
        </LeftColumn>

        <RightColumn>
          <Contacts>
            <TitleH2>Contacts</TitleH2>
            <ul>
              <li>
                <PhoneIcon />
                <span>+38 (066) 958 20 45</span>
              </li>
              <li>
                <EmailIcon />
                <a href="mailto:dmitry@morar.dev">dmitry@morar.dev</a>
              </li>
              <li>
                <GlobalIcon />
                <a href="/">morar.dev</a>
              </li>
            </ul>
          </Contacts>

          <div>
            <TitleH2>Additional Skills</TitleH2>
            <ul>
              <li>- English - B1</li>
              <li>- Deep knowledge of good jokes</li>
            </ul>
          </div>
        </RightColumn>
      </Bottom>
    </ResumeWrapper>
  );
};
