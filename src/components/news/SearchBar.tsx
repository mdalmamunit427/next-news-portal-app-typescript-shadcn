import React from 'react'
import { Input } from '../ui/input';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({onSearch}: SearchBarProps) => {
  return (
    <div className='mb-4 md:w-3/4'>
        <h3 className='font-bold text-lg mb-2'>Search News</h3>
        <Input type="text" 
        onChange={(e) => onSearch(e.target.value)}
        placeholder='Search news...' 
        className='p-2 border rounded-md w-full'
        />
    </div>
  )
}

export default SearchBar