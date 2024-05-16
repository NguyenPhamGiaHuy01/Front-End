import { Box, Card, CardActions, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const orders =[1,1,1,1,1,1,1]
const MenuTable = () => {
  const navigate=useNavigate();
  return (
    <Box>
    <Card className="mt-1">
      <CardHeader
      action={<IconButton onClick={()=>navigate("/admin/restaurants/add-menu")} aria-label='setting'>
        <CreateIcon/>
      </IconButton>}
       title={"Menu"} sx={{ pt: 2, alignItems: "center" }}>
      </CardHeader>
      <CardActions
      />
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
          
                <TableCell align="center">image</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Avaibilty</TableCell>
                <TableCell align="center">Delete</TableCell>
   
             
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="center">{"image"}</TableCell>
                  <TableCell align="center">{"title"}</TableCell>
                  <TableCell align="center">{"price"}</TableCell>
                  <TableCell align="center">{"Test@gmail.com"}</TableCell>
                  <TableCell align="center"><IconButton><DeleteIcon/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Card>
  </Box>
  )
}

export default MenuTable
