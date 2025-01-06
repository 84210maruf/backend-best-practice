import React, { useState, useMemo } from 'react';

export default function MemorizeFn() {
  const [query, setQuery] = useState('');
  const items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon"
  ];

  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }, [query, items]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', query);
    console.log('Filtered Items:', filteredItems);
  };

  return (
    <div className='p-4'>
      <h1 className='bg-green-300 inline' >Search Page</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search..." 
          className='border'
        />
        <button className='bg-cyan-200 p-2 rounded-full' type="submit">Search</button>
      </form>

      <p className='font-bold'>results</p> {filteredItems.map(item => <p>{item}</p>)}
      <hr/>
    </div>
  );
}