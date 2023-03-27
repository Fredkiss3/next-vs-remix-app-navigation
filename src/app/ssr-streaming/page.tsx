import { Suspense } from "react";
import { wait } from "../functions";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <>
      <h1>Streaming SSR</h1>
      <Suspense fallback={<>streaming...</>}>
        {/* @ts-expect-error async component */}
        <StreamedData />
      </Suspense>
    </>
  );
}

async function StreamedData() {
  await wait(2000);
  return (
    <div
      style={{
        color: "blue",
      }}
    >
      Streamed result
    </div>
  );
}
