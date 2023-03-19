import { Filter } from 'components/Filter/Filter';

import { Container, NameH2 } from './App.styled';
import { FormContacts } from 'components/FormContacts/FormContacts';
import { Contacts } from 'components/Contacts/Contacts';
import { fetchContacts } from 'redux/phoneBook.oper';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <NameH2>Phonebook</NameH2>
        <div>
          <FormContacts />
        </div>
        <div>
          <NameH2>Contacts</NameH2>
          <Filter />

          <Contacts />
        </div>
      </Container>
    </>
  );
};
