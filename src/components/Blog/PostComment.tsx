//22d3s0w1nb.execute-api.ap-northeast-1.amazonaws.com/default/saveCommentsToNotion
import React, { useState } from "react";

const PostComment = () => {
  const [emoji, setEmoji] = useState("👍");
  const [username, setUsername] = useState("匿名");
  const [commentText, setCommentText] = useState("");
  const [isVisibleEmojiPicker, setIsVisibleEmojiPicker] = useState(false);
  return (
    <>準備中</>
    // <div
    //   className="commentArea"
    //   style={{
    //     position: "relative",
    //   }}
    // >
    //   <div
    //     className="emojiPicker"
    //     style={{
    //       padding: "16px",
    //       borderRadius: "14px",
    //       position: "absolute",
    //       top: "-2.5rem",
    //       visibility: isVisibleEmojiPicker ? "visible" : "hidden",
    //       background: "#efefef",
    //     }}
    //   >
    //     <button
    //       onClick={() => {
    //         setEmoji("👍");
    //         setIsVisibleEmojiPicker(false);
    //       }}
    //       style={{
    //         border: "none",
    //         background: "transparent",
    //         fontSize: "2rem",
    //       }}
    //     >
    //       👍
    //     </button>
    //     <button
    //       onClick={() => {
    //         setEmoji("❤️");
    //         setIsVisibleEmojiPicker(false);
    //       }}
    //       style={{
    //         border: "none",
    //         background: "transparent",
    //         fontSize: "2rem",
    //       }}
    //     >
    //       ❤️
    //     </button>
    //     <button
    //       onClick={() => {
    //         setEmoji("✨");
    //         setIsVisibleEmojiPicker(false);
    //       }}
    //       style={{
    //         border: "none",
    //         background: "transparent",
    //         fontSize: "2rem",
    //       }}
    //     >
    //       ✨
    //     </button>
    //     <button
    //       onClick={() => {
    //         setEmoji("😯");
    //         setIsVisibleEmojiPicker(false);
    //       }}
    //       style={{
    //         border: "none",
    //         background: "transparent",
    //         fontSize: "2rem",
    //       }}
    //     >
    //       😯
    //     </button>
    //     <button
    //       onClick={() => {
    //         setEmoji("😂");
    //         setIsVisibleEmojiPicker(false);
    //       }}
    //       style={{
    //         border: "none",
    //         background: "transparent",
    //         fontSize: "2rem",
    //       }}
    //     >
    //       😂
    //     </button>
    //   </div>
    //   <div style={{ display: "flex", gap: "12px" }}>
    //     <div
    //       className="emojiArea"
    //       style={{ display: "flex", alignItems: "center" }}
    //     >
    //       <button
    //         style={{
    //           margin: 0,
    //           padding: 0,
    //           fontSize: "3rem",
    //           border: "none",
    //           background: "transparent",
    //           cursor: "pointer",
    //         }}
    //         onClick={() => setIsVisibleEmojiPicker(!isVisibleEmojiPicker)}
    //       >
    //         {emoji}
    //       </button>
    //     </div>
    //     <div>
    //       <input
    //         className="usernameEditor"
    //         type="text"
    //         name="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         style={{ border: "1px solid rgb(var(--gray))" }}
    //       />
    //       <textarea
    //         className="textEditor"
    //         name="comment"
    //         value={commentText}
    //         onChange={(e) => setCommentText(e.target.value)}
    //         style={{ border: "1px solid rgb(var(--gray))" }}
    //       />
    //       <button
    //         onClick={async () => {
    //           alert(emoji + username + commentText);
    //           const postRequest = await fetch(
    //             "https://22d3s0w1nb.execute-api.ap-northeast-1.amazonaws.com/default/saveCommentsToNotion",
    //             {
    //               method: "POST",
    //               headers: {
    //                 "Content-Type": "application/json",
    //               },
    //               body: JSON.stringify({
    //                 emoji: emoji,
    //                 username: username,
    //                 text: commentText,
    //               }),
    //             }
    //           );
    //           console.log(postRequest);
    //         }}
    //         style={{
    //           border: "1px solid rgb(var(--gray))",
    //           background: "transparent",
    //           padding: "8px",
    //           borderRadius: "8px",
    //           fontWeight: "bold",
    //         }}
    //         disabled={
    //           emoji.match(/\S/g) == null ||
    //           username.match(/\S/g) == null ||
    //           commentText.match(/\S/g) == null
    //         }
    //       >
    //         コメントする
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostComment;
