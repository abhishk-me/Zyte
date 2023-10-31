import React, { FC } from 'react';
import { ExternalLink, X } from 'react-feather';
import { PageStatusChip } from '../../components/page-status-chip';
import { Button, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PageDataType } from '../editor/types';
import { getUrl } from '../../utils/common';
import { PageStatus } from '../../types/common';
import { useMutation } from '../../utils/api-hook';
import { editorApi } from '../../api/editor-api';
import { DateTime } from 'luxon'

interface Props {
  page?: PageDataType;
  onClose: () => void;
  onChange: (page: PageDataType) => void
}
export const RightColumn: FC<Props> = ({ page, onClose, onChange }) => {
  const { mutate: updatePageMutation, loading: updaetingPage } = useMutation(editorApi.updatePage, {
    onSuccess: ({ data }) => {
      message.success("Page status updated!");
      onChange(data);
    },
  });

  const navigate = useNavigate();
  return (
    <div className={`fixed inset-y-0 right-0 w-[360px] z-[99] transition-transform duration-500 ${page ? 'translate-x-0' : 'translate-x-[360px]'}`}>
      {page && <div
        onClick={onClose}
        className='absolute top-3 -left-12 h-10 w-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer'
      >
        <X size={20} />
      </div>}
      <div className={`absolute inset-y-3 left-0 right-3 bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col`}>
        {page && <>
          <div className='p-3 bg-contrast-5 rounded-lg'>
            <div className='flex flex-col px-2 pb-2'>
              <p className='font-semibold text-xl'>{page.name}</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col px-2 py-3'>
                <p className='mb-2 opacity-60'>Status</p>
                <div><PageStatusChip larger status={page.status} /></div>
              </div>
              <div className='flex flex-col px-2 py-3 pl-5'>
                <p className='mb-2 opacity-60'>Created</p>
                <p className='py-0.5'>{page.createdAt && DateTime.fromISO(page.createdAt).toFormat("dd LLL yyyy, hh:mma")}</p>
              </div>
            </div>
            <div className='px-2 py-3'>
              <p className='mb-2 opacity-60'>Page URL</p>
              <p onClick={() => window.open(getUrl(page.id || ""), '_blank')} className='underline break-words hover:text-accent2 cursor-pointer'>
                <span>{page.url}</span>
                <span className='ml-1'><ExternalLink size={12} className='inline' /></span>
              </p>
            </div>
            <div className='px-2 py-3'>
              <p className='mb-2 opacity-60'>Last Updated</p>
              <p>{page.updateAt && DateTime.fromISO(page.updateAt).toFormat("dd LLL yyyy, hh:mma")}</p>
            </div>
            {page.status === PageStatus.ARCHIVED ? <div className='px-2.5 mt-3 mb-2'>
              <Button
                loading={updaetingPage}
                onClick={() => {
                  updatePageMutation({
                    pathParams: {
                      id: page.id || ""
                    },
                    requestBody: {
                      ...page,
                      status: PageStatus.DRAFT
                    }
                  })
                }}
                className='w-full' type='primary'
              >Unarchive this page</Button>
            </div> :
              <div className='flex flex-row py-1 px-1.5'>
                <div className='flex flex-col flex-1 px-1 pt-3 pb-2'>
                  <Button onClick={() => navigate(`/edit-page/${page.id || ""}`)} className='w-full' type='primary' ghost>Edit Page</Button>
                </div>
                <div className='flex flex-col flex-1 px-1 pt-3 pb-2'>
                  <Button onClick={() => window.open(getUrl(page.id || ""), '_blank')} className='w-full' type='primary' ghost>Preview</Button>
                </div>
              </div>}
            {page.status !== PageStatus.ARCHIVED && <div className='px-2.5 mb-2'>
              <Button
                loading={updaetingPage}
                onClick={() => {
                  updatePageMutation({
                    pathParams: {
                      id: page.id || ""
                    },
                    requestBody: {
                      ...page,
                      status: page.status === PageStatus.LIVE ? PageStatus.DRAFT : PageStatus.LIVE
                    }
                  })
                }}
                className='w-full'
                type='primary'
                danger={page.status === PageStatus.LIVE}
              >{page.status === PageStatus.DRAFT ? "Publish Page" : 'Unpublish'}</Button>
            </div>}
          </div>
          <div className='flex flex-1 flex-col rounded-xl overflow-hidden mt-3'>
            <div className='rounded-xl border border-contrast-10 overflow-hidden relative group'>
              <img
                className='w-full h-auto min-h-[200px] object-cover'
                src={page.thumbnail}
              />
              {process.env.NODE_ENV === "development" && <div className='absolute inset-0 items-end pb-6 justify-center hidden group-hover:flex'>
                <Input
                  placeholder='paste image link to update'
                  className='w-60'
                  onBlur={(e) => {
                    e.target.value && updatePageMutation({
                      pathParams: {
                        id: page.id || ""
                      },
                      requestBody: {
                        ...page,
                        thumbnail: e.target.value
                      }
                    });
                    e.target.value = ""
                  }}
                />
              </div>}
            </div>
          </div>
          {page.status !== PageStatus.ARCHIVED && <Button
            loading={updaetingPage}
            onClick={() => {
              updatePageMutation({
                pathParams: {
                  id: page.id || ""
                },
                requestBody: {
                  ...page,
                  status: PageStatus.ARCHIVED
                }
              })
            }}
            danger
            type='default'
            className='w-full mt-4'
          >Archive this page</Button>}
        </>}
      </div>
    </div>
  )
}