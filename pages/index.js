import CounterFunction from "@/components/use-state-components/CounterUpdateFunction";
import CounterValue from "@/components/use-state-components/CounterUpdateValue";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-32 w-full h-dvh justify-center items-center">
      <CounterValue />
      <CounterFunction />
    </main>
  );
}
