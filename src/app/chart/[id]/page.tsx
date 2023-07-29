import TradingViewChart from "@/components/TradingViewChart";

export default function Page({ params }: { params: { id: string } }) {
  return <TradingViewChart id={params.id} />;
}
