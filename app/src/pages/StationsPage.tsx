import { Box } from '@mui/material';
import * as React from 'react';
import StationCard from '../components/stationCard/StationCard';


export default function StationsPage() {
  return (
    <div>
      <StationCard deviceName={''} stationLocation={''} lastReported={''} stationType={''} status={false} ></StationCard>
    </div>
  );
}
