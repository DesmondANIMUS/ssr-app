import React from 'react';
import Link from 'next/link';

const Navbar = props => (
  <nav>
    <div>
      <Link href="/about">
        <a title="About NextJS">About NextJS Project</a>
      </Link>
      <Link href="/">
        <a title="Our API">API</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
