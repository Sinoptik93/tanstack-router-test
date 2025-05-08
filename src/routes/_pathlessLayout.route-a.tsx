import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout/route-a")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/_pathlessLayout/route-a"!</div>;
}
