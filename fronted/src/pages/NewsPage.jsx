import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import News from "../components/News";

const NewsPage = () => {
  return (
    <>
      <Breadcrumb pagetitle="News Feeds" />
      <News />
    </>
  );
};

export default NewsPage;
