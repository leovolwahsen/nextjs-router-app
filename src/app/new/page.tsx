import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "../db";

// This is server code, it will only run on the server not the client
async function createTodo(data: FormData) {
    "use server"

    const titel = data.get("titel")?.valueOf()
    if (typeof titel !== "string" || titel.length === 0) {
        throw new Error("Invalid Titel")
    }

    await prisma.todo.create({ data: { titel, compleated: false } })
    redirect("/")
}
export default function Page() {
    return (
        <>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className="flex gap-2 flex-col">
                <input
                    type="text"
                    name="titel"
                    style={{ color: 'black' }}
                    className="border border-slate-300 bg-transperent rounded px-2 py-1 outline-none focus-within:border-slate-100" />
                <div className="flex gap-1 justify-end">
                    <Link href=".."
                        className="border border-slate-300 text-slate-300 px-2 
                        py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700
                        outline-none">Cancel
                    </Link>
                    <button
                        type="submit"
                        className="border border-slate-300 text-slate-300 px-2 
                        py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700
                        outline-none">Create</button>
                </div>
            </form>
        </>
    )
}