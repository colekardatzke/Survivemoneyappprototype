import { Outlet, useLocation, Link } from "react-router";
import { Home, Users, BarChart3 } from "lucide-react";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/score", icon: BarChart3, label: "Score" },
    { path: "/friends", icon: Users, label: "Friends" },
  ];

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex flex-col max-w-md mx-auto">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-lg border-t border-purple-500/20 px-2 py-3 flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? "text-purple-400 bg-purple-500/20"
                  : "text-slate-400 hover:text-purple-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
