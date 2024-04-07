import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return <div>PhotoBooth Home {dictionary.followers}</div>;
}
