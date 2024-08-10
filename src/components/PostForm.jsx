import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const PostForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the post to your backend
    console.log('Submitting post:', content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind? (Anonymously, of course)"
        className="mb-2"
      />
      <Button type="submit" disabled={!content.trim()}>
        Post Anonymously
      </Button>
    </form>
  );
};

export default PostForm;