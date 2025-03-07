import DataCard from '../components/DataCards/DataCard';
import CurrentManiDataCard from '../components/DataCards/CurrentManiCard';
import ManiCard from '../components/ContentCards/ManiCard';
import Button from '../components/Buttons/Button';
import { FavoriteBorderRounded } from '@mui/icons-material';
import Select from '../components/Inputs/Select';
import PieChart from '../components/Charts/PieChart';
import CurrentManiCard from '../components/DataCards/CurrentManiCard';
import CollectionBreakdown from '../components/DataCards/CollectionBreakdown';
import Grid from '../components/Layout/Grid';
import CollectionUsageCard from '../components/DataCards/CollectionUsageCard';

const Dashboard = () => {
  return (
    <div className="p-4">
      {/* Note: there's a better way to do responsive grids—fix it */}
      <Grid minWidth={280}>
        <CurrentManiCard />
        <CollectionBreakdown />
        <CollectionUsageCard />
        <DataCard title="Use next" color="pink">
          <span>Color</span>
          <span>Color</span>
          <span>Color</span>
          <span>Color</span>
        </DataCard>
      </Grid>
      {/* <div className="p-4">
        <DataCard
          title="Mani Journal"
          color="pinkPurple"
          button={<Button fullWidth>See journal</Button>}
        >
          <div className="flex gap-2 justify-between">
            <ManiCard
              imageSrc="../../public/images/mani-placeholder.jpg"
              polish="Menchie the Cat"
              date="Apr 2"
              comment="In LOVE with this color."
            />
            <ManiCard
              imageSrc="../../public/images/mani-placeholder.jpg"
              polish="Menchie the Cat"
              date="Apr 2"
              comment="In LOVE with this color because it reminds me of my childhood which was a long long time ago"
            />
            <ManiCard
              imageSrc="../../public/images/mani-placeholder.jpg"
              polish="Menchie the Cat"
              date="Apr 2"
              comment="In LOVE with this color."
            />
            <ManiCard
              imageSrc="../../public/images/mani-placeholder.jpg"
              polish="Menchie the Cat"
              date="Apr 2"
              comment="In LOVE with this color."
            />
          </div>
        </DataCard>
      </div> */}
    </div>
  );
};

export default Dashboard;
