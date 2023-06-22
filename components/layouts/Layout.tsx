import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: "string";
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ title = "Jira Beta", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title> {title} </title>
      </Head>

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
