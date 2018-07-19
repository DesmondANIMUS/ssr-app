import Link from 'next/link';

const Index = () => (
  <section>
    <h1>Hello World from NextJS</h1>
    <Link href="/about">
      <a title="About NextJS">About NextJS Projects</a>
    </Link>
  </section>
);

export default Index;
