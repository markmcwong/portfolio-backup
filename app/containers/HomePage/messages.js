/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: "Hi, I'm Mark Wong.",
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'A fullstack web developer\nstudying in Singapore',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'My Works',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'I have built different projects with frameworks such as React, Angular and Vue',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
