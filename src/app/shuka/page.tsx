import Link from 'next/link';

const ShukaPage = () => {
  return (
    <div>
      <h1>Shuka&apos;s Page!</h1>
      <ul>
        <li>
          <Link href="/shuka/counter">Go to Counter</Link>
        </li>
        <li>
          <Link href="/shuka/destiny2-playtime">Go to Destiny2 PlayTime</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShukaPage;
