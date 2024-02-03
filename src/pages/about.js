import Link from "next/link";
import Layout from "./components/layout";

export default function About() {
  return (
    <>
      <Layout pageTitle="About">
        <Link href="/">Home</Link>
      </Layout>
    </>
  );
}
