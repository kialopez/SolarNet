// fetchEmails.js
import getInbox from './getInbox';

const fetchEmails = async (access_token, labelId) => {
    const emails = await getInbox(access_token, labelId);
    const messages = emails.map(email => {
        let content;
    if (email.payload.parts) {
      content = atob(email.payload.parts[0].body.data);
    } else {
      content = atob(email.payload.body.data);
    }
    return { content };
  });
  return messages;
};

export default fetchEmails;