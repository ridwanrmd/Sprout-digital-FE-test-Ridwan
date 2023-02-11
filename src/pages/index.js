import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import PokemonCard from "@/components/PokemonCard";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <PokemonCard />
    </Box>
  );
}
