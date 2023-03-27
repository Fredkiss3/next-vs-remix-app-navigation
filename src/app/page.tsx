export const revalidate = 86400;

export default function Home() {
  return (
    <h1>
      A Next Static page built at&nbsp;
      {new Intl.DateTimeFormat("en", {
        second: "2-digit",
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(new Date())}
    </h1>
  );
}
