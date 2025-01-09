import React, { useState } from "react";
import { Card, CardContent } from "@/Components/ui/Card";
import { Input } from "@/Components/ui/Input";
import { Button } from "@/Components/ui/Button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({postId}: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      console.log(`Comment added for postId: ${postId}`);
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentToEdit.id);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 text-blue-700"
                ></Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-800"> No Comment </p>
        )}
      </div>
      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-2"
        ></Input>
      </div>
      <div className="mt-6">
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add comment"
          className="w-full mb-2"
        ></Input>
        <Button onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
        className="mt-4">
       {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>



    </div>
  );
}
