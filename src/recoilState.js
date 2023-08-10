import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", // 유니크한 ID
  default: "", // 기본 값
});

export const charCounterState = selector({
  key: "charCountState", // 유니크한 ID
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
