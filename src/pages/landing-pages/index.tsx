import React, { FC, useEffect, useState } from 'react';
import { IState } from '../../store/config';
import { useSelector } from 'react-redux';
import { ExternalLink, Grid, List, Plus, X } from 'react-feather';
import { Button, Spin } from 'antd';
import { PageStatusChip } from '../../components/page-status-chip';
import { RightColumn } from './right-column';
import { useQuery } from '../../utils/api-hook';
import { editorApi } from '../../api/editor-api';
import { AddNewPageButton } from './new-page-button';
import { PageDataType } from '../editor/types';
import { PageStatus } from '../../types/common';

export const LandingPages: FC = () => {
  const [filteredStatus, setFilteredStatus] = useState<PageStatus>();
  const [view, setView] = useState<"GRID" | "LIST">("GRID")
  const user = useSelector((state: IState) => state.authReducer.user);
  const [selectedPage, setSelectedPage] = useState<PageDataType>();
  const [pages, setPages] = useState<PageDataType[]>([]);

  const { query: getPages, loading: fetchingPages } = useQuery(editorApi.getPages, {
    onSuccess: ({ data }) => {
      setPages(data);
    }
  });

  useEffect(() => {
    getPages();
  }, [])

  const filteredPages = pages.filter((p) => filteredStatus ? filteredStatus === p.status : true);

  return (
    <>
      <RightColumn
        page={selectedPage}
        onClose={() => setSelectedPage(undefined)}
        onChange={(page) => {
          setPages(pages.map((p, i) => p.id === page.id ? page : p));
          setSelectedPage(page);
        }}
      />
      <div className={`pl-[80px] pt-40 pb-20 bg-contrast-5 min-h-screen transition-all ${selectedPage ? 'pr-[440px]' : 'pr-[40px]'}`}>
        <div className='max-w-4xl m-auto'>
          <div className='flex flex-row items-center mb-10'>
            <div className='flex flex-col'>
              <h2 className='text-3xl font-semibold'>Landing pages</h2>
            </div>
            <div className='flex flex-row pl-4 pt-0.5'>
              <div
                onClick={() => filteredStatus && setFilteredStatus(undefined)}
                className={`py-1 px-1 mx-1 cursor-pointer ${filteredStatus ? '' : 'border-b-2 border-b-accent2'}`}
              >
                <p className={`text-center font-medium ${filteredStatus ? 'opacity-60' : 'text-accent2'}`}>All</p>
              </div>
              <div
                onClick={() => filteredStatus !== PageStatus.LIVE && setFilteredStatus(PageStatus.LIVE)}
                className={`py-1 px-1 mx-1 cursor-pointer ${filteredStatus === PageStatus.LIVE ? 'border-b-2 border-b-accent2' : ''}`}
              >
                <p className={`text-center font-medium ${filteredStatus === PageStatus.LIVE ? 'text-accent2' : 'opacity-60'}`}>Live</p>
              </div>
              <div
                onClick={() => filteredStatus !== PageStatus.DRAFT && setFilteredStatus(PageStatus.DRAFT)}
                className={`py-1 px-1 mx-1 cursor-pointer ${filteredStatus === PageStatus.DRAFT ? 'border-b-2 border-b-accent2' : ''}`}
              >
                <p className={`text-center font-medium ${filteredStatus === PageStatus.DRAFT ? 'text-accent2' : 'opacity-60'}`}>Draft</p>
              </div>
              <div
                onClick={() => filteredStatus !== PageStatus.ARCHIVED && setFilteredStatus(PageStatus.ARCHIVED)}
                className={`py-1 px-1 mx-1 cursor-pointer ${filteredStatus === PageStatus.ARCHIVED ? 'border-b-2 border-b-accent2' : ''}`}
              >
                <p className={`text-center font-medium ${filteredStatus === PageStatus.ARCHIVED ? 'text-accent2' : 'opacity-60'}`}>Archived</p>
              </div>
            </div>
            <span className='flex flex-1' />
            <div className='flex flex-row justify-center mr-2'>
              <div className='flex flex-row bg-white border border-contrast-10 rounded-lg p-1'>
                <div
                  onClick={() => {
                    view !== "GRID" && setView("GRID")
                  }}
                  className={`w-9 h-8 rounded flex items-center justify-center cursor-pointer ${view === "GRID" ? 'bg-contrast-8' : ''}`}
                >
                  <Grid size={16} />
                </div>
                <div
                  onClick={() => {
                    view !== "LIST" && setView("LIST")
                  }}
                  className={`w-9 h-8 rounded flex items-center justify-center cursor-pointer ${view === "LIST" ? 'bg-contrast-8' : ''}`}
                >
                  <List size={16} />
                </div>
              </div>
            </div>
            <AddNewPageButton />
          </div>
          <div className='flex flex-row flex-wrap -m-4'>
            {fetchingPages &&
              <div className='h-12 w-12 mx-4 rounded-full flex items-center justify-center bg-white shadow'>
                <Spin style={{ lineHeight: 0 }} />
              </div>
            }
            {!fetchingPages && filteredPages.map((page, index) => {
              return view === "GRID" ? (
                <div className='p-3 w-1/3' key={index}>
                  <div
                    onClick={() => setSelectedPage(page)}
                    className='rounded-2xl shadow-md hover:shadow-xl transition-shadow  p-2 bg-white overflow-hidden group cursor-pointer'
                  >
                    <div className='aspect-[1.3] rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity'>
                      <img
                        className='w-full h-full object-cover'
                        src={page.thumbnail}
                      />
                    </div>
                    <div className='p-3 pt-4 flex flex-row items-start'>
                      <div className='flex flex-col flex-1 pr-5'>
                        <PageStatusChip status={page.status} />
                        <p className='font-medium mt-2'>{page.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='px-3 py-2 w-full'>
                  <div
                    onClick={() => setSelectedPage(page)}
                    className='rounded-2xl shadow-md p-2 shadow-[#e9e9e9] hover:shadow-xl hover:shadow-[#e2e2e2] transition-shadow border border-contrast-10 bg-white overflow-hidden group cursor-pointer flex flex-row'
                  >
                    <div className='aspect-[1.2] w-32 rounded-lg overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity'>
                      <img
                        className='w-full h-full object-cover'
                        src={page.thumbnail}
                      />
                    </div>
                    <div className='flex flex-col flex-1 pr-5 p-3 px-4'>
                      <PageStatusChip status={page.status} />
                      <p className='font-medium mt-2'>{page.name}</p>
                      <div className='flex flex-1' />
                      <p className='underline'>
                        <span>{page.url}</span>
                        <span className='ml-1'><ExternalLink size={12} className='inline' /></span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}