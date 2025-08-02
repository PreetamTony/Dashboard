import React from 'react';
import { Bell, Search, UserPlus, Users, DollarSign, Bot, TrendingUp } from 'lucide-react';

interface DashboardProps {
  darkMode: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ darkMode }) => {
  const stats = [
    {
      title: 'Sign ups',
      value: '0',
      icon: UserPlus,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      title: 'Paid users',
      value: '0',
      icon: Users,
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Total revenue',
      value: '₹0',
      icon: DollarSign,
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600'
    }
  ];

  const quickActions = [
    { title: 'Create Course', bg: 'bg-blue-500' },
    { title: 'Add User', bg: 'bg-green-500' },
    { title: 'View Analytics', bg: 'bg-purple-500' },
    { title: 'Settings', bg: 'bg-orange-500' }
  ];

  const recentActivities = [
    'New user registration: preetam',
    'Course "React Basics" was published',
    'Payment received from premium user',
    'System backup completed successfully',
    'New instructor application submitted'
  ];

  return (
    <div className={`flex-1 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Top Header */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-8 py-6`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Home</h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Welcome back, User!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer transition-colors duration-200`}>
              <Search size={20} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </div>
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer transition-colors duration-200 relative`}>
              <Bell size={20} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.title}</p>
                    <p className={`text-3xl font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Reports Button */}
        <div className="mb-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <TrendingUp size={20} className="inline mr-2" />
            View Reports
          </button>
        </div>

        {/* Graphy Assist Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 mb-8 border shadow-sm`}>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600">
              <Bot size={24} className="text-white" />
            </div>
            <div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                — % of your total revenue comes via Graphy Assist.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200">
                Learn more →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{activity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-6 border shadow-sm`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.bg} hover:opacity-90 text-white p-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  {action.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
