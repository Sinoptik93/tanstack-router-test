import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout/route-b")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/_pathlessLayout/route-b"!</div>;
}
