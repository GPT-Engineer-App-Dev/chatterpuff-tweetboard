import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Welcome to ChanTweet</CardTitle>
          <CardDescription className="text-xl text-center">Where anonymity meets microblogging</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center text-gray-600">
            ChanTweet combines the anonymous, threaded discussions of 4chan with the fast-paced, public nature of Twitter.
          </p>
          <Link to="/feed">
            <Button size="lg">Enter ChanTweet</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;