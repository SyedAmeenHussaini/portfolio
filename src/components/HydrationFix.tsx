"use client";

import React from "react";

/**
 * Pre-hydration script that suppresses hydration mismatch warnings
 * caused by browser extensions and dev tools injecting attributes.
 * Instead of removing attributes (which breaks dev tooling),
 * we suppress the specific console.error calls from React.
 */
export function HydrationFix(): React.JSX.Element {
  return (
    <script
      id="hydration-fix"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var origError = console.error;
            var origWarn = console.warn;
            console.error = function() {
              if (typeof arguments[0] === 'string' && (
                arguments[0].includes('hydrat') ||
                arguments[0].includes('Hydrat') ||
                arguments[0].includes('data-cursor-ref') ||
                arguments[0].includes('did not match')
              )) return;
              return origError.apply(console, arguments);
            };
            console.warn = function() {
              if (typeof arguments[0] === 'string' && (
                arguments[0].includes('hydrat') ||
                arguments[0].includes('Hydrat')
              )) return;
              return origWarn.apply(console, arguments);
            };
          })();
        `,
      }}
    />
  );
}
