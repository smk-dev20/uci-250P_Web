/*
Sherlin Mary Koshy (smkoshy) MSWE 250P
Code Source : https://github.com/Apress/modern-full-stack-development/tree/master/mailbag/client
Error fixes :https://stackoverflow.com/questions/41944650/this-implicitly-has-type-any-because-it-does-not-have-a-type-annotation
            :https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file
Added feature reference : https://github.com/louischatriot/nedb/#updating-documents
*/
// Style imports.
import "normalize.css";
import "../css/main.css";

// React imports.
import React from "react";
import ReactDOM from "react-dom";

// App imports.
import BaseLayout from "./components/BaseLayout";
import * as IMAP from "./IMAP";
import * as Contacts from "./Contacts";


// Render the UI.
const baseComponent = ReactDOM.render(<BaseLayout />, document.body);


// Now go fetch the user's mailboxes, and then their contacts.
baseComponent.state.showHidePleaseWait(true);
async function getMailboxes() {
  const imapWorker: IMAP.Worker = new IMAP.Worker();
  const mailboxes: IMAP.IMailbox[] = await imapWorker.listMailboxes();
  mailboxes.forEach((inMailbox) => {
    baseComponent.state.addMailboxToList(inMailbox);
  });
}
getMailboxes().then(function() {
  // Now go fetch the user's contacts.
  async function getContacts() {
    const contactsWorker: Contacts.Worker = new Contacts.Worker();
    const contacts: Contacts.IContact[] = await contactsWorker.listContacts();
    contacts.forEach((inContact) => {
      baseComponent.state.addContactToList(inContact);
    });
  }
  getContacts().then(() => baseComponent.state.showHidePleaseWait(false));
});