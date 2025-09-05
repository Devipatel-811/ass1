export const courses = [
  {
    id: '1',
    title: 'Advanced React Development',
    instructor: 'Sarah Johnson',
    price: 89.99,
    rating: 4.8,
    students: 12543,
    duration: '12 hours',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
    description: 'Master advanced React concepts including hooks, context, and performance optimization.',
    videos: [
      {
        id: 'v1',
        title: 'Introduction to Advanced React',
        duration: '15:30',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      },
      {
        id: 'v2',
        title: 'Custom Hooks Deep Dive',
        duration: '22:45',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      },
      {
        id: 'v3',
        title: 'Performance Optimization',
        duration: '18:20',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      }
    ]
  },
  {
    id: '2',
    title: 'Full Stack JavaScript',
    instructor: 'Michael Chen',
    price: 129.99,
    rating: 4.9,
    students: 8932,
    duration: '20 hours',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
    description: 'Complete full-stack development with Node.js, Express, MongoDB, and React.',
    videos: [
      {
        id: 'v4',
        title: 'Setting Up the Development Environment',
        duration: '12:15',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      },
      {
        id: 'v5',
        title: 'Building REST APIs',
        duration: '28:30',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      }
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emma Rodriguez',
    price: 79.99,
    rating: 4.7,
    students: 15678,
    duration: '16 hours',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop',
    description: 'Learn the principles of great user interface and user experience design.',
    videos: [
      {
        id: 'v6',
        title: 'Design Principles Overview',
        duration: '20:45',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop'
      }
    ]
  }
];

export const userProgress = [
  { courseId: '1', progress: 75, lastAccessed: '2024-01-15' },
  { courseId: '2', progress: 45, lastAccessed: '2024-01-14' },
  { courseId: '3', progress: 90, lastAccessed: '2024-01-13' }
];

export const analyticsData = {
  weeklyProgress: [10, 25, 45, 60, 75, 85, 90],
  monthlyStats: {
    coursesCompleted: 3,
    hoursLearned: 24,
    certificatesEarned: 2,
    streakDays: 12
  },
  categoryBreakdown: [
    { category: 'Web Development', hours: 15 },
    { category: 'Design', hours: 8 },
    { category: 'Data Science', hours: 5 },
    { category: 'Mobile Development', hours: 3 }
  ]
};