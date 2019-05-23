import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <br />
        <Link href="/test-param-001">
          <a>Test test-param-001</a>
        </Link>
        <br />
        <Link href="/test-param-002">
        <a>Test test-param-002</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
