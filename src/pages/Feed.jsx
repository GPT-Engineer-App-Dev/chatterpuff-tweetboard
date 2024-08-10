import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchPosts = async () => {
  // Simulated API call
  return [
    { id: 1, content: "This is an anonymous post!", replies: 5, timestamp: new Date().toISOString() },
    { id: 2, content: "ChanTweet is pretty cool!", replies: 2, timestamp: new Date().toISOString() },
    { id: 3, content: "Anyone else here from 4chan?", replies: 8, timestamp: new Date().toISOString() },
  ];
};

const Feed = () => {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div className="text-center mt-8">Loading posts...</div>;
  if (isError) return <div className="text-center mt-8 text-red-500">Error loading posts</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-3xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>ChanTweet Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <PostForm />
          <PostList posts={posts} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Feed;