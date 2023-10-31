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
  const navigate = useNavigate();
  const { authenticated, password } = useSelector((state: IState) => state.authReducer);

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
  });

  const signIn = (values: FormInput) => {
    dispatch(authSignInAction({ authenticated, password, user: { firstName: values.firstName, lastName: values.lastName, _id: 'kksjdkjfdf' } }));
  }

  return (
    <div className="absolute bg-contrast-5 inset-0 left-0 p-12 overflow-y-auto overflow-x-hidden">
      <div className="text-xl flex flex-col items-center font-semibold justify-center">
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="0.013 0 70.987 19.309" xmlns="http://www.w3.org/2000/svg" viewBox="0.013 0 70.987 19.309" height="20" width="71" data-type="color" role="presentation" aria-hidden="true">
          <g>
            <path fill="#4633d7" d="M17.117 13.12a6.188 6.188 0 1 1-12.377 0 6.188 6.188 0 0 1 12.377 0ZM8 13.12a2.927 2.927 0 1 0 5.855 0 2.927 2.927 0 0 0-5.855 0Z" data-color="1"></path>
            <path fill="#4633d7" d="M.463 5.536a12.926 12.926 0 0 1 20.914-.025l-.007.005a1.822 1.822 0 1 1-2.924 2.13l-.007.005a9.29 9.29 0 0 0-15.032.018l-.005-.004A1.82 1.82 0 1 1 .468 5.539l-.005-.003Z" clipRule="evenodd" fillRule="evenodd" data-color="1"></path>
            <path fill="#4633d7" d="M32.84 8.908h-1.776V6.282h1.777v-.824c0-.755.12-1.459.36-2.111a5.432 5.432 0 0 1 1.082-1.725A4.842 4.842 0 0 1 36.008.438C36.694.146 37.467 0 38.325 0A7.744 7.744 0 0 1 41.8.798c.533.258 1.039.55 1.52.875l-1.365 2.575a5.338 5.338 0 0 0-1.57-.953 4.89 4.89 0 0 0-1.828-.36c-.498 0-.919.112-1.262.335a2.11 2.11 0 0 0-.773.875 2.98 2.98 0 0 0-.231 1.184v.953h3.027v2.626h-3.027v10.144h-3.45V8.908Zm7.235.89v9.254h3.45V6.282h-3.448v3.517h-.002Zm14.247 9.511c-1.03 0-1.948-.231-2.755-.695a5.075 5.075 0 0 1-1.905-1.905v2.343H46.65V.257h3.45V7.93a5.403 5.403 0 0 1 1.88-1.906c.789-.463 1.707-.695 2.754-.695.875 0 1.673.19 2.394.567a5.44 5.44 0 0 1 1.854 1.519 6.889 6.889 0 0 1 1.21 2.24 8.19 8.19 0 0 1 .438 2.703c0 .961-.163 1.862-.49 2.703a7.132 7.132 0 0 1-1.312 2.24 6.146 6.146 0 0 1-2.009 1.493c-.755.344-1.587.515-2.497.515Zm-.953-2.935a3.52 3.52 0 0 0 1.494-.309 3.799 3.799 0 0 0 1.184-.875c.343-.36.6-.781.772-1.262a4.32 4.32 0 0 0 .284-1.544c0-.738-.155-1.416-.464-2.034a3.728 3.728 0 0 0-1.236-1.52c-.514-.377-1.124-.566-1.828-.566-.497 0-.978.12-1.441.36-.447.224-.85.533-1.21.928a4.852 4.852 0 0 0-.824 1.338v3.219c.103.343.266.652.489.927.24.274.515.514.824.72.309.19.626.344.952.464.344.103.678.154 1.005.154Zm14.825-7.209c.823-.411 1.759-.617 2.806-.617V5.407a1.083 1.083 0 0 0-.258-.026h-.437c-.824.051-1.605.343-2.343.875s-1.347 1.262-1.828 2.189V5.56h-3.167v13.49h3.45v-8.16c.36-.756.953-1.33 1.777-1.726Z" clipRule="evenodd" fillRule="evenodd" data-color="1"></path>
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
              <Field name="email">
                {({ field, meta: { touched, error }, }: FieldProps) => (
                  <>
                    <p className="font-medium text-sm px-1 flex justify-between mb-1">
                      <span>Email</span>
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
              <div className="mt-4"></div>
              <Field name="password">
                {({ field, meta: { touched, error }, }: FieldProps) => (
                  <>
                    <p className="font-medium text-sm px-1 flex justify-between mb-1">
                      <span>Password</span>
                      {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                    </p>
                    <Input
                      type='password'
                      {...field}
                      title='Password'
                      placeholder="Enter your Password"
                      key={"password"}
                      status={(touched && Boolean(error)) ? "error" : ''}
                    />
                  </>
                )}
              </Field>
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