import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description: "How ato create ABoutUs page in Nextjs 13.4.19 ",
};

const About = () => {
  /**
   * Uncomment below statement to throw error on purpose and observe fallback UI instead of crashed component
   * throw new Error("Checking ");
   */

  return (
    <article>
      About Hello
      <Link href="/">Home page</Link>
    </article>
  );
};

export default About;
