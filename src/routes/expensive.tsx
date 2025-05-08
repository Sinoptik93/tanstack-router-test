import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expensive")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/expensive"!</div>;
}
