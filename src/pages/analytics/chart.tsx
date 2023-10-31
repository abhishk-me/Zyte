import React, { FC } from 'react';
import { AnalyticsDataType, PageEvent } from '../../types/common';
import { PageDataType } from '../editor/types';
import { DateTime } from 'luxon';
import { ResponsiveLine } from '@nivo/line';

interface Props {
  data: AnalyticsDataType[];
  page: PageDataType
}
export const Chart: FC<Props> = ({ data, page }) => {
  let pageViewWeeklyData = [{ day: "Mon", count: 0 }, { day: "Tue", count: 0 }, { day: "Wed", count: 0 }, { day: "Thu", count: 0 }, { day: "Fri", count: 0 }, { day: "Sat", count: 0 }];
  let clicksWeeklyData = [{ day: "Mon", count: 0 }, { day: "Tue", count: 0 }, { day: "Wed", count: 0 }, { day: "Thu", count: 0 }, { day: "Fri", count: 0 }, { day: "Sat", count: 0 }];
  const dateLastWeek = DateTime.now().startOf("day").minus({ days: 7 });
  const pageViewEvents = data.filter((d, i) => d.event === PageEvent.PAGE_VIEW && DateTime.fromISO(d.createdAt).startOf("day") > dateLastWeek);
  for (let i = 0; i < pageViewEvents.length; i++) {
    const record = pageViewEvents[i];
    const weekDay = DateTime.fromISO(record.createdAt).weekday - 1;
    pageViewWeeklyData[weekDay].count += 1;
  }

  const clickEvents = data.filter((d, i) => d.event === PageEvent.CLICK && DateTime.fromISO(d.createdAt).startOf("day") > dateLastWeek);
  for (let i = 0; i < clickEvents.length; i++) {
    const record = clickEvents[i];
    const weekDay = DateTime.fromISO(record.createdAt).weekday - 1;
    clicksWeeklyData[weekDay].count += 1;
  }

  const today = DateTime.now().weekday - 1;

  const chartData = [{
    id: "Page view",
    color: "red",
    data: [...pageViewWeeklyData.slice(today + 1), ...pageViewWeeklyData.slice(0, today + 1)].map((d, i) => ({
      x: d.day,
      y: d.count
    }))
  },
  {
    id: "Clicks",
    color: "green",
    data: [...clicksWeeklyData.slice(today + 1), ...clicksWeeklyData.slice(0, today + 1)].map((d, i) => ({
      x: d.day,
      y: d.count
    }))
  }]

  return (
    <>
      <div className='h-full w-full'>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 35, left: 40 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          curve="monotoneX"
          axisRight={null}
          axisLeft={{
            tickValues: 2,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          lineWidth={1}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          colors={({ color }) => color}
          pointSize={7}
          pointColor={{ from: 'color', modifiers: [['darker', 0.5]] }}
          pointBorderColor="#000"
          pointLabelYOffset={-12}
          useMesh={true}
          enableSlices="x"
        />
      </div>
    </>
  )
}