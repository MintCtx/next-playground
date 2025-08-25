import PlatFormItem from "./platform-item";

// const tmpList = [0];
const tmpList = [0, 1, 2, 3, 4];

const PlatFormList = () => {
  return (
    <div>
      {tmpList.map(item => (<PlatFormItem key={item} />))}
    </div>
  )
}

export default PlatFormList;