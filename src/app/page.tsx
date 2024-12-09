import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1>Collaborative Document Editing Platform</h1>
        <p>
          Click
          <Link href="/documents/123">
            <span className="text-blue-500 underline block"> here </span>
          </Link>
          to go to the document id
        </p>
      </div>
    </div>
  );
}
