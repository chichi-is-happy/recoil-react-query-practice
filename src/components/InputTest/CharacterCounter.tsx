import { useRecoilValue } from "recoil";
import { charCounterState } from "../../recoilState/recoilState";

const CharacterCounter = () => {
  const count = useRecoilValue(charCounterState);
  return <>Character Count: {count} </>;
};

export default CharacterCounter;
