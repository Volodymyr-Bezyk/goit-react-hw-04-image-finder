import { Header } from './Searchbar.styled';
import { Formik } from 'formik';
import { Form, SearchBtn, BtnLabel, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={onSubmit}>
        <Form>
          <SearchBtn type="submit">
            <BtnLabel>Search</BtnLabel>
          </SearchBtn>

          <Input
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Header>
  );
};

export default Searchbar;
