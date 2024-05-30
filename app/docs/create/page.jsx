import Link from "next/link";

export default function Page() {
  return (
    <section className="h-[calc(100dvh-64px)] bg-slate-200/40 py-10 dark:bg-slate-950">
      <div className="container mx-auto -mt-4 flex h-full flex-col items-center justify-center gap-6 p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl font-bold">AI DevRel</h1>
          <h6 className="text-3xl font-medium text-slate-600/80">
            From idea to product
          </h6>
        </div>

        <div className=" w-full max-w-3xl rounded-2xl bg-gradient-to-r from-orange-500 to-violet-800 p-1">
          <div className="h-full w-full rounded-xl bg-white">
            <textarea
              placeholder="Ask anything you want to know..."
              className="w-full resize-none overflow-y-hidden rounded-xl border-none p-4 outline-none"
            />
            <div className="flex items-center justify-between px-4 pb-4">
              <div className="text-sm dark:text-white/80">GPT 3.5-Turbo</div>
              <div className="flex items-center gap-4 text-black/70 dark:text-white/80">
                <i class="fa-regular fa-image"></i>
                <Link href="/docs/result">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-black/70">
          Get faster answers, longer context, image uploads, and access to
          GPT-3.5-Turbo.{" "}
        </p>
      </div>
    </section>
  );
}
