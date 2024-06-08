import { getLotteryCosmic } from "./services/lottery/lottery.server";
import Main from "./view/Lottery/Main";

export default function Home() {
  const data = getLotteryCosmic()
  return (
   <>
    <Main/>
   </>
  );
}
