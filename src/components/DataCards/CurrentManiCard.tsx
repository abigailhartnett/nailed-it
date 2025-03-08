import DataCard from './DataCard';
import SingleBarChart from '../Charts/SingleBarChart';
import Button from '../Buttons/Button';
import {
  FavoriteBorderRounded,
  ChatBubbleOutlineOutlined,
} from '@mui/icons-material';
import Grid from '../Layout/Grid';
import MiniManiCard from '../ContentCards/MiniManiCard';
import { globalPolishes } from '../../data/globalPolishes';

const CurrentManiCard = () => {
  const activePolishes = globalPolishes.map((polish) => {
    if (polish.activeMani) {
      return <MiniManiCard polish={polish.name} image={polish.image} />;
    }
  });

  return (
    <DataCard title="Current Mani" subtitle="Applied 2 days ago">
      <div className="h-full flex flex-col gap-2 justify-between">
        <Grid gap={2} minWidth={100}>
          {activePolishes}
        </Grid>
        <div className="flex flex-col justify-stretch">
          <div className="flex flex-col gap-4">
            <SingleBarChart
              label="Estimated days left"
              start="Day 2"
              end="Day 7"
              backgroundColor={'paleGreen'}
              color="greenBlue"
            />
            <div className="flex gap-2">
              <Button icon={FavoriteBorderRounded}>Likes</Button>
              <Button icon={ChatBubbleOutlineOutlined}>Comments</Button>
            </div>
          </div>
        </div>
      </div>
    </DataCard>
  );
};

export default CurrentManiCard;
