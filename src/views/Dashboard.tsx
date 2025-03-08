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
import UseNextCard from '../components/DataCards/UseNextCard';

const Dashboard = () => {
  return (
    <div className="p-4">
      {/* Note: there's a better way to do responsive grids—fix it */}
      <Grid minWidth={280}>
        <CurrentManiCard />
        <CollectionUsageCard />
        <CollectionBreakdown />
      </Grid>

      <div className="mt-4">
        <DataCard
          title="Mani Journal"
          color="pinkPurple"
          button={<Button fullWidth>See journal</Button>}
        >
          <Grid gap={0}>
            <ManiCard
              imageSrc="../../public/images/mani-placeholder.jpg"
              polish="Menchie the Cat"
              date="February 28"
              comment="Cannot believe I was able to pull off these flowers."
              href={'/polish/menchie-the-cat'}
            />
            <ManiCard
              imageSrc="https://www.holotaco.com/cdn/shop/products/HT-BDay-PDPs_0008_IMG_3150.jpg?v=1634092073"
              polish="Existential Crisis"
              date="February 16"
              comment="In LOVE with this color because it reminds me of my childhood which was a long long time ago"
              href={'/polish/existential-crisis'}
            />
            <ManiCard
              imageSrc="https://www.mooncat.com/cdn/shop/files/mooncat_pdp_BAROQUEN_HALLOFMIRRORS_3_labeled.jpg?v=1738949162&width=1100"
              polish="Hall of Mirrors"
              date="February 8"
              comment="Sweet and simple. :)"
              href={'/polish/hall-of-mirrors'}
            />
            <ManiCard
              imageSrc="https://www.mooncat.com/cdn/shop/products/MC_Fromtheashes2.0_Crop.jpg?v=1677102608&width=1100"
              polish="From the Ashes"
              date="January 30"
              comment="Not my normal vibe, but I'm diggin' it!"
              href={'/polish/from-the-ashes'}
            />
          </Grid>
        </DataCard>
      </div>
    </div>
  );
};

export default Dashboard;
