import React from 'react';
import { DesktopSchedule } from './_desktop-schedule';
import { MobileSchedule } from './_mobile-schedule';
import styled from 'styled-components';

const Large = styled.span`
  @media (max-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.mobile}) {
    display: none !important;
  }
`;

const Small = styled.span`
  @media (min-width: ${({ theme }) => theme && theme.breakpoints && theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const TimeTable = props => {
  return (
    <div>
      <Small>
        <MobileSchedule {...props} />
      </Small>
      <Large>
        <DesktopSchedule {...props} />
      </Large>
    </div>
  );
};

// const convertSecondsToMinutes = minutes => minutes / 60;

// export const TimeTable = props => {
//   const { dataset = {}, options = {} } = props;

//   const {
//     viewBoxLeftPadding = 75,
//     viewBoxBottomPadding = 20,
//     viewBoxRightPadding = 50,
//     yAxisRowHeight = 40,
//     hideHorizontalAxis = false,
//     hideVerticalAxis = false,
//     shadeAlternateRows = true,
//     hideVerticalGuides = false,
//     timeWindowOverride = '',
//     eventBorderRadius = 0,
//     eventOpacity = 0.4,
//     eventMargin = 2,
//     eventFontSize = 10,
//     eventBorderColor = 'none',
//     eventTextColor = 'black',
//     yAxisTextColor = 'black',
//     xAxisTextColor = 'black',
//   } = options;

//   const { events, days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'] } = dataset;

//   if (timeWindowOverride) {
//     var [timeWindowStart, timeWindowEnd] = timeWindowOverride.split('-');
//   } else {
//     // find the lowest and highest times so that we can set the timewindow
//     // of the schedule to cover an appropriate range
//     var [timeWindowStart, timeWindowEnd] = events.reduce(
//       (acc, event) => {
//         if (event.start < acc[0]) {
//           acc[0] = event.start;
//         }
//         if (event.end > acc[1]) {
//           acc[1] = event.end;
//         }
//         return acc;
//       },
//       ['24:00', '00:00']
//     );
//   }

//   const timeDriftObj = timeDrift(timeWindowStart);

//   const xAxisWidth = timeDiffInMins(timeWindowStart, timeWindowEnd);
//   const numOfAxisPointsX = convertSecondsToMinutes(xAxisWidth);
//   const xAxisColWidth = xAxisWidth / numOfAxisPointsX;

//   const numOfAxisPointsY = days.length + 1;
//   const yAxisHeight = numOfAxisPointsY * yAxisRowHeight;

//   let vbWidth = xAxisWidth + viewBoxLeftPadding + viewBoxRightPadding;
//   let vbHeight = yAxisHeight + viewBoxBottomPadding;

//   let dayIndices = () => {
//     let lines = [];
//     for (let i = 0; i < numOfAxisPointsY; i++) {
//       lines.push(
//         <g key={days[days.length - i] || i}>
//           <line
//             x1={viewBoxLeftPadding}
//             y1={yAxisHeight - i * yAxisRowHeight - viewBoxBottomPadding}
//             x2={0}
//             y2={yAxisHeight - i * yAxisRowHeight - viewBoxBottomPadding}
//           />
//           {i % 2 !== 0
//             ? null
//             : shadeAlternateRows && (
//                 <rect
//                   x={viewBoxLeftPadding}
//                   y={(i + 1) * yAxisRowHeight - viewBoxBottomPadding + 1}
//                   width={xAxisWidth}
//                   height={yAxisRowHeight - 2}
//                   style={{
//                     stroke: 'none',
//                     fill: 'grey',
//                     opacity: 0.1,
//                   }}
//                 />
//               )}
//           <text
//             x={viewBoxLeftPadding - 10}
//             y={yAxisHeight - i * yAxisRowHeight - viewBoxBottomPadding + yAxisRowHeight / 2}
//             textAnchor="end"
//             alignmentBaseline="central"
//             fontFamily="Verdana"
//             fontSize="15"
//             fill={yAxisTextColor}
//           >
//             {days[days.length - i]}
//           </text>
//         </g>
//       );
//     }
//     return (
//       <g>
//         {!hideVerticalAxis && (
//           <line
//             key={'yAxis'}
//             x1={viewBoxLeftPadding}
//             y1={viewBoxBottomPadding}
//             x2={viewBoxLeftPadding}
//             y2={yAxisHeight - viewBoxBottomPadding}
//             style={{ stroke: 'grey', strokeWidth: 1 }}
//           />
//         )}
//         {lines}
//       </g>
//     );
//   };

//   let timeIndices = () => {
//     let lines = [];
//     for (let i = 0; i <= numOfAxisPointsX; i++) {
//       lines.push(
//         <g key={i}>
//           <line
//             x1={viewBoxLeftPadding + i * xAxisColWidth}
//             y1={yAxisHeight - 10}
//             x2={viewBoxLeftPadding + i * xAxisColWidth}
//             y2={yAxisHeight - viewBoxBottomPadding}
//             style={{
//               stroke: 'grey',
//               strokeWidth: 1,
//             }}
//           />
//           {!hideVerticalGuides && (
//             <line
//               x1={viewBoxLeftPadding + i * xAxisColWidth}
//               y1={viewBoxBottomPadding}
//               x2={viewBoxLeftPadding + i * xAxisColWidth}
//               y2={yAxisHeight - viewBoxBottomPadding}
//               style={{
//                 stroke: 'lightgrey',
//                 strokeWidth: 1,
//                 strokeDasharray: '2,5',
//               }}
//             />
//           )}
//           <text
//             x={viewBoxLeftPadding + i * xAxisColWidth}
//             y={yAxisHeight}
//             textAnchor="middle"
//             alignmentBaseline="central"
//             fontFamily="Verdana"
//             fontSize="10"
//             fill={xAxisTextColor}
//           >
//             {timeDriftObj.val}
//           </text>
//         </g>
//       );
//       timeDriftObj.add(1, 'h');
//     }
//     return (
//       <g>
//         {!hideHorizontalAxis && (
//           <line
//             key="xAxis"
//             x1={viewBoxLeftPadding}
//             y1={yAxisHeight - viewBoxBottomPadding}
//             x2={xAxisWidth + viewBoxLeftPadding}
//             y2={yAxisHeight - viewBoxBottomPadding}
//             style={{
//               stroke: 'grey',
//               strokeWidth: 1,
//             }}
//           />
//         )}
//         {lines}
//       </g>
//     );
//   };

//   const renderEvents = () => {
//     return events.map(event => {
//       let day = days.indexOf(event.day);
//       // console.log('startTime:', startTime)
//       let spaceBeforeStart = timeDiffInMins(timeWindowStart, event.start);
//       let lessonWidth = timeDiffInMins(event.start, event.end);
//       console.log('space:', spaceBeforeStart);
//       // let xStart =
//       return (
//         <g key={event.id}>
//           <rect
//             x={spaceBeforeStart + viewBoxLeftPadding}
//             y={(day + 1) * yAxisRowHeight - viewBoxBottomPadding + eventMargin / 2}
//             width={lessonWidth}
//             height={yAxisRowHeight - eventMargin}
//             style={{
//               stroke: eventBorderColor,
//               fill: event.color,
//               opacity: eventOpacity,
//             }}
//             onClick={() => props.onLessonClicked(event)}
//             rx={eventBorderRadius}
//             ry={eventBorderRadius}
//           />
//           <text
//             x={spaceBeforeStart + viewBoxLeftPadding + lessonWidth / 2}
//             y={(day + 1) * yAxisRowHeight - viewBoxBottomPadding + yAxisRowHeight / 2}
//             align="center"
//             textAnchor="middle"
//             dominantBaseline="central"
//             fontFamily="Verdana"
//             fontSize={eventFontSize}
//             pointerEvents="none"
//             fill={eventTextColor}
//           >
//             {event.name}
//           </text>
//         </g>
//       );
//     });
//   };

//   return (
//     <svg
//       width="100%"
//       height="100%"
//       viewBox={`0 0 ${vbWidth} ${vbHeight}`}
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       {dayIndices()}
//       {timeIndices()}
//       {renderEvents()}
//     </svg>
//   );
// };
