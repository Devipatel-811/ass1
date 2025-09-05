import React from 'react';
import { BookOpen, Clock, Award, TrendingUp, Calendar, Star, Users, PlayCircle } from 'lucide-react';
import ProgressChart from './ProgressChart';
import { analyticsData, courses, userProgress } from '../../data/mockData';

const Dashboard: React.FC = () => {
  // Prepare chart data
  const weeklyProgressData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Learning Progress',
        data: analyticsData.weeklyProgress,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        borderWidth: 3,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const categoryData = {
    labels: analyticsData.categoryBreakdown.map(item => item.category),
    datasets: [
      {
        data: analyticsData.categoryBreakdown.map(item => item.hours),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)'
        ],
        borderWidth: 2
      }
    ]
  };

  const coursesProgressData = {
    labels: courses.slice(0, 3).map(course => course.title.substring(0, 20) + '...'),
    datasets: [
      {
        label: 'Progress (%)',
        data: userProgress.map(progress => progress.progress),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(147, 51, 234, 0.8)',
          'rgba(16, 185, 129, 0.8)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(16, 185, 129)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }
    ]
  };

  const stats = [
    {
      icon: BookOpen,
      label: 'Courses Completed',
      value: analyticsData.monthlyStats.coursesCompleted,
      change: '+2 this month',
      color: 'blue'
    },
    {
      icon: Clock,
      label: 'Hours Learned',
      value: analyticsData.monthlyStats.hoursLearned,
      change: '+8 this week',
      color: 'purple'
    },
    {
      icon: Award,
      label: 'Certificates',
      value: analyticsData.monthlyStats.certificatesEarned,
      change: '+1 this month',
      color: 'green'
    },
    {
      icon: TrendingUp,
      label: 'Learning Streak',
      value: `${analyticsData.monthlyStats.streakDays} days`,
      change: 'Keep it up!',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Track your learning progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg ${getColorClasses(stat.color)}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium opacity-80">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs mt-1 opacity-70">{stat.change}</p>
                </div>
                <stat.icon className="h-8 w-8 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ProgressChart
            type="line"
            data={weeklyProgressData}
            title="Weekly Learning Progress"
            height={350}
          />
          <ProgressChart
            type="doughnut"
            data={categoryData}
            title="Learning by Category (Hours)"
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Progress Chart */}
          <div className="lg:col-span-2">
            <ProgressChart
              type="bar"
              data={coursesProgressData}
              title="Current Courses Progress"
              height={400}
            />
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {userProgress.map((progress, index) => {
                const course = courses.find(c => c.id === progress.courseId);
                if (!course) return null;
                
                return (
                  <div key={progress.courseId} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0">
                      <PlayCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                        {course.title}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {progress.progress}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Last accessed: {new Date(progress.lastAccessed).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-200 flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  View Certificates
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors duration-200 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Join Study Group
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;