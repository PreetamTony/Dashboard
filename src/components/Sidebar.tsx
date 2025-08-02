import {
  Activity,
  BarChart3,
  BookOpen,
  Bot,
  Calendar,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  Download,
  Eye,
  FileText,
  FolderOpen,
  Gift,
  Globe,
  GraduationCap,
  HelpCircle,
  Home,
  Lock, Mail,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Moon,
  Package,
  Plug,
  Receipt,
  Settings,
  Shield,
  Smartphone,
  Star,
  Sun,
  Users,
  Video,
  Webhook,
  Wrench
} from 'lucide-react';
import React from 'react';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  hoveredMenu: string;
  setHoveredMenu: (menu: string) => void;
  hoveredSubmenu: string;
  setHoveredSubmenu: (submenu: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  submenu?: {
    id: string;
    label: string;
    icon: React.ComponentType<any>;
  }[];
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'ai-avatars', label: 'AI Avatars', icon: Bot },
  {
    id: 'products',
    label: 'Products',
    icon: Package,
    submenu: [
      { id: 'courses', label: 'Courses', icon: BookOpen },
      { id: 'packages', label: 'Packages', icon: Gift },
      { id: 'membership', label: 'Membership', icon: Users },
      { id: 'webinars', label: 'Webinars', icon: Video },
      { id: 'digital-products', label: 'Digital Products', icon: Download },
      { id: 'telegram-communities', label: 'Telegram Communities', icon: MessageCircle },
    ]
  },
  {
    id: 'manage',
    label: 'Manage',
    icon: Settings,
    submenu: [
      { id: 'asset-library', label: 'Asset Library', icon: FolderOpen },
      { id: 'discussions', label: 'Discussions', icon: MessageSquare },
      { id: 'question-bank', label: 'Question Bank', icon: HelpCircle },
      { id: 'quiz-reviews', label: 'Quiz Reviews', icon: Star },
      { id: 'assignments', label: 'Assignments', icon: FileText },
      { id: 'live-tests', label: 'Live Tests', icon: Clock },
      { id: 'live-classes', label: 'Live Classes', icon: Calendar },
      { id: 'ratings-reviews', label: 'Ratings & Reviews', icon: Star },
    ]
  },
  {
    id: 'users',
    label: 'Users',
    icon: Users,
    submenu: [
      { id: 'learners', label: 'Learners', icon: GraduationCap },
      { id: 'admins', label: 'Admins', icon: Shield },
      { id: 'instructors', label: 'Instructors', icon: Users },
      { id: 'affiliates', label: 'Affiliates', icon: Users },
      { id: 'enquiries', label: 'Enquiries', icon: MessageCircle },
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: BarChart3,
    submenu: [
      { id: 'overview', label: 'Overview', icon: Eye },
      { id: 'transactions', label: 'Transactions', icon: CreditCard },
      { id: 'settlements', label: 'Settlements', icon: DollarSign },
      { id: 'webinar-reports', label: 'Webinars', icon: Video },
    ]
  },
  {
    id: 'website',
    label: 'Website',
    icon: Globe,
    submenu: [
      { id: 'website-pages', label: 'Website Pages', icon: FileText },
      { id: 'website-builder', label: 'Website Builder', icon: Wrench },
    ]
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    icon: Smartphone,
    submenu: [
      { id: 'app-builder', label: 'App Builder', icon: Wrench },
      { id: 'configuration', label: 'Configuration', icon: Settings },
      { id: 'build-history', label: 'Build History', icon: Activity },
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: Megaphone,
    submenu: [
      { id: 'campaigns', label: 'Campaigns', icon: Megaphone },
      { id: 'messenger', label: 'Messenger', icon: MessageCircle },
      { id: 'blogs', label: 'Blogs', icon: FileText },
      { id: 'wallet', label: 'Wallet', icon: CreditCard },
      { id: 'promo-codes', label: 'Promo Codes', icon: Gift },
      { id: 'referrals', label: 'Referrals', icon: Users },
      { id: 'affiliate-marketing', label: 'Affiliate Marketing', icon: Users },
    ]
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: Plug,
    submenu: [
      { id: 'third-party', label: 'Third Party Integrations', icon: Plug },
      { id: 'apis', label: 'APIs', icon: Database },
      { id: 'webhooks', label: 'Webhooks', icon: Webhook },
      { id: 'logs', label: 'Logs', icon: Activity },
    ]
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    submenu: [
      { id: 'domain-management', label: 'Domain Management', icon: Globe },
      { id: 'payments', label: 'Payments', icon: CreditCard },
      { id: 'tax-invoicing', label: 'Tax & Invoicing', icon: Receipt },
      { id: 'security', label: 'Security', icon: Lock },
      { id: 'communications', label: 'Communications', icon: Mail },
      { id: 'custom-fields', label: 'Custom Fields', icon: Settings }
    ]
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeMenu,
  setActiveMenu,
  hoveredMenu,
  setHoveredMenu,
  hoveredSubmenu,
  setHoveredSubmenu,
  darkMode,
  setDarkMode
}) => {
  return (
    <div className={`fixed left-0 top-0 h-full w-16 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col items-center py-4 z-50`}>
      {/* Brand Logo */}
      <div className="mb-6">
        <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm"><img src="https://d502jbuhuh9wk.cloudfront.net/t/static/images/defaultOrg_83bee28077f95b04bfc6.png" alt='logo'></img></span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col space-y-1">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeMenu === item.id;
          const isHovered = hoveredMenu === item.id;

          return (
            <div key={item.id} className="relative">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-blue-600 shadow-md'
                    : isHovered
                    ? `${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-sm`
                    : `${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`
                }`}
                onMouseEnter={() => setHoveredMenu(item.id)}
                onMouseLeave={() => setHoveredMenu('')}
                onClick={() => {
                  if (!item.submenu) {
                    setActiveMenu(item.id);
                  }
                }}
              >
                <IconComponent
                  size={16}
                  className={`transition-colors duration-200 ${
                    isActive ? 'text-white' : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                />

                {/* Tooltip */}
                <div className={`absolute left-12 px-2 py-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'} rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg`}>
                  {item.label}
                  <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-1.5 h-1.5 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} rotate-45`}></div>
                </div>
              </div>

              {/* Submenu Panel */}
              {item.submenu && isHovered && (
                <div
                  className={`absolute left-12 top-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg shadow-xl z-50 w-56 transition-all duration-200`}
                  onMouseEnter={() => setHoveredMenu(item.id)}
                  onMouseLeave={() => {
                    setHoveredMenu('');
                    setHoveredSubmenu('');
                  }}
                >
                  <div className={`px-4 py-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`font-medium text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</h3>
                  </div>
                  <div className="py-1">
                    {item.submenu.map((subItem) => {
                      const SubIconComponent = subItem.icon;
                      const isSubHovered = hoveredSubmenu === subItem.id;

                      return (
                        <div
                          key={subItem.id}
                          className={`px-4 py-2 flex items-center space-x-3 cursor-pointer transition-all duration-150 ${
                            isSubHovered ? `${darkMode ? 'bg-gray-700' : 'bg-gray-50'}` : ''
                          }`}
                          onMouseEnter={() => setHoveredSubmenu(subItem.id)}
                          onMouseLeave={() => setHoveredSubmenu('')}
                          onClick={() => setActiveMenu(subItem.id)}
                        >
                          <SubIconComponent size={16} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                          <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{subItem.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  {/* Arrow pointer */}
                  <div className={`absolute left-0 top-4 transform -translate-x-1 w-1.5 h-1.5 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} rotate-45`}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dark Mode Toggle */}
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <Sun size={16} className="text-yellow-500" />
        ) : (
          <Moon size={16} className="text-gray-600" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;