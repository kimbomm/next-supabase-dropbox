'use client';
import { Input } from "@material-tailwind/react";

export default function SearchComponent({ searchInput, setSerachInput }) {
    return (
        <Input
            label="Search TODO"
            placeholder="Search TODO"
            icon={<i className="fas fa-search" />}
            value={searchInput}
            onChange={(e) => setSerachInput(e.target.value)}
        />
    );
}