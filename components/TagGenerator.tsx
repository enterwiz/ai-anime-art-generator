"use client";

import { Chip, Textarea } from "@nextui-org/react";
import { useCompletion } from "ai/react";
import React from "react";

const initialTags = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"];

export default function TagGenerator() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });
  const [tags, setTags] = React.useState(initialTags);

  const handleClose = (tagToRemove: any) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    if (tags.length === 1) {
      setTags(initialTags);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-12 gap-4">
          <Textarea
            key="input"
            variant="bordered"
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
        </div>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button type="submit">Generate</button>
        <div className="flex gap-2">
          {tags.map((fruit, index) => (
            <Chip key={index} onClose={() => handleClose(fruit)} variant="flat">
              {fruit}
            </Chip>
          ))}
        </div>
      </form>
    </div>
  );
}

// import { useState } from "react";

// const randomColor = () => {
//   const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// const TagGenerator = () => {
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState<string[]>([]);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ content }),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       setTags(data.tags);
//       setError("");
//     } catch (error) {
//       setError("Failed to generate tags");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           name="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Enter your content here"
//         />
//         <button type="submit">Generate Tags</button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <div style={{ marginTop: "20px" }}>
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             style={{
//               display: "inline-block",
//               backgroundColor: randomColor(),
//               color: "white",
//               padding: "5px 10px",
//               margin: "5px",
//               borderRadius: "5px",
//             }}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TagGenerator;

