import React from "react";
import * as LucideIcons from "lucide-react";
import type { UserRole } from "../../types/user.types";

interface HeaderProps {
  role: UserRole;
  title?: string;
  dateText?: string;
  notificationsCount?: number;
  user?: {
    username: string;
    email: string;
    avatarUrl?: string | null;
    online?: boolean;
  };

  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title = "Dashboard",
  dateText = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
  notificationsCount = 0,
  user = {
    username: "Admin",
    email: "admin@sukamaju.go.id",
    avatarUrl: null,
    online: true,
  },
  onMenuClick,
}) => {
  const getInitials = (name: string) => {
    return name?.charAt(0).toUpperCase() || "";
  };

  const handleMenuClick = () => {
    onMenuClick();
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/20 glass-effect px-4 md:px-8">
      <div className="flex items-center">
        <button
          id="sidebar-open-btn"
          className="rounded-md p-2 hover:bg-white/20 text-white lg:hidden mr-4"
          aria-label="Buka menu"
          onClick={handleMenuClick}
        >
          <LucideIcons.Menu className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-white">{title}</h1>
          <p id="header-date" className="text-sm text-white/70">
            {dateText} • Selamat siang!
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-6">
        {/* <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Cari data..."
            className="w-64 pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <LucideIcons.Search className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
        </div>

        <button
          className="relative rounded-full p-2 text-white/80 hover:bg-white/20 hover:text-white"
          aria-label="Notifikasi"
        >
          <LucideIcons.Bell className="h-6 w-6" />
          {notificationsCount > 0 && (
            <div className="notification-badge absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border border-white" />
          )}
        </button> */}

        <div className="flex items-center space-x-3">
          <div className="hidden text-sm text-right sm:block">
            <p className="font-semibold text-white">{user.username?.toUpperCase() || ""}</p>
            <p className="text-white/70 text-xs">{user.email}</p>
          </div>
          <div className="relative">
            {user.avatarUrl ? (
              <img
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-white/30"
                src={user.avatarUrl}
                alt="Avatar"
              />
            ) : (
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-500 text-white font-bold border-2 border-white/30">
                {getInitials(user.username)}
              </div>
            )}
            {user.online && (
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border border-white" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
