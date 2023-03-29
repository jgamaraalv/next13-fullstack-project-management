import GlassPane from "@/components/GlassPane";

export const metadata = {
  title: "Project Management - Dashboard",
  description: "A fullstack personal project with Nextjs 13 to study purposes",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen candy-mesh p-6">
      <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
        {children}
      </GlassPane>
    </div>
  );
}
