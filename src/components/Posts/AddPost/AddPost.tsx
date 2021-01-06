import {Formik, Form, Field, ErrorMessage} from "formik";
import useStyles from "./AddPostStyle";

type PropsType = {
  addPost: (title: string, body: string) => void,
}

const AddPost: React.FunctionComponent <PropsType> = (props) => {

  const s = useStyles ();

  return (
    <div>
      <Formik
        initialValues={{ title: '', body: '' }}
        validate={values => {
          const errors: any = {};
          if (!values.title) {
            errors.title = 'Required';
          } 
          if (!values.body) {
            errors.body = "Required"
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.addPost (values.title, values.body);
          values.title = "";
          values.body = "";
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className = {s.inputBlock} >
              <Field className = "form-control" type="text" name="title" placeholder = "Enter Title" />
            </div>
            <div className = {s.errorBlock} >
              <ErrorMessage className = {s.error} name="title" component="div" />
            </div>
            <div className = {s.inputBlock} >
              <Field className = "form-control" type="text" name="body" placeholder = "Enter some text" />
            </div>
            <div className = {s.errorBlock} >
              <ErrorMessage className = {s.error} name="body" component="div" />
            </div>
            <button className = "btn btn-secondary" type="submit">
              Submit
           </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddPost;