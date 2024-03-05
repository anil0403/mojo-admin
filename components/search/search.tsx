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
  searchItems?: string[];
}
const Search = ({searchItems }: SearchProps) => {
  const [search, setSearch] = React.useState<string>(
    searchItems ? searchItems[0] : "Search..."
  );

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

  console.log(search);

  return (
    <div className="flex items-center gap-5">
      <Input
        onChange={handleSearch}
        type="text"
        placeholder={search}
        className="h-10 min-w-fit"
      />
      {searchItems && (
        <Select
          defaultValue="search-by-id"
          onValueChange={(value) => setSearch(value)}
        >
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Change Searches" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {searchItems?.map((item) => (
                <SelectItem
                  key={item}
                  value={item.replace(/\s+/g, "-").toLowerCase()}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default Search;
