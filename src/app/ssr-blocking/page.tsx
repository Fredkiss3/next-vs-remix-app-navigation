import { wait } from "../functions";

export const dynamic = "force-dynamic";

export default async function Page() {
  await wait(2000);

  return (
    <>
      <h1>Blocking SSR</h1>
    </>
  );
}
