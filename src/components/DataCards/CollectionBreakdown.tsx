import DataCard from './DataCard';
import Select from '../Inputs/Select';
import PieChart from '../Charts/PieChart';

const CollectionBreakdown = () => {
  return (
    <DataCard
      title="Collection Breakdown"
      color="purple"
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col justify-between">
        <Select />
        <PieChart />
        <span className="text-sm text-darkGray py-2">Total polishes: 100</span>
      </div>
    </DataCard>
  );
};

export default CollectionBreakdown;
