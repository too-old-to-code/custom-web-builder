import React from 'react';
import { timeDiffInMins } from '../helpers';
import timeDrift from 'time-drift';

const convertSecondsToMinutes = minutes => minutes / 60;

export const MobileSchedule = props => {
  const { dataset = {}, options = {} } = props;

  const {
    viewBoxLeftPadding = 75,
    viewBoxBottomPadding = 50,
    viewBoxRightPadding = 10,
    viewBoxTopPadding = 30,
    // yAxisRowHeight = 40,
    hideHorizontalAxis = false,
    hideVerticalAxis = false,
    shadeAlternateRows = true,
    hideVerticalGuides = false,
    eventBorderRadius = 0,
    eventOpacity = 0.4,
    eventBorderColor = 'none',
    eventMargin = 2,
    eventFontSize = 10,
    eventTextColor = 'black',
    yAxisTextColor = 'black',
    xAxisTextColor = 'black',
    timeWindowOverride = '',
  } = options;

  let { events, days = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'] } = dataset;
  console.log(days);
  days = days.map(day => day.substring(0, 2));
  console.log(days);
  if (timeWindowOverride) {
    var [timeWindowStart, timeWindowEnd] = timeWindowOverride.split('-');
  } else {
    // find the lowest and highest times so that we can set the timewindow
    // of the schedule to cover an appropriate range
    var [timeWindowStart, timeWindowEnd] = events.reduce(
      (acc, event) => {
        if (event.start < acc[0]) {
          acc[0] = event.start;
        }
        if (event.end > acc[1]) {
          acc[1] = event.end;
        }
        return acc;
      },
      ['24:00', '00:00']
    );
  }

  const timeDriftObj = timeDrift(timeWindowStart);

  const numOfAxisPointsX = days.length + 1;
  const xAxisColWidth = 50;
  const xAxisWidth = numOfAxisPointsX * xAxisColWidth;
  const xAxisWidthMinus1 = xAxisWidth - xAxisColWidth;

  const yAxisHeight = timeDiffInMins(timeWindowStart, timeWindowEnd) + viewBoxBottomPadding;
  const numOfAxisPointsY = convertSecondsToMinutes(yAxisHeight);
  const yAxisRowHeight = yAxisHeight / numOfAxisPointsY;
  console.log('yA:', yAxisHeight);
  console.log('xaxis:', yAxisRowHeight);

  let vbWidth = xAxisWidth + viewBoxLeftPadding - viewBoxRightPadding;
  let vbHeight = yAxisHeight + viewBoxBottomPadding;

  let dayIndices = () => {
    let lines = [];
    for (let i = 0; i < numOfAxisPointsX; i++) {
      lines.push(
        <g key={days[days.length - i] || i}>
          <line
            x1={viewBoxLeftPadding + i * xAxisColWidth}
            y1={viewBoxTopPadding}
            x2={viewBoxLeftPadding + i * xAxisColWidth}
            y2={yAxisHeight}
            // style={{stroke:'grey', strokeWidth:1}}
          />
          {i % 2 !== 0
            ? null
            : shadeAlternateRows && (
                <rect
                  x={viewBoxLeftPadding + i * xAxisColWidth}
                  y={viewBoxTopPadding}
                  width={xAxisColWidth}
                  height={yAxisHeight - viewBoxBottomPadding}
                  style={{
                    stroke: 'none',
                    fill: 'grey',
                    opacity: 0.1,
                  }}
                />
              )}
          <text
            x={i * xAxisColWidth + viewBoxLeftPadding + xAxisColWidth / 2}
            // x={viewBoxLeftPadding + (i * xAxisColWidth)}
            y={17}
            textAnchor="middle"
            // alignmentBaseline="start"
            fontFamily="Verdana"
            fontSize="20"
            fill={xAxisTextColor}
          >
            {days[i]}
          </text>
        </g>
      );
    }
    console.log('lines:', lines);
    return lines;
  };

  let timeIndices = () => {
    let lines = [];
    for (let i = 0; i <= numOfAxisPointsY; i++) {
      lines.push(
        <g key={i}>
          <line
            x1={viewBoxLeftPadding}
            y1={viewBoxTopPadding + i * yAxisRowHeight}
            x2={xAxisWidthMinus1 + viewBoxLeftPadding}
            y2={viewBoxTopPadding + i * yAxisRowHeight}
            style={{
              stroke: 'grey',
              strokeWidth: 1,
              strokeDasharray: '2,5',
            }}
          />
          <text
            x={viewBoxLeftPadding - 15}
            y={viewBoxTopPadding + i * yAxisRowHeight}
            textAnchor="end"
            alignmentBaseline="middle"
            fontFamily="Verdana"
            fontSize="15"
            fill={yAxisTextColor}
          >
            {timeDriftObj.val}
          </text>
        </g>
      );
      timeDriftObj.add(1, 'h');
    }
    return lines;
  };

  const renderEvents = () => {
    return events.map(event => {
      console.log(event.day);
      let day = days.indexOf(event.day.substr(0, 2));
      // console.log('startTime:', startTime)
      let spaceBeforeStart = timeDiffInMins(timeWindowStart, event.start);
      let lessonHeight = timeDiffInMins(event.start, event.end);
      // console.log('sp:', spaceBeforeStart);
      // let xStart =
      return (
        <g key={event.id}>
          <rect
            x={day * xAxisColWidth + viewBoxLeftPadding + eventMargin / 2}
            // x={spaceBeforeStart + viewBoxLeftPadding}
            y={spaceBeforeStart + viewBoxTopPadding}
            // y={(day + 1) * yAxisRowHeight - viewBoxBottomPadding + 1}
            width={xAxisColWidth - eventMargin}
            // height={yAxisRowHeight - 2}
            height={lessonHeight}
            style={{
              stroke: eventBorderColor,
              fill: event.color,
              opacity: eventOpacity,
            }}
            onClick={() => props.onLessonClicked(event)}
            rx={eventBorderRadius}
            ry={eventBorderRadius}
          />
          <text
            transform={`translate(${day * xAxisColWidth + viewBoxLeftPadding} ${spaceBeforeStart +
              viewBoxTopPadding})`}
            // x={spaceBeforeStart + viewBoxLeftPadding + (lessonWidth / 2)}
            // x={day * xAxisColWidth + viewBoxLeftPadding + (xAxisColWidth/2)}
            // y={spaceBeforeStart + viewBoxTopPadding + (lessonHeight / 2)}
            // y={(day + 1) * yAxisRowHeight - viewBoxBottomPadding + (yAxisRowHeight /2)}
            // align="top"
            textAnchor="start"
            // dominantBaseline="central"
            alignmentBaseline="middle"
            pointerEvents="none"
            fontFamily="Verdana"
            fontSize={eventFontSize}
            fill={eventTextColor}
            // textOrientation="upright"
            // writingMode="tb"
            // style={{
            //   writingMode: 'tb',
            //   glyphOrientationVertical: 90,
            //   textOrientation: 'upright',
            //   lengthAdjust: 'spacing',
            // }}
          >
            {event.name.split(' ').map((word, i, arr) => (
              <tspan
                x={xAxisColWidth / 2}
                // y={yAxisRowHeight/i}
                // x={day * xAxisColWidth + viewBoxLeftPadding + (xAxisColWidth/2)}
                // dx="1em"
                dy="1.2em"
                textAnchor="middle"
                dominantBaseline="hanging"
              >
                {word}
              </tspan>
            ))}
          </text>
        </g>
      );
    });
  };

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {dayIndices()}
      {timeIndices()}
      {renderEvents()}
    </svg>
  );
};
