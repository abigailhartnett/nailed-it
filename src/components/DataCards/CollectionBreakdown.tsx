import DataCard from './DataCard';
import Select from '../Inputs/Select';
import PieChart from '../Charts/PieChart';

const CollectionBreakdown = () => {
  return (
    <DataCard title="Collection Breakdown" color="purple">
      <div className="flex flex-col justify-between">
        <div className="flex justify-end text-sm">
          <Select />
        </div>
        <div className="flex flex-col items-center gap-2 my-4">
          <PieChart />
        </div>
      </div>
    </DataCard>
  );
};

export default CollectionBreakdown;
