import React from 'react';
import { Wrapper, Item } from '../styles/contacts-page';
import { PhoneIcon } from '../components/icons/phone';
import { LinkedInIcon } from '../components/icons/linkedin';
import { EmailIcon } from '../components/icons/email';
import { TelegramIcon } from '../components/icons/telegram';

interface IContacts {}

const Contacts = (props: IContacts) => {
  return (
    <Wrapper>
      <Item>
        <PhoneIcon />
        <span>+38 (066) 958 20 45</span>
      </Item>
      <Item>
        <EmailIcon />
        <a href="mailto:dmitry@morar.dev">dmitry@morar.dev</a>
      </Item>
      <Item>
        <a href="https://www.linkedin.com/in/dmitry-morar/">
          <LinkedInIcon />
        </a>
      </Item>
      <Item>
        <a href="https://t.me/dmitry_morar">
          <TelegramIcon />
        </a>
      </Item>
    </Wrapper>
  );
};

export default Contacts;
