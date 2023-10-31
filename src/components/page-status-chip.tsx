import React, { FC } from 'react';
import { PageStatus } from '../types/common';

export const PageStatusChip: FC<{ status: PageStatus, larger?: boolean }> = ({ status, larger }) => {
  return (
    <div className={`inline-flex self-start flex-row items-center rounded-full pl-1 pr-3 -ml-0.5 ${status === PageStatus.DRAFT ? 'bg-contrast-8' : status === PageStatus.LIVE ? ' bg-green-100' : 'bg-red-100'} ${larger ? 'pl-1.5 pr-4 py-0.5' : 'pl-1 pr-3'}`}>
      <span className={`h-3 w-3 rounded-full ${status === PageStatus.DRAFT ? 'bg-contrast-30' : status === PageStatus.LIVE ? ' bg-green-500' : 'bg-red-500'}`} />
      <p className={`text-sm font-medium pl-1 capitalize ${status === PageStatus.DRAFT ? 'text-black' : status === PageStatus.LIVE ? ' text-green-700' : 'text-red-700'}`}>{status.toLowerCase()}</p>
    </div>
  )
}