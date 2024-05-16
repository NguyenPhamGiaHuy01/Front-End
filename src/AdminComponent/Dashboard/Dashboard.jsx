import { Grid } from '@mui/material'
import React from 'react'
import DashboardTable from './DashboardTable'
import DashboardAddMnenuTable from './DashboardAddMnenuTable'

const Dashboard = () => {
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7}>
          <DashboardTable />
        </Grid>

        <Grid item xs={12} lg={5}>
          <DashboardAddMnenuTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
