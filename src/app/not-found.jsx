import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page you are looking for does non exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
