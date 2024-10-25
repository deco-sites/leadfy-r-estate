import { Head } from "$fresh/runtime.ts";

interface Props {
  /**
   * @description The content attribute for the meta tag
   */
  content?: string;
}

export default function MetaTag({ content = "tuh0zjh8d3kecv0e11z6fyqzwzvkg7" }: Props) {
  return (
    <Head>
      <meta name="facebook-domain-verification" content={content} />
    </Head>
  );
}