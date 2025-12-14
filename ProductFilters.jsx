import React from 'react';

export default function ProductFilters({ categories, active, onChange }){
  return (
    <div className="filters">
      <button className={`filter-btn ${active === 'all' ? 'active' : ''}`} onClick={()=>onChange('all')}>All</button>
      {categories.map((c)=> (
        <button key={c} className={`filter-btn ${active === c ? 'active' : ''}`} onClick={()=>onChange(c)}>{c}</button>
      ))}
    </div>
  )
}
