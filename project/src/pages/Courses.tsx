import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Clock, Play, ShoppingCart } from 'lucide-react';
import { courses } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import MediaGallery from '../components/Media/MediaGallery';

const Courses: React.FC = () => {
  const { courseId } = useParams();
  const { addItem } = useCart();
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(
    courseId ? courses.find(c => c.id === courseId) || null : null
  );
  
  const handleAddToCart = (course: typeof courses[0]) => {
    addItem({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
      instructor: course.instructor
    });
  };

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <nav className="text-blue-200 text-sm">
                  <Link to="/courses" className="hover:text-white transition-colors duration-200">
                    Courses
                  </Link>
                  <span className="mx-2">/</span>
                  <span className="text-white">{selectedCourse.title}</span>
                </nav>
                
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {selectedCourse.title}
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  {selectedCourse.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-blue-100">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                    <span className="font-semibold text-white">{selectedCourse.rating}</span>
                    <span className="ml-1">rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{selectedCourse.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{selectedCourse.duration} total</span>
                  </div>
                </div>
                
                <p className="text-blue-100">
                  Created by <span className="font-semibold text-white">{selectedCourse.instructor}</span>
                </p>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${selectedCourse.price}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => handleAddToCart(selectedCourse)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                    
                    <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
                      <Play className="h-5 w-5 mr-2 inline" />
                      Preview Course
                    </button>
                  </div>
                  
                  <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>30-Day Money-Back Guarantee</p>
                    <p>Full lifetime access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="py-8">
          <MediaGallery 
            videos={selectedCourse.videos} 
            courseTitle={selectedCourse.title}
          />
        </div>
        
        {/* Course Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What you'll learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Master advanced React patterns and best practices',
                    'Build scalable applications with modern architecture',
                    'Implement state management solutions',
                    'Optimize application performance',
                    'Create reusable component libraries',
                    'Deploy applications to production'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Course includes
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-3" />
                    <span>12 hours on-demand video</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-3" />
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>Full lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose from our comprehensive collection of courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${course.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  by {course.instructor}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/courses/${course.id}`}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;