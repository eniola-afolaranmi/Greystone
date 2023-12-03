export const revalidate = 0;
export const dynamic = "force-dynamic";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <pre>
        <main>{children}</main>
      </pre>
    </>
  );
}
