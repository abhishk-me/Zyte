import { Button, Input, InputNumber, Modal, message } from 'antd';
import { Field, FieldProps, Form, Formik } from 'formik';
import React, { FC, useCallback, useState } from 'react';
import { Plus } from 'react-feather';
import * as Yup from 'yup';
import { PageDataType, PageSection } from '../editor/types';
import { nanoid } from 'nanoid';
import { DateTime } from 'luxon'
import { PageStatus } from '../../types/common';
import { sectionTemplates } from '../editor/consts';
import { useMutation } from '../../utils/api-hook';
import { editorApi } from '../../api/editor-api';
import { useNavigate } from 'react-router-dom';

interface Props {

}

interface AddPageFormType {
  name: string;
  title: string;
  description: string;
  noOfSections: number
}

const formInitialValues: AddPageFormType = {
  name: "",
  title: "",
  description: "",
  noOfSections: 3
}

export const AddNewPageButton: FC<Props> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { mutate: createPageMutation, loading: creatingPage } = useMutation(editorApi.createPage, {
    onSuccess: ({ data }) => {
      navigate(`/edit-page/${data.id || ""}`);
      message.success("Page created!");
    },
  });

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    title: Yup.string().required(),
    description: Yup.string().required(),
    noOfSections: Yup.number().min(1).required(),
  });

  const generateSections = useCallback((noOfSections: number) => {
    let _sections: PageSection[] = [];
    _sections.push(sectionTemplates[0].section);
    for (let i = 0; i < noOfSections - 1; i++) {
      const _section = sectionTemplates[Math.floor((Math.random() * (sectionTemplates.length - 2)) + 1)].section;
      _sections.push(_section);
    }
    return _sections
  }, [])

  const handleSubmit = (values: AddPageFormType) => {
    const newId = nanoid();
    const _page: PageDataType = {
      pageId: newId,
      name: values.name,
      title: values.title,
      description: values.description,
      url: `localhost:4444/pages/${newId}`,
      createdAt: DateTime.now().toUTC().toISO() || "",
      header: {
        color: "#fff",
        background: "#000"
      },
      footer: {
        color: "#fff",
        background: "#000",
        links: []
      },
      sections: generateSections(values.noOfSections),
      status: PageStatus.DRAFT
    }

    createPageMutation({
      requestBody: _page
    });
  }


  return (
    <>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={400}
        footer={null}
      >
        <div className='p-2'>
          <Formik
            initialValues={formInitialValues}
            validationSchema={schema}
            onSubmit={(values: AddPageFormType) => {
              handleSubmit(values);
            }}
          >
            {(formikProps) => (
              <Form onSubmit={formikProps.handleSubmit} className="text-left">
                <Field name="name">
                  {({ field, meta: { touched, error }, }: FieldProps) => (
                    <>
                      <p className="font-medium px-1 mb-1 flex justify-between">
                        <span>Page Name</span>
                        {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                      </p>
                      <Input
                        {...field}
                        title='Page Name'
                        placeholder="Nike renew ad 2023"
                        key={"name"}
                        status={(touched && Boolean(error)) ? "error" : ''}
                      />
                    </>
                  )}
                </Field>
                <div className="mt-4"></div>
                <Field name="title">
                  {({ field, meta: { touched, error }, }: FieldProps) => (
                    <>
                      <p className="font-medium px-1 mb-1 flex justify-between">
                        <span>Page Title</span>
                        {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                      </p>
                      <Input
                        {...field}
                        title='title'
                        placeholder="Enter page title"
                        key={"title"}
                        status={(touched && Boolean(error)) ? "error" : ''}
                      />
                    </>
                  )}
                </Field>
                <div className="mt-4"></div>
                <Field name="description">
                  {({ field, meta: { touched, error }, }: FieldProps) => (
                    <>
                      <p className="font-medium px-1 mb-1 flex justify-between">
                        <span>Page Description</span>
                        {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                      </p>
                      <Input.TextArea
                        rows={4}
                        {...field}
                        title='description'
                        placeholder="Enter page description"
                        key={"description"}
                        status={(touched && Boolean(error)) ? "error" : ''}
                      />
                    </>
                  )}
                </Field>
                <div className="mt-4"></div>
                <Field name="noOfSections">
                  {({ field, meta: { touched, error }, }: FieldProps) => (
                    <>
                      <p className="font-medium px-1 mb-1 flex justify-between">
                        <span>No. of sections on the page</span>
                        {touched && Boolean(error) && <span className="text-red-600 font-normal">Required*</span>}
                      </p>
                      <InputNumber
                        className='w-full'
                        min={1}
                        max={10}
                        value={field.value}
                        onChange={(val) => formikProps.setFieldValue("noOfSections", val)}
                        title='Number of sections'
                        placeholder="Enter no. of sections."
                        key={"noOfSections"}
                        status={(touched && Boolean(error)) ? "error" : ''}
                      />
                    </>
                  )}
                </Field>
                <div className="my-4"></div>
                <Button
                  loading={creatingPage}
                  htmlType='submit'
                  type='primary'
                  className='w-full mt-4 h-10'
                >
                  Add New Page
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <Button onClick={() => setOpen(true)} type='primary' className='h-10'>
        <p className='flex items-center -mr-0.5'>
          <span className='mr-1'>New Page</span>
          <Plus size={18} color='#fff' className='pt-0.5' />
        </p>
      </Button>
    </>
  )
}