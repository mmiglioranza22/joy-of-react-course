import React from "react";

import { getComments } from "@/helpers/interview-helpers";
import Comment from "@/components/Comment";
import Article from "./Article";
import Discussion from "./Discussion";
import Spinner from "@/components/Spinner";

export const dynamic = "force-dynamic";
// loading.js in this particular case is overkill since we are already served inmmediatly the main html we need: Article.
// Discussion is an additional content that we can wrap with Suspense
async function InterviewExercise() {
  const comments = await getComments();

  return (
    <>
      <Article />
      <Discussion>
        <React.Suspense fallback={<Spinner color={"white"} />}>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </React.Suspense>
      </Discussion>
    </>
  );
}

export default InterviewExercise;
