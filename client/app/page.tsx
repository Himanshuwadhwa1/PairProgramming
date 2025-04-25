import Container from "@/components/container";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyCode",
  description: "Your Online compiler with real time collaboration",
};



export default function Home() {
  return (
    <>
    <Navbar />
    <Container/>
    </>
  );
}
