import { Box } from '@mui/material';
import * as React from 'react';
import StationCard from '../components/stationCard/StationCard';


export default function DashboardPage() {
  return (
    <div>
    <StationCard></StationCard>
    <StationCard></StationCard>
    <StationCard></StationCard>
    <StationCard></StationCard>
    </div>
  );
}