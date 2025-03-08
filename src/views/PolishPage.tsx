import { useParams } from 'react-router-dom';
import { globalPolishes } from '../data/globalPolishes';
import Button from '../components/Buttons/Button';
import {
  ShareOutlined,
  CheckOutlined,
  OpenInNewOutlined,
} from '@mui/icons-material';
import Grid from '../components/Layout/Grid';
import DataCard from '../components/DataCards/DataCard';
import ColorStat from '../components/ContentCards/ColorStat';
import Spacer from '../components/Layout/Spacer';
import MiniManiCard from '../components/ContentCards/MiniManiCard';

const PolishPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const polish = globalPolishes.find((p) => p.slug === slug);

  if (!polish) {
    return <span>Polish not found</span>;
  }

  return (
    // Header area
    <div className="p-4">
      <Grid gap={4}>
        <div className="flex items-center justify-center">
          <img
            src={polish.image}
            alt={polish.name}
            className="max-h-96 aspect-square rounded-xl shadow-sm shadow-darkGray"
          />
        </div>

        <div className="w-full">
          <h1 className="mb-2">{polish.name}</h1>
          <span className="text-lg text-darkGray">{polish.brand}</span>

          {/* Interactions */}
          <div className="w-full flex gap-4 space-between my-4">
            {/* note: This button should allow 3 statuses: Add to collection, Wishlist, and In Collection */}
            <Button icon={CheckOutlined} color="green">
              In Collection
            </Button>
            <Button icon={OpenInNewOutlined} iconRight>
              Shop
            </Button>
            <Button icon={ShareOutlined} />
          </div>

          {/* Polish info */}
          <div className="w-full flex flex-col bg-white gap-4 my-4 rounded-md">
            <div className="w-full flex gap-4 space-between">
              <div className="w-full flex flex-col p-2 rounded-md">
                <span className="text-darkGray">Color Family</span>
                <span className="font-medium text-lg">Black</span>
              </div>
              <div className="w-full flex flex-col p-2 rounded-md">
                <span className="text-darkGray">Finish</span>
                <span className="font-medium text-lg">Creme</span>
              </div>
            </div>

            <div className="w-full flex gap-4 space-between">
              <div className="w-full flex flex-col p-2 rounded-md">
                <span className="text-darkGray">Date Acquired</span>
                <span className="font-medium text-lg">Sep 9, 2022</span>
              </div>

              <div className="w-full flex flex-col p-2 rounded-md">
                <span className="text-darkGray">Last Used</span>
                <span className="font-medium text-lg">Feb 15, 2023</span>
              </div>
            </div>
          </div>

          {/* Similar polishes */}
          <div className="flex flex-col gap-4 pt-2">
            <span className="font-semibold">
              Similar Polishes in Your Collection
            </span>
            <div className="flex gap-2">
              <div className="bg-mediumGray h-16 w-16 rounded-full hover:cursor-pointer hover:border hover:border-darkGreen" />
              <div className="bg-mediumGray h-16 w-16 rounded-full hover:cursor-pointer hover:border hover:border-darkGreen" />
            </div>
          </div>
        </div>
      </Grid>
      {/* Toolbar */}
      {/* Big Section */}
      <div className="mt-8">
        <DataCard title="Usage Statistics">
          <Grid>
            <div>
              <span className="text-darkGray">Total Uses</span>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold">4</span>
                <span className="text-sm text-darkGray flex items-center">
                  {' '}
                  times
                </span>
              </div>
            </div>

            <div>
              <span className="text-darkGray">Average Duration</span>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold">4</span>
                <span className="text-sm text-darkGray flex items-center">
                  {' '}
                  times
                </span>
              </div>
            </div>

            <div>
              <span className="text-darkGray">Usage Frequency</span>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold">Monthly</span>
              </div>
            </div>
          </Grid>
          <Spacer />
          <div className="mt-8">
            <Grid>
              <ColorStat
                color="green"
                title="spring"
                number={1}
                subtitle="uses"
              />
              <ColorStat
                color="yellow"
                title="summer"
                number={1}
                subtitle="uses"
              />
              <ColorStat
                color="orange"
                title="fall"
                number={3}
                subtitle="uses"
              />
              <ColorStat
                color="blue"
                title="winter"
                number={12}
                subtitle="uses"
              />
            </Grid>
            <Spacer />
            <span className="font-semibold">Top Combinations</span>
            <MiniManiCard
              polish="Garden Party Taco"
              image="https://www.holotaco.com/cdn/shop/files/HT-Cottagecore-PDPs-GardenPartyTaco-Swatcher-yyulia_m.jpg?v=1738955932"
              horizontal
              tag="3 times"
              url="/polish/garden-party-taco"
            />
            <MiniManiCard
              polish="Candy Dipped"
              image="https://oliveandjune.com/cdn/shop/files/candy-dipped-tonal-bg-1_720x.png?v=1698169426"
              horizontal
              tag="2 times"
              url="/polish/candy-dipped"
            />
          </div>
        </DataCard>
      </div>
    </div>
  );
};

export default PolishPage;
