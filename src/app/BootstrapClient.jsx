"use client";

import { useEffect } from "react";

// bootstrap.bundle.min.js reads `window`/`document` as soon as it is
// evaluated, so it must only ever be loaded on the client. In the
// original Vite app this was a plain side-effect import in main.jsx;
// here we load it the same way but deferred to the browser via a
// dynamic import inside useEffect so Next.js never tries to evaluate
// it during server rendering.
export default function BootstrapClient() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return null;
}
