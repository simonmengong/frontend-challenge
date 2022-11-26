import { Theme, Table } from '@mui/material';
import { makeStyles} from '@mui/styles';
import { ReactElement, useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from '@customizations/TableCustomization';
import dummyData from '../../../dummyData.json';


const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  }
}));

export const getMonthName = (index: number): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[index - 1];
};


export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();
  const [rewards, setRewardsValue] = useState<{ month: string; year: number, co2_saved: number, reward: number}[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rewardHistory = dummyData.HISTORY_DATA;

      const rewards = rewardHistory.map((reward) => {
        return {
          month: `${getMonthName(reward.month)}`,
          year: reward.year,
          co2_saved: reward.co2_saved,
          reward: reward.reward
        };
      });
      setRewardsValue(rewards);
    }

    fetchData();
  }, []);

  return (
    <section>
      <h1 className={classes.header}>User History</h1>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Month</StyledTableCell>
                <StyledTableCell align="right">Year</StyledTableCell>
                <StyledTableCell align="right">CO2 Saved&nbsp;(kg)</StyledTableCell>
                <StyledTableCell align="right">Reward&nbsp;(P)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rewards.map((row) => (
                <StyledTableRow key={row.month}>
                  <StyledTableCell component="th" scope="row">
                    {row.month}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.year}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.co2_saved}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.reward}
                  </StyledTableCell>
                </StyledTableRow>
              ) )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
    
    );
};