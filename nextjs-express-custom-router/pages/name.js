import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps({ query }) {
    const { name } = query;

    return { name };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is name page of the SSR example to test param, you accessed it{" "}
          </p>
          <p>
            Got this from param <strong>{this.props.name || 'none'}</strong>.
          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;