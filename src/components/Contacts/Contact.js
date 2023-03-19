// import propTypes from 'prop-types';
import { Button, ItemLi } from './Contact.styled';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/phoneBook.oper';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemLi key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </ItemLi>
    </>
  );
};
