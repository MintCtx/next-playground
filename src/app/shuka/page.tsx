import Link from "next/link";

const ShukaPage = () => {
  return (
    <div>
      <h1>Shuka's Page!</h1>
      <Link href='/shuka/counter'>Go to Counter</Link>
    </div>
  );
};

export default ShukaPage;