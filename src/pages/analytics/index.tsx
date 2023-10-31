import React, { FC, useEffect, useState } from 'react';
import { useQuery } from '../../utils/api-hook';
import { editorApi } from '../../api/editor-api';
import { AnalyticsDataByPage, AnalyticsDataType, PageStatus } from '../../types/common';
import { PageDataType } from '../editor/types';
import { Button, Spin } from 'antd';
import { PageStatusChip } from '../../components/page-status-chip';
import { Chart } from './chart';
import { RefreshCw } from 'react-feather';

export const Analytics: FC = () => {
  const [dataByPage, setDataByPage] = useState<AnalyticsDataByPage>({});
  const [pages, setPages] = useState<PageDataType[]>([])

  const { query: getAnalytics, loading: fetchingData } = useQuery(editorApi.getAnalyticsData, {
    onSuccess: ({ data }) => {
      let _dataByPage: AnalyticsDataByPage = {};
      for (let i = 0; i < data.length; i++) {
        const record = data[i];
        _dataByPage[record.pageId] = _dataByPage[record.pageId] ? [..._dataByPage[record.pageId], record] : [record]
      }
      setDataByPage(_dataByPage);
    }
  });

  const { query: getPages, loading: fetchingPages } = useQuery(editorApi.getPages, {
    onSuccess: ({ data }) => {
      setPages(data);
    }
  });

  useEffect(() => {
    getPages();
    getAnalytics();
  }, [])

  const livePages = pages.filter((p) => p.status === PageStatus.LIVE);

  return (
    <>
      <div className={`pl-[80px] pt-40 pb-20 bg-contrast-5 min-h-screen transition-all pr-[40px]`}>
        <div className='max-w-4xl m-auto'>
          <div className='flex flex-row items-center mb-10'>
            <div className='flex flex-col'>
              <h2 className='text-3xl font-semibold'>Page Analytics</h2>
            </div>
            <span className='flex flex-1 pt-1 pl-4 opacity-50' >Last 7 days</span>
            <Button onClick={() => getAnalytics()} type='primary' className='h-10'>
              <p className='flex items-center -mr-0.5'>
                <span className='mr-2'>Refresh</span>
                <RefreshCw size={18} color='#fff' className='pt-0.5' />
              </p>
            </Button>
          </div>
          <div className='flex flex-row flex-wrap -m-4'>
            {(fetchingData || fetchingPages) ?
              <div className='h-12 w-12 mx-4 rounded-full flex items-center justify-center bg-white shadow'>
                <Spin style={{ lineHeight: 0 }} />
              </div>
              : <>
                {livePages.map((page, index) => {
                  return (
                    <div className='p-3 w-1/2' key={index}>
                      <div
                        className='rounded-2xl shadow-md hover:shadow-xl transition-shadow  p-2 bg-white overflow-hidden'
                      >
                        <div className='aspect-[2] rounded-lg overflow-hidden'>
                          <Chart data={dataByPage[page.id || ""] || []} page={page} />
                        </div>
                        <div className='p-3 pt-4 flex flex-row items-start'>
                          <div className='flex flex-col flex-1 pr-5'>
                            <PageStatusChip status={page.status} />
                            <p className='font-medium mt-2'>{page.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <p className='text-sm font-medium opacity-50 px-8 pt-1 w-full'>Data showing only for the live pages</p>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}