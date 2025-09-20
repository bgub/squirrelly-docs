import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 py-16">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <img
            src="/logo/square-acorn.svg"
            alt="Squirrelly Logo"
            className="h-24 w-24"
          />
          <h1 className="text-4xl font-bold sm:text-5xl">Squirrelly</h1>
        </div>
        <p className="text-fd-muted-foreground text-balance">
          Powerful, lightweight, pluggable JS template engine. Written in
          TypeScript. Supports helpers, partials, filters, template inheritance,
          and async templates.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/docs"
          className={cn(buttonVariants({ color: "primary" }), "px-4 py-2")}
        >
          Get Started
        </Link>
        <Link
          href="/playground"
          className={cn(buttonVariants({ color: "outline" }), "px-4 py-2")}
        >
          Open Playground
        </Link>
      </div>

      {/* Features and Code Examples Side by Side */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              JavaScript Templating: Reimagined
            </h2>
            <p className="mb-4 text-fd-muted-foreground">
              A powerful template engine that combines the best features from
              Nunjucks, Handlebars, EJS, and Pug:
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Fantastic Performance</strong> - Squirrelly has
                best-in-class performance, beating other JS template engines in
                almost all benchmarks
              </li>
              <li>
                • <strong>Lightweight size</strong> - Only 4KB gzipped, despite
                supporting helpers, filters, partials, template inheritance, and
                async templates
              </li>
              <li>
                • <strong>Template inheritance</strong> - Nunjucks-style
                template inheritance with{" "}
                <code className="rounded bg-fd-muted px-1">
                  {"{{@extends}}"}
                </code>
              </li>
              <li>
                • <strong>Powerful filters</strong> - Define custom filters like{" "}
                <code className="rounded bg-fd-muted px-1">capitalize</code>,{" "}
                <code className="rounded bg-fd-muted px-1">join</code>, and more
              </li>
              <li>
                • <strong>Custom delimiters</strong> - Configure your own
                template delimiters to fit your project needs
              </li>
              <li>
                • <strong>Plugin support</strong> - Extensible plugin system
                that can be chained together Gulp-style to modify template
                syntax or minify HTML
              </li>
              <li>
                • <strong>Whitespace control</strong> - EJS-style whitespace
                trimming for clean output
              </li>
              <li>
                • <strong>Async support</strong> - Full support for asynchronous
                templates and operations
              </li>
              <li>
                • <strong>TypeScript types</strong> - Written in TypeScript with
                full type definitions and UMD build
              </li>
              <li>
                • <strong>Custom tag-type prefixes</strong> - Change helpers to
                begin with <code className="rounded bg-fd-muted px-1">~</code>{" "}
                instead of <code className="rounded bg-fd-muted px-1">@</code>
              </li>
              <li>
                • <strong>Informative errors</strong> - Beautiful error messages
                that tell you exactly where and what the problem is when tags or
                comments are left unclosed
              </li>
            </ul>
          </div>
          <div>
            <Tabs
              items={["Example 1", "Example 2", "Partials", "Layouts"]}
              className="w-full"
            >
              <Tab value="Example 1">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`Hi {{it.user}}!

<ul>
{{@each(it.user.friends) => friend}}
  <li>{{friend.first | capitalize}} {{friend.last}}</li>
{{/each}}
</ul>

Here are your badges:
{{it.badges | join(", ") | capitalize}}`}</code>
                </pre>
              </Tab>
              <Tab value="Example 2">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`{{! /* Embedded JS templates mean that you can
  write any valid JS expression inside interpolate tags: */ }}

{{ 2 + 4 }}`}</code>
                </pre>
              </Tab>
              <Tab value="Partials">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`{{@include("mypartial") /}}

{{@includeFile('./navbar', {pages: [
  'home',
  'about',
  'users'
]}) /}}`}</code>
                </pre>
              </Tab>
              <Tab value="Layouts">
                <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm">
                  <code>{`{{@extends('layout1', it)}}
This is the content of the page
{{#title}}
Custom Title
{{#description}}
{{it.name}}'s cool site
{{/extends}}`}</code>
                </pre>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
