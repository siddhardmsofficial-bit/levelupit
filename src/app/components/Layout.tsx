import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Zap, TrendingUp, MessageCircle, Users } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/app" },
    { icon: Zap, label: "Lock In", path: "/app/lockin" },
    { icon: TrendingUp, label: "Progress", path: "/app/progress" },
    { icon: MessageCircle, label: "Coach", path: "/app/coach" },
    { icon: Users, label: "Community", path: "/app/community" },
  ];

  const isActive = (path: string) => {
    if (path === "/app") {
      return location.pathname === "/app";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen w-full max-w-[430px] mx-auto bg-[#0A0A0F] flex flex-col relative overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-20 hide-scrollbar">
        <Outlet />
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto h-20 bg-[#0F0F12]/80 backdrop-blur-xl border-t border-[#00F0FF]/20">
        <div className="flex items-center justify-around h-full px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  active ? "scale-110" : ""
                }`}
              >
                <div
                  className={`p-2 rounded-xl transition-all ${
                    active
                      ? "bg-[#00F0FF]/20 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                      : ""
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      active
                        ? "text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                        : "text-white/50"
                    }`}
                  />
                </div>
                <span
                  className={`text-xs ${
                    active
                      ? "text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                      : "text-white/40"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
