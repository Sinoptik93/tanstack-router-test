export const Spinner = ({
    show,
    wait,
}: {
    show?: boolean;
    wait?: `delay-${number}`;
}) => (
    <div
        className={`inline-block animate-spin px-3 transition ${
            (show ?? true)
                ? `opacity-1 duration-500 ${wait ?? "delay-300"}`
                : "duration-500 opacity-0 delay-0"
        }`}
    >
        ⍥
    </div>
);
