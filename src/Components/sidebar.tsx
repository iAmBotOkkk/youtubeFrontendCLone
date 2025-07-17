
import { Home, PlaySquare, History, Flame, Youtube } from "lucide-react";

const SidebarItem = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 
  cursor-pointer rounded-lg transition-all">
    <Icon className="w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export const Sidebar = () => {
  return (
    <div className="w-60 h-screen overflow-y-auto bg-white dark:bg-black 
    p-4 border-r border-gray-200 dark:border-gray-700 space-y-4">
      <div className="space-y-2">
        <SidebarItem icon={Home} label="Home" />
        <SidebarItem icon={Flame} label="Shorts" />
        <SidebarItem icon={PlaySquare} label="Subscriptions" />
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 pt-4 space-y-2">
        <SidebarItem icon={History} label="History" />
        <SidebarItem icon={Youtube} label="Your Videos" />
        <SidebarItem icon={Youtube} label="Watch Later" />
        <SidebarItem icon={Youtube} label="Liked Videos" />
        <SidebarItem icon={Youtube} label="Saved Playlists" />
        <SidebarItem icon={Youtube} label="Trending Videos" />
        <SidebarItem icon={Youtube} label="Music" />
        <SidebarItem icon={Youtube} label="Gaming" />
        <SidebarItem icon={Youtube} label="News" />
      </div>
    </div>
  );
};
