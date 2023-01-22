import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Layout from "../components/layout";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage
};

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
      <div>{props.title}</div>
    </MDXProvider>
  );
}
