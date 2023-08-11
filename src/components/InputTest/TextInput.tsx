import { useRecoilState } from "recoil";
import { textState } from "../../recoilState/recoilState";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

export default TextInput;
