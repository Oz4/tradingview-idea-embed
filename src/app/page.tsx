export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1
        className="text-5xl text-indigo-400"
        style={{
          textTransform: "uppercase",
        }}
      >
        Embed a trading view chart
      </h1>
      <p
        className="text-2xl text-gray-400 mt-4"
        style={{
          fontFamily: "monospace",
        }}
      >
        https://WEBSITE-URL/chart/[id]
      </p>
    </main>
  );
}
