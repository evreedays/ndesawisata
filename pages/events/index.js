import React from "react";

const Index = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL + "/api/posts?featured=true");
  return <div>sd</div>;
};

export default Index;
