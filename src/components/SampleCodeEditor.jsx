import { CodeBracketIcon } from "@heroicons/react/16/solid";
import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import DropDown from "./ui/dropdown";

export default function SampleCodeEditor() {
  const [themeLoaded, setThemeLoaded] = useState(false);

  const code = `class Solution:
    def lengthOfLastWord(self, s: str) -> int:`;
  const handleEditorDidMount = (editor, monaco) => {
    // Define the custom theme when Monaco is fully loaded
    if (monaco && !themeLoaded) {
      monaco.editor.defineTheme("github-copilot-theme", {
        base: "vs-dark", // Use 'vs-dark' as the base theme (or 'vs' for light)
        inherit: true,
        rules: [
          { token: "keyword", foreground: "80C7FF" }, // Pinkish for keywords
          { token: "variable", foreground: "F1FA8C" }, // Light yellow for variables
          { token: "string", foreground: "F1FA8C" }, // Light yellow for strings
          { token: "comment", foreground: "6A9955" }, // Greenish for comments
          { token: "number", foreground: "BD93F9" }, // Light purple for numbers
          { token: "type", foreground: "50FA7B" }, // Green for types
          { token: "function", foreground: "FF79C6" }, // Pink for functions
        ],
        colors: {
          "editor.background": "#0D1117", // Dark background like GitHub Copilot
          "editorCursor.foreground": "#528BFF", // Cursor color
          "editor.lineHighlightBackground": "#3E4451", // Line highlight
          "editor.selectionBackground": "#3E4451", // Selection color
        },
      });

      // Set the theme-loaded state to true
      setThemeLoaded(true);
      editor.updateOptions({
        theme: "github-copilot-theme",
      });
    }
  };
  return (
    <div className="h-full w-[100%] rounded-lg bg-[#18181C] border-[#27272A] border-[1px] overflow-hidden">
      <div className="p-2 flex space-x-1">
        <CodeBracketIcon className="size-5 text-white pt-0" />
        <h6 className="text-sm font-semibold">Code</h6>
      </div>

      <div className="p-2 bg-[#0D1117] border-[#27272A] border-b-[0.1px]">
        <DropDown />
      </div>
      <div className="bg-[#0D1117] h-[20px]"></div>
      <Editor
        height="100%"
        language="python"
        theme="vs-dark"
        value={code}
        onMount={handleEditorDidMount} // Handle the Monaco editor mount event
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}
