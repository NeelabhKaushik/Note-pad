"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a Note...",
      success: "New Note created",
      error: "Failed to create a ew Note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/home.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/home-dark.png"
        height={300}
        width={300}
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notepad{" "}
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h4 w-4 mr-2" />
        Create A Note
      </Button>
      <div className="text-sm">
        Or learn more about Notepad
        <a
          target="_blank"
          href="https://twitter.com/"
          rel="noopener noreferrer"
          className="text-sky-500 hover:underline ml-1"
        >
          here
        </a>
      </div>
    </div>
  );
};

export default DocumentsPage;
