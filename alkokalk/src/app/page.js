"use client"


import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavigationBar></NavigationBar>
    </main>
  );
}
