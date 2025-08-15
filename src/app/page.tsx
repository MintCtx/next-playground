import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/applemints">Go to Applemints</Link>
        </li>
        <li>
          <Link href="/shuka">Go to Shuka</Link>
        </li>
      </ul>
    </div>
  );
}
