import React from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IState } from '../../store/config';
import { authSignInAction } from '../../store/auth/action';
import { Button, ConfigProvider, Input, theme } from 'antd';

interface APIResponse {
  success: boolean;
  message?: string;
}

interface FormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const formInitialValues: FormInput = {
  email: "",
  password: "",
  firstName: "",
  lastName: ""
}

const Authenticate: React.FC = () => {
  const dispatch = useDispatch();
  const { authenticated, password } = useSelector((state: IState) => state.authReducer);

  const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
  });

  const signIn = (values: FormInput) => {
    dispatch(authSignInAction({ authenticated, password, user: { firstName: values.firstName, lastName: values.lastName, _id: 'kksjdkjfdf' } }));
  }

  return (
    <div className="absolute bg-contrast-5 inset-0 left-0 p-12 overflow-y-auto overflow-x-hidden">
      <div className="text-xl flex flex-col items-center font-semibold justify-center">
        <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M40 0H0V40C0 62.1 17.9 80 40 80H80V40C80 17.9 62.1 0 40 0ZM73.3 73.3H40C21.6 73.3 6.7 58.3 6.7 40V6.7H40C58.4 6.7 73.3 21.7 73.3 40V73.3Z" fill="black" />
            <path d="M40 13.3C25.3 13.3 13.3 25.2 13.3 40C13.3 54.8 25.3 66.7 40 66.7C54.7 66.7 66.7 54.7 66.7 40C66.7 25.3 54.7 13.3 40 13.3ZM40 60C29 60 20 51 20 40C20 29 29 20 40 20C51 20 60 29 60 40C60 51 51 60 40 60Z" fill="black" />
            <path d="M40 26.7C32.6 26.7 26.7 32.7 26.7 40C26.7 47.3 32.7 53.3 40 53.3C47.3 53.3 53.3 47.3 53.3 40C53.3 32.7 47.4 26.7 40 26.7ZM40 46.7C36.3 46.7 33.3 43.7 33.3 40C33.3 36.3 36.3 33.3 40 33.3C43.7 33.3 46.7 36.3 46.7 40C46.7 43.7 43.7 46.7 40 46.7Z" fill="black" />
          </g>
        </svg>
      </div>
      <div className="max-w-md m-auto text-center bg-white shadow-lg rounded-t-xl rounded-b px-10 py-6 mt-28">
        <p className="text-2xl font-bold">Sign in</p>
        <p className="mt-1 opacity-60">Sign in to your account to continue</p>
      </div>
      <div className="max-w-md m-auto bg-white shadow-lg rounded-t rounded-b-xl pt-8 pb-10 px-10 mt-0.5">
        <Formik
          initialValues={formInitialValues}
          validationSchema={schema}
          onSubmit={values => {
            signIn(values)
          }}
        >
          {(formikProps) => (
            <Form onSubmit={formikProps.handleSubmit} className="text-left">
              <div className='flex flex-row'>
                <div className='flex flex-col flex-1 pr-1'>
                  <Field name="firstName">
                    {({ field, meta: { touched, error }, }: FieldProps) => (
                      <>
                        <p className="font-medium text-sm px-1 flex justify-between mb-1">
                          <span>First Name</span>
                          {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                        </p>
                        <Input
                          {...field}
                          title='Email'
                          placeholder="Enter your Email"
                          key={"email"}
                          status={(touched && Boolean(error)) ? "error" : ''}
                        />
                      </>
                    )}
                  </Field>
                </div>
                <div className='flex flex-col flex-1 pl-1'>
                  <Field name="lastName">
                    {({ field, meta: { touched, error }, }: FieldProps) => (
                      <>
                        <p className="font-medium text-sm px-1 flex justify-between mb-1">
                          <span>Last Name</span>
                          {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                        </p>
                        <Input
                          {...field}
                          title='Email'
                          placeholder="Enter your Email"
                          key={"email"}
                          status={(touched && Boolean(error)) ? "error" : ''}
                        />
                      </>
                    )}
                  </Field>
                </div>
              </div>
              <div className="mt-4"></div>
              <div className="my-4"></div>
              <Button
                htmlType='submit'
                type='primary'
                className='w-full mt-4'
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Authenticate;