"use client"

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router"

export const TrashBox = () => { 
    const router = useRouter();
    const params = useParams();
    const documents = useQuery(api.documents.getTrash )
    const restore = 
    return (
        <div className=""></div>
    )
}