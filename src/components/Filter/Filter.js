import { ImpytStyle, TextSpan, FiltrBox } from './Filter.styles';
import { useDispatch } from 'react-redux';
import { phoneBook } from 'redux/phoneBook';
// import { fetchContacts } from 'redux/phoneBook.oper';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeValue = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(phoneBook.actions.setFilter(value));
  };

  return (
    <>
      <FiltrBox>
        <TextSpan>Find contacts by name</TextSpan>
        <div>
          <ImpytStyle
            // value={filter}
            onChange={onChangeValue}
            type="text"
            name="name"
            placeholder="Search"
          />
        </div>
      </FiltrBox>
    </>
  );
};
