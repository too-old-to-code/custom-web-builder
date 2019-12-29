import React, { useState } from 'react';
import { NavMenuComplete, MainArea, Hero } from '../../src/layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/themes/theme-1';
import logo from '../../static/favicon.ico';
import { TimeTable } from '../../src/particles/schedule-table';

const MON = 'Mon';
const TUE = 'Tue';
const WED = 'Wed';
const THU = 'Thu';
const FRI = 'Fri';
const SAT = 'Sat';
const SUN = 'Sun';

export default {
  title: 'Particles.Timetable',
};

export const Schedule = () => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        background: 'black',
        paddingTop: '30px',
      }}
    >
      <TimeTable
        options={{
          hideVerticalAxis: true,
          hideHorizontalAxis: false,
          eventBorderRadius: 0,
          eventTextColor: 'white',
          xAxisTextColor: 'grey',
          yAxisTextColor: 'grey',
          eventFontSize: 10,
          eventOpacity: 0.5,
          yAxisRowHeight: 40,
          // eventBorderColor: "yellow",
          eventMargin: 1,
          // timeWindowOverride: "06:00-18:00"
        }}
        onLessonClicked={event => console.log(event)}
        dataset={{
          days: [SUN, MON, TUE, WED, THU, FRI, SAT],
          events: [
            {
              name: 'Ch MMA',
              start: '18:00',
              end: '19:00',
              day: MON,
              color: 'red',
              id: '212',
            },
            {
              name: 'BJJ (Gi)',
              start: '19:00',
              end: '20:00',
              day: MON,
              color: 'blue',
              id: '2132',
            },
            {
              name: 'Judo',
              start: '20:00',
              end: '21:00',
              day: MON,
              color: 'green',
              id: '6234',
            },
            {
              name: 'BJJ (No gi)',
              start: '11:30',
              end: '12:30',
              day: TUE,
              color: 'blue',
              id: '6235',
            },
            {
              name: 'Judo',
              start: '12:30',
              end: '13:30',
              day: TUE,
              color: 'green',
              id: '6236',
            },
            {
              name: 'Ch BJJ',
              start: '18:30',
              end: '19:30',
              day: TUE,
              color: 'red',
              id: '6237',
            },
            {
              name: 'BJJ (no gi)',
              start: '19:30',
              end: '21:00',
              day: TUE,
              color: 'blue',
              id: '6238',
            },
            {
              name: 'Judo',
              start: '19:30',
              end: '20:30',
              day: WED,
              color: 'green',
              id: '6239',
            },
            {
              name: 'BJJ (no gi)',
              start: '11:30',
              end: '12:30',
              day: THU,
              color: 'blue',
              id: '6223',
            },
            {
              name: 'Ch BJJ',
              start: '18:30',
              end: '19:30',
              day: THU,
              color: 'red',
              id: '6240',
            },
            {
              name: 'BJJ (no gi)',
              start: '19:30',
              end: '21:00',
              day: THU,
              color: 'blue',
              id: '6241',
            },
            {
              name: 'BJJ (Gi)',
              start: '11:30',
              end: '12:30',
              day: FRI,
              color: 'blue',
              id: '6242',
            },
            {
              name: 'Wrestling',
              start: '11:00',
              end: '12:00',
              day: SAT,
              color: 'purple',
              id: '6243',
            },
            {
              name: 'BJJ (no gi)',
              start: '12:00',
              end: '13:00',
              day: SAT,
              color: 'blue',
              id: '6244',
            },
            {
              name: 'BJJ (Gi)',
              start: '09:00',
              end: '10:00',
              day: SUN,
              color: 'blue',
              id: '6245',
            },
          ],
        }}
      />
    </div>
  </ThemeProvider>
);
