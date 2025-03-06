import { useParams } from "react-router-dom";
import { Archive } from "./archives/Archive";
import { Assignment } from "./assignment/Assignment";
import { Note } from "./note/Note";
import { Question } from "./question/Question";
import { Research } from "./research/Research";
import { Study } from "./study/Study";
import { LoadingSkeleton } from './LoadingSkeleton';
import { useState } from "react";

const components = {
  'study-material': <Study />,
  'assignments': <Assignment />,
  'questions': <Question />,
  'note': <Note />,
  'research-paper': <Research />,
  'archives': <Archive />,
};

export const Notes = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);

  const getCategory = (category) => {
    return components[category] || `Invalid Category: ${category}`;
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {loading ? <LoadingSkeleton />
        : getCategory(category)
      }
    </div>
  );
};
