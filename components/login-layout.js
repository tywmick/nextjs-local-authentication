"use strict";

import React, { useState } from "react";

import Head from "next/head";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Footer from "./footer";

function LoginLayout(props) {
  return (
    <div className="wrapper">
      <Head>
        <title>
          {"Next.js local authentication" +
            (props.pageTitle && " – " + props.pageTitle)}
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-dark text-light d-flex flex-column min-vh-100">
        <h1 className="py-5 text-center h2">Next.js local authentication</h1>
        <Card className="flex-grow-0 mx-auto card-user">
          <CardHeader>
            <CardTitle tag="h5">{props.pageTitle}</CardTitle>
          </CardHeader>
          <CardBody>{props.children}</CardBody>
        </Card>
        <Footer fluid />
      </div>
    </div>
  );
}

export default LoginLayout;
