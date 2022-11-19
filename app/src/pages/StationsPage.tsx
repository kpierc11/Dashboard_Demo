import { Box } from '@mui/material';
import * as React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import StationCard from '../components/stationCard/StationCard';


export default function StationsPage() {

  let stationCards = [];

  for(let i = 0; i < 100; i++) {
    stationCards.push(<StationCard key={i} deviceName={''} stationLocation={''} lastReported={''} stationType={''} status={false}></StationCard>);
  }


  return (
    <div>
    {stationCards}
    </div>
  );
}
