'use client';

import { IconButton } from "@material-tailwind/react";

export default function DropboxImage() {
    return <div className="relative w-full flex gap-2 flex-col p-4 border border-gray-100 rounded-2xl shadow-md">
        <div>
            <img src="/images/cutedog.jpg" alt="" className="w-full aspect-square rounded-2xl" />
        </div>
        <p>cutedog.jpg</p>

        <div className="absolute top-4 right-4">
            <IconButton
                color="red"
                onClick={() => {}}
            >
                <i className="fas fa-trash"></i>
            </IconButton>
        </div>
    </div>
}