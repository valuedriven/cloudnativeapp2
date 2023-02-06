import { Table, TableContainer } from '@mui/material';

export default function PageContent({ children }) {
  return (
    <>
      <TableContainer>
        <Table>{children}</Table>
      </TableContainer>
    </>
  );
}
