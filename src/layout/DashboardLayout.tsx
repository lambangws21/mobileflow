export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-50 min-h-screen relative">
      {children}
    </div>
  );
}
