import DataCard from './DataCard';
import SingleBarChart from '../Charts/SingleBarChart';
import { globalPolishes } from '../../data/globalPolishes';
import Grid from '../Layout/Grid';

import { ArrowUpwardOutlined } from '@mui/icons-material';

const CollectionUsageBreakdown = () => {
  const totalPolishes = globalPolishes.length;
  const usedPolishes = globalPolishes.filter((polish) => polish.used).length;
  const percentUsed = Math.floor((usedPolishes / totalPolishes) * 100);

  return (
    <DataCard title="Collection Usage" color="purple">
      <div className="h-full flex flex-col justify-between">
        <Grid minWidth={150} gap={1.5}>
          {/* Collection used */}
          <div>
            <span className="font-semibold">Collection used</span>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-2xl font-bold">{percentUsed}%</span>
              <span className="text-sm text-brightGreen flex items-center">
                <ArrowUpwardOutlined fontSize="small" /> 8% up from last month
              </span>
            </div>
          </div>

          {/* Manicures this month */}
          <div>
            <span className="font-semibold">Manicures this month</span>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-2xl font-bold">4</span>
              <span className="text-sm text-brightGreen flex items-center">
                <ArrowUpwardOutlined fontSize="small" /> 25% up from last month
              </span>
            </div>
          </div>

          {/* Most used color */}
          <div>
            <span className="font-semibold">Most used color</span>
            <div className="flex items-center gap-4 mt-1">
              <div className="bg-pink h-10 w-10 rounded-full"></div>
              <span className="font-medium">Pink</span>
            </div>
          </div>

          {/* Avg manicure duration */}
          <div>
            <span className="font-semibold">Avg. manicure duration</span>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-2xl font-bold">5</span>
              <span className="font-medium">days</span>
            </div>
          </div>
        </Grid>
        <SingleBarChart
          start={<a href="/">{usedPolishes} used</a>}
          end={<a href="/">{totalPolishes} total</a>}
        />
      </div>
    </DataCard>
  );
};

export default CollectionUsageBreakdown;
