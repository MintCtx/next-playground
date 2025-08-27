import PlatformItem from '../platform-item/platform-item';

// const tmpList = [0];
const tmpList = [0, 1, 2, 3, 4];

const PlatformList = () => {
  return (
    <div>
      {tmpList.map((item) => (
        <PlatformItem key={item} />
      ))}
    </div>
  );
};

export default PlatformList;
