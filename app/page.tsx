import ScrollButton from "@/components/ScrollButton";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center bg-red-500 h-screen">
        <h1 className="text-[9.5rem]">EVAN ALVAREZ</h1>
        <h1 className="text-[2rem]">
          STUDENT, SOFTWARE ENGINEER, FULL STACK DEVELOPER
        </h1>
        <ScrollButton section="about" text="this is a button" />
      </div>
      <div id="about" className="h-screen">
        test
      </div>
    </main>
  );
}
