import React from "react";

const ProductIdPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  //params are promise
  const { id } = await params; //await is imp
  return <div>ProductIdPage {id}</div>;
};

export default ProductIdPage;
