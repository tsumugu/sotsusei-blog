//22d3s0w1nb.execute-api.ap-northeast-1.amazonaws.com/default/saveCommentsToNotion
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

interface CommentInfo {
  slug: string;
}

interface Comment {
  id: number;
  created_at: Date;
  slug: string;
  pos: string;
  emoji: string;
  username: string;
  commenttext: string;
}

const PostComment = (props: CommentInfo) => {
  const [emoji, setEmoji] = useState("👍");
  const [username, setUsername] = useState("匿名");
  const [commentText, setCommentText] = useState("");
  const [isVisibleEmojiPicker, setIsVisibleEmojiPicker] = useState(true);

  const [comments, setComments] = useState([] as Comment[]);
  const resetForms = () => {
    setEmoji("👍");
    setUsername("匿名");
    setCommentText("");
  };
  const fetchComments = async () => {
    resetForms();
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("created_at, slug, pos, emoji, username, commenttext")
        .like("slug", props.slug);
      if (error) {
        console.error("Error fetching comments:", error);
      }
      const comments = data ? (data as Comment[]) : [];
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <div
        className="commentArea"
        style={{
          position: "relative",
        }}
      >
        <div
          className="emojiPicker"
          style={{
            padding: "16px",
            borderRadius: "14px",
            position: "absolute",
            top: "-2.5rem",
            visibility: isVisibleEmojiPicker ? "visible" : "hidden",
            background: "#efefef",
          }}
        >
          <button
            onClick={() => {
              setEmoji("👍");
              setIsVisibleEmojiPicker(false);
            }}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
            }}
          >
            👍
          </button>
          <button
            onClick={() => {
              setEmoji("❤️");
              setIsVisibleEmojiPicker(false);
            }}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
            }}
          >
            ❤️
          </button>
          <button
            onClick={() => {
              setEmoji("✨");
              setIsVisibleEmojiPicker(false);
            }}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
            }}
          >
            ✨
          </button>
          <button
            onClick={() => {
              setEmoji("😯");
              setIsVisibleEmojiPicker(false);
            }}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
            }}
          >
            😯
          </button>
          <button
            onClick={() => {
              setEmoji("😂");
              setIsVisibleEmojiPicker(false);
            }}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "2rem",
            }}
          >
            😂
          </button>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            className="emojiArea"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button
              style={{
                margin: 0,
                padding: 0,
                fontSize: "3rem",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={() => setIsVisibleEmojiPicker(!isVisibleEmojiPicker)}
            >
              {emoji}
            </button>
          </div>
          <div>
            <input
              className="usernameEditor"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ border: "1px solid rgb(var(--gray))" }}
            />
            <textarea
              className="textEditor"
              name="comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              style={{ border: "1px solid rgb(var(--gray))" }}
            />
            <button
              onClick={async () => {
                const { error } = await supabase.from("comments").insert({
                  slug: props.slug,
                  pos: "",
                  emoji: emoji,
                  username: username,
                  commenttext: commentText,
                });
                console.log(error);
                fetchComments();
              }}
              style={{
                border: "1px solid rgb(var(--gray))",
                background: "transparent",
                padding: "8px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
              disabled={
                emoji.match(/\S/g) == null ||
                username.match(/\S/g) == null ||
                commentText.match(/\S/g) == null
              }
            >
              コメントする
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1em",
          borderTop: "1px solid rgb(var(--gray))",
        }}
      >
        {comments.map((comment) => {
          return (
            <div
              style={{
                paddingTop: "1em",
                paddingBottom: "1em",
                display: "flex",
                gap: "12px",
                borderBottom: "1px solid rgb(var(--gray))",
              }}
            >
              <div
                className="emojiArea"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "3rem",
                }}
              >
                {comment.emoji}
              </div>
              <div>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {comment.username}
                </p>
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  {comment.commenttext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostComment;
