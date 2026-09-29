import { USER_COUNTER_TEXT } from "../consts/consts.text";

export function CountViewer({count}) {

  return (
    <>
      <h2>{USER_COUNTER_TEXT.COUNTER_VIEW}</h2>
      <br />
      <p>{count}</p>
    </>
  );
}
