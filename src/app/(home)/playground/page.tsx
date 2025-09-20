"use client";

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import AceEditor from "react-ace";
import * as Sqrl from "squirrelly";

import "ace-builds/src-noconflict/mode-handlebars";
import "ace-builds/src-noconflict/theme-monokai";

Sqrl.templates.define(
  "mypartial",
  Sqrl.compile("Partial content: the value of `num` is {{ it.num }}"),
);

Sqrl.filters.define("reverse", (str) => str.split("").reverse().join(""));

Sqrl.filters.define("capitalize", (str) => str.toUpperCase());

Sqrl.filters.define("join", (val, separator) => val.join(separator));

Sqrl.defaultConfig.autoTrim = ["nl", "nl"];

const INITIAL_TEMPLATE = `Have fun playing with Squirrelly! :D
------------------------------------

{{! /* Welcome to the playground!
See the comment at the bottom for more info */}}

These fruits are amazing:

{{@each(it.fruits) => fruit}}

- {{fruit | reverse | capitalize}}

{{/each}}


You can put any JS inside tags:
-------------------------------
2+4 = {{2 + 4}}


Call functions
--------------
5 = {{it.five()}}


Display arrays
--------------

{{it.arr.join()}}


{{it.fruits | join(" + ")}}


Include partials
----------------
This is a partial: {{@include("mypartial", {num: 3})/}}


And more! Have fun!

{{! /*
  A few quick notes:
- You can edit the Squirrelly config using the menu in the bottom right
- This playground is using Ace's syntax highlighting for Handlebars, so it may not be super accurate
- One partial ("mypartial") and several filters ("reverse", "capitalize") are pre-defined
- Sqrl.defaultConfig.autoTrim is set to ['nl', 'nl'], so it trims leading and trailing newlines.
- The template data is pre-defined!

It looks like this:
------
{
  number: 78,
  five: function() {
    return 5
  },
  arr: ['one', 'two', 'three', 'four'],
  obj: {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
  },
  users: [
    { name: 'Ben', job: 'Maintainer' },
    { name: 'Joe', job: 'Maintainer' }
  ]
}
------
*/}}
`;

const RENDER_DATA = {
  number: 78,
  five: () => 5,
  arr: ["one", "two", "three", "four"],
  obj: {
    key1: "val1",
    key2: "val2",
    key3: "val3",
  },
  users: [
    { name: "Ben", job: "Maintainer" },
    { name: "Joe", job: "Maintainer" },
  ],
  fruits: ["Apple", "Pear", "Orange", "Lemon"],
} as const;

const INITIAL_CONFIG = {
  autoEscape: true,
  tagOpen: "{{",
  tagClose: "}}",
  display: "result" as const,
};

// Types
interface Config {
  autoEscape: boolean;
  tagOpen: string;
  tagClose: string;
  display: "function" | "result";
}

interface CompilationResult {
  functionString: string;
  templateResult: string;
  error: string | null;
}

// Utility functions
function formatError(error: unknown): string {
  if (!error) return "Unknown error";
  if (error instanceof Error)
    return error.stack || error.message || String(error);
  if (typeof error === "object" && error !== null) {
    const errorObj = error as Record<string, unknown>;
    const message = errorObj.message || errorObj.reason || errorObj.type;
    try {
      const json = JSON.stringify(error);
      return message ? `${String(message)} ${json}` : json;
    } catch {
      return message ? String(message) : Object.prototype.toString.call(error);
    }
  }
  return String(error);
}

// Custom hook for template compilation
function useTemplateCompilation(
  template: string,
  config: Config,
): CompilationResult {
  const [result, setResult] = useState<CompilationResult>({
    functionString: "",
    templateResult: "",
    error: null,
  });

  useEffect(() => {
    const sqrlConfig = {
      autoEscape: config.autoEscape,
      tags: [config.tagOpen, config.tagClose] as [string, string],
    };

    try {
      const compiled = Sqrl.compile(template, sqrlConfig);

      const functionString = compiled.toString();
      const templateResult = Sqrl.render(template, RENDER_DATA, sqrlConfig);

      setResult({
        functionString,
        templateResult,
        error: null,
      });
    } catch (error) {
      setResult({
        functionString: "",
        templateResult: "",
        error: formatError(error),
      });
    }
  }, [template, config]);

  return result;
}

