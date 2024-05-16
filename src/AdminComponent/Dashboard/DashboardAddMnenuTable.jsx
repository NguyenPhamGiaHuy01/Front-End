import React from 'react'
import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';

const orders =[1,1,1]
const DashboardAddMnenuTable = () => {
  return (
    <Box>
    <Card className="mt-1">
      <CardHeader
      action={<IconButton aria-label='setting'>
        <CreateIcon/>
      </IconButton>}
       title={"Recently Added Menu"} sx={{ pt: 2, alignItems: "center" }}>
      </CardHeader>
      <CardActions
      />
      <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
          
                <TableCell align="left">image</TableCell>
                <TableCell align="left">title</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Availiable</TableCell>
               
   
             
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
              
                  <TableCell align="left">{"image"}</TableCell>
                  <TableCell align="left">{"title"}</TableCell>
                  <TableCell align="left">{"price"}</TableCell>
                  <TableCell align="left">{"availiable"}</TableCell>
               </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Card>
  </Box>
  )
}

export default DashboardAddMnenuTable
