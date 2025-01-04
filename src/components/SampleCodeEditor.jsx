import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

export default function SampleCodeEditor() {
  const [themeLoaded, setThemeLoaded] = useState(false);

  const code = "print('algovisor rocks!')";
  const handleEditorDidMount = (editor, monaco) => {
    // Define the custom theme when Monaco is fully loaded
    if (monaco && !themeLoaded) {
      monaco.editor.defineTheme("github-copilot-theme", {
        base: "vs-dark", // Use 'vs-dark' as the base theme (or 'vs' for light)
        inherit: true,
        rules: [
          { token: "keyword", foreground: "FF79C6" }, // Pinkish for keywords
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
    <div className="h-[100%] w-[100%] rounded-lg bg-gray-800 border-gray-600 border-[1px] overflow-hidden">
      <div className="p-2">
        {" "}
        <h6 className="text-sm">Code</h6>
      </div>
      <div className="p-2 bg-[#0D1117] border-b-gray-700 border-b-[0.1px]">
        <h6 className="text-sm">Python 3</h6>
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
