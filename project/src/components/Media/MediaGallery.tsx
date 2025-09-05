import React, { useState } from 'react';
import { Play, Clock, Eye, Star } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface Video {
  id: string;
  title: string;
  duration: string;
  url: string;
  thumbnail: string;
}

interface MediaGalleryProps {
  videos: Video[];
  courseTitle?: string;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ videos, courseTitle }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videos[0] || null);
  const [videoProgress, setVideoProgress] = useState<Record<string, number>>({});

  const handleVideoProgress = (videoId: string, progress: number) => {
    setVideoProgress(prev => ({
      ...prev,
      [videoId]: progress
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2">
          {selectedVideo ? (
            <div className="space-y-6">
              <VideoPlayer
                src={selectedVideo.url}
                title={selectedVideo.title}
                onProgress={(progress) => handleVideoProgress(selectedVideo.id, progress)}
              />
              
              {/* Video Info */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedVideo.title}
                </h2>
                {courseTitle && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    From: {courseTitle}
                  </p>
                )}
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedVideo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>1,234 views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>4.8 rating</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Select a video to start watching</p>
            </div>
          )}
        </div>

        {/* Video List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Course Content ({videos.length} videos)
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {videos.map((video, index) => {
              const progress = videoProgress[video.id] || 0;
              const isSelected = selectedVideo?.id === video.id;
              
              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`group relative bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    isSelected 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:ring-1 hover:ring-gray-300 dark:hover:ring-gray-600'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-200">
                        <Play className="h-5 w-5 text-white" />
                      </div>
                      
                      {/* Progress indicator */}
                      {progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 rounded-b">
                          <div
                            className="h-full bg-blue-500 rounded-b transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className={`text-sm font-medium line-clamp-2 ${
                          isSelected 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {index + 1}. {video.title}
                        </h4>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {video.duration}
                        </span>
                        {progress > 0 && (
                          <span className="text-xs text-blue-600 dark:text-blue-400">
                            {Math.round(progress)}% watched
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;