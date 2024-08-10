import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp } from 'lucide-react';

const PostList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="bg-white">
          <CardContent className="pt-4">
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-gray-500">
            <span>{new Date(post.timestamp).toLocaleString()}</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                Reply ({post.replies})
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PostList;