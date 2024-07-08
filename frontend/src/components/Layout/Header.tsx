import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
