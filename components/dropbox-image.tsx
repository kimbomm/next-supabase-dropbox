'use client';

import { IconButton, Spinner } from "@material-tailwind/react";
import { deleteFile } from "actions/storageActions";
import { useMutation } from "@tanstack/react-query";
import { getImageUrl } from "utils/supabase/storage";
import { queryClient } from "config/react-query-client-provider";

export default function DropboxImage({ image }) {
    const deleteImageMutation = useMutation({
        mutationFn: deleteFile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["images"]
            })
        },
    });
    return <div className="relative w-full flex gap-2 flex-col p-4 border border-gray-100 rounded-2xl shadow-md">
        <div>
            <img
                src={getImageUrl(image.name)}
                alt=""
                className="w-full aspect-square rounded-2xl"
            />
        </div>
        <p>{image.name}</p>

        <div className="absolute top-4 right-4">
            <IconButton
                color="red"
                onClick={() => {
                    deleteImageMutation.mutate(image.name)
                }}
            >
                {
                    deleteImageMutation.isPending ? (
                        <Spinner />
                    ) : (
                        <i className="fas fa-trash"></i>
                    )
                }
            </IconButton>
        </div>
    </div>
}