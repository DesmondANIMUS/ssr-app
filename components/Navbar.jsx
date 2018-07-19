import React from 'react';
import Link from 'next/link';

const Navbar = props => (
  <nav>
    <div>
      <Link href="/">
        <a title="Home Page">Home</a>
      </Link>
      <Link href="/about">
        <a title="About NextJS">About NextJS Project</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;
