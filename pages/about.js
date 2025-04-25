import { styled } from "@mui/material";
import { Home } from "@mui/icons-material";
import React from "react";
import { Link } from "@mui/material";
import AppAppBar from "@/blog/components/AppAppBar";

export default function HomePage() {
  return (
    <>
      <AppAppBar />
      <h1>Hi I&apos;m Jahzy</h1>
      <h2>A story of discovery, invention, and building</h2>

      <p>
        I&apos;m Jahzy, a scientist by training, a developer by circumstance,
        and a measurer of the world.
      </p>

      <Link underline="none">
        <Home sx={{ position: "fixed", bottom: 0, right: 0 }} />
      </Link>
    </>
  );
}
