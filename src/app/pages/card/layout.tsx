export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <pre>
        <main>{children}</main>
      </pre>
    </>
  );
}
