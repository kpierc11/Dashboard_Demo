import { Box } from '@mui/material';
import * as React from 'react';
import StationCard from '../components/stationCard/StationCard';


export default function DashboardPage() {
  return (
    <div>
    <StationCard stationID={1} stationName={"mystation"}></StationCard>
    <StationCard stationID={1} stationName={"myStation1"}></StationCard>
    <StationCard stationID={1} stationName={"myStation2"}></StationCard>
    <StationCard stationID={1} stationName={"myStation3"}></StationCard>
    </div>
  );
}