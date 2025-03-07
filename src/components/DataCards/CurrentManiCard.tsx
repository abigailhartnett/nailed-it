import DataCard from './DataCard';
import SingleBarChart from '../Charts/SingleBarChart';
import Button from '../Buttons/Button';
import { FavoriteBorderRounded } from '@mui/icons-material';
import Grid from '../Layout/Grid';
import MiniManiCard from '../ContentCards/MiniManiCard';

const CurrentManiCard = ({ className }) => {
  return (
    <DataCard
      title="Current mani"
      subtitle="Applied 2 days ago"
      className={`${className}`}
    >
      <div className="h-full flex flex-col gap-2 justify-between">
        <div className="flex flex-col justify-stretch">
          <Grid gap={2} size="100">
            <MiniManiCard
              polish="Menchie the Cat"
              image="public/images/mani-placeholder.jpg"
            />
            <MiniManiCard
              polish="Everything Taco"
              image="public/images/mani-placeholder.jpg"
            />
            <MiniManiCard
              polish="Everything Taco"
              image="public/images/mani-placeholder.jpg"
            />
            <MiniManiCard
              polish="Everything Taco"
              image="public/images/mani-placeholder.jpg"
            />
          </Grid>

          <div className="flex flex-col gap-4">
            <SingleBarChart
              label="Estimated days left"
              start="Day 2"
              end="Day 7"
            />
            <div className="flex gap-2">
              <Button icon={FavoriteBorderRounded}>Likes</Button>
              <Button icon={FavoriteBorderRounded}>Comments</Button>
            </div>
          </div>
        </div>
      </div>
    </DataCard>
  );
};

export default CurrentManiCard;
