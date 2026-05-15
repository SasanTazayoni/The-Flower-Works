export default function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="page__header">
      <h1>{children}</h1>
    </header>
  );
}
