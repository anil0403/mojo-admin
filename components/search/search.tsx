"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchProps {
  placeholder?: string;
}
const Search = ({ placeholder }: SearchProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("searchQuery", e.target.value);
      replace(`${pathname}?${params}`);
    } else {
      params.delete("searchQuery");
      replace(`${pathname}?${params}`);
    }
  }, 200);

  const [search, setSearch] = React.useState<string>("search-by-id");
  console.log(search);

  return (
    <div className="flex items-center gap-5">
      <Input
        onChange={handleSearch}
        type="text"
        placeholder={search}
        className="h-10 min-w-fit"
      />
      <Select defaultValue="search-by-id" onValueChange={(value) => setSearch(value)}>
        <SelectTrigger className="w-[350px]">
          <SelectValue placeholder="Change Searches" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="search-by-id">
              Search By Id
            </SelectItem>
            <SelectItem value="search-by-name">Search By Name</SelectItem>
            <SelectItem value="search-by-stock">Search By Stock</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Search;
