import GlassPane from "@/components/GlassPane";

export const metadata = {
  title: "Project Management - Auth",
  description: "A fullstack personal project with Nextjs 13 to study purposes",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen rainbow-mesh p-6">
      <GlassPane className="w-full h-full flex items-center justify-center">
        {children}
      </GlassPane>
    </div>
  );
}
