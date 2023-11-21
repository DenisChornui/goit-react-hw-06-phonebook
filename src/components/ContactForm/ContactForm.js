import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { addContact } from 'redux/contactSlice';
import * as Yup from 'yup';
import {
  StyledBtn,
  StyledErrMessage,
  StyledField,
  StyledForm,
  StyledLabel,
} from './ContactForm.styled';

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.string()
    .matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"')
    .required('This field is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledLabel>
          Name
          <StyledField name="name" />
          <StyledErrMessage name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledField type="tel" name="number" required />
          <StyledErrMessage name="number" component="div" />
        </StyledLabel>

        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
