import React from 'react'
import AdminLayout from '../../../components/admin-components/layout';
import Table, { TableBody, TableCell, TableHeader, TableRow } from '../../../components/admin-components/table';
import './style.css';
function Won() {
  let data = [
    'Sr.No',
    'Name',
    'Fullname',
    'Username',
    'Email'
  ]
  return (
    <>
      <AdminLayout>
        <Table>
          <TableHeader>
            <TableRow>
              {
                data.map(m => (
                  <>
                    <TableCell>
                      {m}
                    </TableCell>
                  </>
                ))
              }
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                1
              </TableCell>
              <TableCell>
                Ali
              </TableCell>
              <TableCell>
                Ali Hussain
              </TableCell>
              <TableCell>
                alihussain
              </TableCell>
              <TableCell>
                ali@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                1
              </TableCell>
              <TableCell>
                Ali
              </TableCell>
              <TableCell>
                Ali Hussain
              </TableCell>
              <TableCell>
                alihussain
              </TableCell>
              <TableCell>
                ali@gmail.com
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </AdminLayout>
    </>
  )
}

export default Won