// Settings Panel Component
interface SettingsPanelProps {
  config: Config;
  onConfigUpdate: (newData: Partial<Config>) => void;
}

function SettingsPanel({
  config,
  onConfigUpdate,
}: SettingsPanelProps): React.JSX.Element {
  return (
    <div className="absolute right-6 bottom-6 z-10 w-64">
      <div className="rounded-lg border border-neutral-800 bg-neutral-950/90 backdrop-blur px-3 py-3 shadow-lg">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Settings
        </div>
        <div className="space-y-3 text-sm">
          <label className="flex items-center justify-between gap-2">
            <span className="text-neutral-300">Auto escape</span>
            <input
              type="checkbox"
              checked={config.autoEscape}
              onChange={(e) => onConfigUpdate({ autoEscape: e.target.checked })}
              className="h-4 w-4"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400">Open tag</span>
            <input
              type="text"
              value={config.tagOpen}
              onChange={(e) => onConfigUpdate({ tagOpen: e.target.value })}
              className="h-9 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-neutral-100 placeholder-neutral-500 outline-none focus:ring-1 focus:ring-neutral-600"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400">Close tag</span>
            <input
              type="text"
              value={config.tagClose}
              onChange={(e) => onConfigUpdate({ tagClose: e.target.value })}
              className="h-9 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1 text-neutral-100 placeholder-neutral-500 outline-none focus:ring-1 focus:ring-neutral-600"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-xs text-neutral-400">Display</span>
            <select
              value={config.display}
              onChange={(e) =>
                onConfigUpdate({
                  display: e.target.value as "function" | "result",
                })
              }
              className="h-9 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1 text-neutral-100 outline-none focus:ring-1 focus:ring-neutral-600"
            >
              <option
                value="function"
                className="text-neutral-900"
                style={{ color: "#111827", backgroundColor: "#ffffff" }}
              >
                function
              </option>
              <option
                value="result"
                className="text-neutral-900"
                style={{ color: "#111827", backgroundColor: "#ffffff" }}
              >
                result
              </option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

function Playground(): React.JSX.Element {
  const [template, setTemplate] = useState<string>(INITIAL_TEMPLATE);
  const [config, setConfig] = useState<Config>(INITIAL_CONFIG);
  const [mounted, setMounted] = useState<boolean>(false);

  const { functionString, templateResult, error } = useTemplateCompilation(
    template,
    config,
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConfigUpdate = useCallback((newData: Partial<Config>): void => {
    setConfig((prev) => ({ ...prev, ...newData }));
  }, []);

  const displayContent = (): string => {
    if (!mounted) return "";
    if (error) return error;
    return config.display === "function" ? functionString : templateResult;
  };

  return (
    <div className="relative">
      <SettingsPanel config={config} onConfigUpdate={handleConfigUpdate} />

      <div className="flex h-[calc(100vh-var(--fd-header-height,3.5rem))]">
        <div className="w-1/2 h-full border-r border-neutral-800">
          <AceEditor
            mode="handlebars"
            theme="monokai"
            value={template}
            onChange={setTemplate}
            width="100%"
            height="100%"
            fontSize={14}
            setOptions={{
              useWorker: false,
              showGutter: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="w-1/2 h-full overflow-auto font-mono bg-[var(--color-fd-primary)] text-neutral-100 border-l border-neutral-800 p-4">
          <pre className="block whitespace-pre bg-transparent text-sm m-0">
            {displayContent()}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function App(): React.JSX.Element {
  return <Playground />;
}
